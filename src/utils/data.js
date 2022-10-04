import { DAY_MS } from '../constants';

const EMPTY_DIVISION = {
  date: Date.now(),
  events: [],
  affectedNumberByType: {},
  totalAffectedNumber: 0,
  relativeSize: 0,
};

/**
 * Filter out incomplete events, re-aggregate the rest and sort them by date.
 */
function aggregateEvents(events) {
  return events
    .filter((event) => event.lat && event.lon)
    .map((event) => ({
      date: (new Date(event.from)).getTime(),
      lat: event.lat,
      lon: event.lon,
      affectedType: Number(event.affected_type?.[0]) || 0,
      affectedNumber: Number(event.affected_number?.[0]) || 0,
    }))
    .sort((a, b) => a.date - b.date);
}

/**
 * Calculates timespan of each division. The result is intentionally not an exact number of days to prevent having
 * many empty divisions on timeline edges.
 */
function getDivisionTimespan(aggregatedEvents, divisionsNumber) {
  const firstEventDate = aggregatedEvents[0].date;
  const lastEventDate = aggregatedEvents[aggregatedEvents.length - 1].date;

  const totalDays = (lastEventDate - firstEventDate) / DAY_MS;
  return (totalDays / divisionsNumber) * DAY_MS;
}

/**
 * Returns dates within the requested timespan picked from list of dates with events.
 */
function getDivisionDates(startDate, timeSpan, datesWithEvents) {
  return datesWithEvents.filter((date) => (
    date >= startDate && date < (startDate + timeSpan)
  ));
}

/**
 * Provision relative size for each division in the provided list to the highest affected number per division recorded.
 * This is going to be used to determine division's bar size on the timeline.
 */
function provisionRelativeSize(divisions) {
  const highestAffectedNumber = Math.max(...divisions.map(({ totalAffectedNumber }) => totalAffectedNumber));
  return divisions.map((division) => {
    let relativeSize = division.totalAffectedNumber / highestAffectedNumber;
    if (division.totalAffectedNumber) {
      // If there are affected people within the division, ensure that it is not rendered as a zero-height bar.
      relativeSize = Math.max(relativeSize, 0.05);
    }

    return {
      ...division,
      relativeSize,
    };
  });
}

/**
 * Aggregates all the events into divisions where each division will contain info about all the events that happened
 * during that division's time period and aggregated number of affected people by type.
 */
export function getDivisionsFromEvents(events, divisionsNumber) {
  // The first division must always be empty according to the task:
  // > the appearance of points on the map is animated from: no point to showing all points
  const trueDivisionsNumber = divisionsNumber - 1;
  const aggregatedEvents = aggregateEvents(events);

  const firstEventDate = aggregatedEvents[0].date;
  const divisionTimespan = getDivisionTimespan(aggregatedEvents, trueDivisionsNumber);

  const eventsByDate = aggregatedEvents.reduce((result, event) => ({
    ...result,
    [event.date]: [
      ...result[event.date] || [],
      event,
    ],
  }), []);
  const datesWithEvents = Object.keys(eventsByDate);

  const cumulativeAffectedNumberByType = {};

  // Create requested divisions number and fill them with events and aggregated stats for respective time periods.
  const divisions = Array(trueDivisionsNumber).fill('').map((_, i) => {
    const division = {
      ...EMPTY_DIVISION,
      date: firstEventDate + (i * divisionTimespan),
    };

    // A list of all date timestamps within the current division period for quick access of events.
    const divisionDates = getDivisionDates(division.date, divisionTimespan, datesWithEvents);
    division.events = divisionDates.reduce((a, date) => a.concat(...(eventsByDate[date] || [])), []);

    // Aggregate current division's level stats (not cumulative).
    division.affectedNumberByType = division.events.reduce((a, event) => ({
      ...a,
      [event.affectedType]: (a[event.affectedType] || 0) + event.affectedNumber,
    }), {});

    // Add current division's level stats to cumulative stats. This calculation happens on data processing layer
    // to avoid unnecessary calculations in runtime.
    Object.keys(division.affectedNumberByType).forEach((type) => {
      cumulativeAffectedNumberByType[type] = (cumulativeAffectedNumberByType[type] || 0) + division.affectedNumberByType[type];
    });

    division.cumulativeAffectedNumberByType = { ...cumulativeAffectedNumberByType };
    division.totalAffectedNumber = Object.values(division.affectedNumberByType).reduce((a, v) => a + v, 0);

    return division;
  });

  const firstDivision = {
    ...EMPTY_DIVISION,
    date: firstEventDate - divisionTimespan,
  };

  return provisionRelativeSize([firstDivision, ...divisions]);
}
