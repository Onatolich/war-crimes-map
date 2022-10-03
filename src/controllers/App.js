import { getDivisionsFromEvents } from '../utils/data';
import Timeline from './Timeline';
import Map from './Map';
import Summary from './Summary';

export default class App {
  static DIVISIONS_NUMBER = 100;

  constructor(events) {
    this.divisions = getDivisionsFromEvents(events, App.DIVISIONS_NUMBER);

    this.summary = new Summary();
    this.map = new Map(this.divisions);
    this.timeline = new Timeline(this.divisions, this.handleDivisionChange.bind(this));
  }

  handleDivisionChange(index) {
    this.summary.applyStats(this.divisions[index].cumulativeAffectedNumberByType);
    this.map.setDivisionIndex(index);
  }
};
