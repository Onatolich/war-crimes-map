import Timeline from './Timeline';
import Map from './Map';
import Data from './Data';
import Summary from './Summary';

export default class App {
  constructor(events) {
    this.data = new Data(events);
    this.summary = new Summary();
    this.map = new Map(this.data.divisions);
    this.timeline = new Timeline(this.data.divisions, this.handleDivisionChange.bind(this));
  }

  handleDivisionChange(index) {
    this.summary.applyDivision(this.data.divisions[index]);
    this.map.setDivisionIndex(index);
  }
};
