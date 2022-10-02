import {
  GEO_EXTREMES,
  GEO_LENGTH,
} from '../constants';

export default class Map {
  currentIndex = -1;

  constructor(divisions) {
    this.$root = document.getElementById('map');
    this.renderPoints(divisions);
  }

  /**
   * Takes all points between the current and the new division and either make them visible or invisible
   * depending on direction of change. This way we avoid unnecessary DOM manipulations as much as possible.
   */
  setDivisionIndex(index) {
    const isForward = index > this.currentIndex;
    const start = Math.min(index, this.currentIndex) + 1;
    const end = Math.max(index, this.currentIndex);

    const $affectedPoints = [];
    for (let i = start; i <= end; i++) {
      $affectedPoints.push(...this.$pointsPerDivision[i]);
    }

    $affectedPoints.forEach(($point) => {
      if (isForward) {
        $point.classList.add('active');
        return;
      }
      $point.classList.remove('active');
    });

    this.currentIndex = index;
  }

  renderPoints(divisions) {
    this.$pointsPerDivision = divisions.map((division) => (
      division.events.map((event) => {
        const $point = document.createElement('span');
        $point.classList.add('point');
        $point.style.left = `${(event.lon - GEO_EXTREMES.W) / GEO_LENGTH.lon * 100}%`;
        $point.style.top = `${(GEO_EXTREMES.N - event.lat) / GEO_LENGTH.lat * 100}%`;

        $point.setAttribute('data-c', `${event.lat},${event.lon}`);
        $point.setAttribute('data-c', `${event.lat},${event.lon}`);

        this.$root.appendChild($point);
        return $point;
      })
    ));
  }
}
