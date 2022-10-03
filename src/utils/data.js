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
 * Provision relative size for each division in the provided list to the highest affected number per division recorded.
 * This is going to be used to determine division's bar size on the timeline.
 */
function provisionRelativeSize(divisions) {
  const highestAffectedNumber = Math.max(...divisions.map(({ totalAffectedNumber }) => totalAffectedNumber));
  return divisions.map((division) => ({
    ...division,
    relativeSize: division.totalAffectedNumber / highestAffectedNumber,
  }));
}

/**
 * Calculates the minimum full number of days per division to fit all events within the provided amount of divisions.
 */
function getDaysPerDivision(aggregatedEvents, divisionsNumber) {
  const firstEventDate = aggregatedEvents[0].date;
  const lastEventDate = aggregatedEvents[aggregatedEvents.length - 1].date;

  const totalDays = (lastEventDate - firstEventDate) / DAY_MS;
  return Math.ceil(totalDays / divisionsNumber);
}

/**
 * Aggregates all the events into divisions where each division will contain info about all the events that happened
 * during that division's time period and aggregated number of affected people by type.
 */
export function getDivisionsFromEvents(events, divisionsNumber) {
  const aggregatedEvents = aggregateEvents(events);

  const firstEventDate = aggregatedEvents[0].date;
  const daysPerDivision = getDaysPerDivision(aggregatedEvents, divisionsNumber);
  const msPerDivision = daysPerDivision * DAY_MS;

  const eventsByDate = aggregatedEvents.reduce((result, event) => ({
    ...result,
    [event.date]: [
      ...result[event.date] || [],
      event,
    ],
  }), []);

  const cumulativeAffectedNumberByType = {};

  // Create requested divisions number and fill them with events and aggregated stats for respective time periods.
  const divisions = Array(divisionsNumber).fill('').map((_, i) => {
    const division = {
      ...EMPTY_DIVISION,
      date: firstEventDate + (i * msPerDivision),
    };

    // A list of all date timestamps within the current division period for quick access of events.
    const divisionDates = Array(daysPerDivision).fill('').map((_, j) => division.date + j * DAY_MS);
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

  return provisionRelativeSize(divisions);
}
