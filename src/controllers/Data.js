import { DAY_MS } from '../constants';

export default class Data {
  static DIVISIONS_NUMBER = 100;

  constructor(events) {
    this.aggregateData(events);
  }

  /**
   * This method will aggregate all the events into divisions where each division will contain info
   * about all the events that happened during the division period and aggregated number of affected people by type.
   */
  aggregateData(events) {
    const aggregatedEvents = events
      .filter((event) => event.lat && event.lon)
      .map((event) => ({
        date: (new Date(event.from)).getTime(),
        lat: event.lat,
        lon: event.lon,
        affectedType: Number(event.affected_type?.[0]) || 0,
        affectedNumber: Number(event.affected_number?.[0]) || 0,
      }))
      .sort((a, b) => a.date - b.date);

    const firstEventDate = aggregatedEvents[0].date;
    const lastEventDate = aggregatedEvents[aggregatedEvents.length - 1].date;

    const totalDays = (lastEventDate - firstEventDate) / DAY_MS;
    const daysPerDivision = Math.ceil(totalDays / Data.DIVISIONS_NUMBER);
    const msPerDivision = daysPerDivision * DAY_MS;

    const eventsByDate = aggregatedEvents.reduce((result, event) => ({
      ...result,
      [event.date]: [
        ...result[event.date] || [],
        event,
      ],
    }), []);

    let highestAffectedNumber = 0;
    const cumulativeAffectedNumberByType = {};

    this.divisions = [];
    for (let i = 0; i < Data.DIVISIONS_NUMBER; i++) {
      const division = {
        date: firstEventDate + i * msPerDivision,
        events: [],
        affectedNumberByType: {},
        totalAffectedNumber: 0,
        relativeSize: 0,
      };

      const divisionDates = Array(daysPerDivision).fill('').map((_, j) => division.date + j * DAY_MS);
      division.events = divisionDates.reduce((a, date) => a.concat(...(eventsByDate[date] || [])), []);

      division.affectedNumberByType = division.events.reduce((a, event) => ({
        ...a,
        [event.affectedType]: (a[event.affectedType] || 0) + event.affectedNumber,
      }), {});

      Object.keys(division.affectedNumberByType).forEach((type) => {
        cumulativeAffectedNumberByType[type] = (cumulativeAffectedNumberByType[type] || 0) + division.affectedNumberByType[type];
      });

      division.cumulativeAffectedNumberByType = { ...cumulativeAffectedNumberByType };
      division.totalAffectedNumber = Object.values(division.affectedNumberByType).reduce((a, v) => a + v, 0);
      highestAffectedNumber = Math.max(division.totalAffectedNumber, highestAffectedNumber);

      this.divisions.push(division);
    }

    this.divisions = this.divisions.map((division) => ({
      ...division,
      relativeSize: division.totalAffectedNumber / highestAffectedNumber,
    }));
  }
}
