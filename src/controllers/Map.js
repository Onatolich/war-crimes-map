import {
  GEO_EXTREMES,
  GEO_DIMENSIONS,
} from '../constants';

export default class Map {
  $root = document.getElementById('map');
  currentIndex = -1;

  constructor(divisions) {
    this.renderPoints(divisions);
  }

  /**
   * Sets the current division index and shows/hides corresponding division.
   *
   * It takes all divisions between the current and the new indices and either make them visible or invisible
   * depending on the direction of change. This way we avoid unnecessary DOM manipulations as much as possible.
   */
  setDivisionIndex(index) {
    const isForward = index > this.currentIndex;
    const start = Math.min(index, this.currentIndex) + 1;
    const end = Math.max(index, this.currentIndex);

    for (let i = start; i <= end; i++) {
      const $division = this.$divisions[i];
      if (isForward) {
        $division.classList.add('active');
        continue;
      }
      $division.classList.remove('active');
    }

    this.currentIndex = index;
  }

  /**
   * Renders all divisions and points in them. Points are nested in their divisions to optimize
   * show/hide performance since it is much faster to show/hide a single division with all points inside
   * rather than show/hide each point separately.
   *
   * Point position is calculated in percentage shift relative to the map for free responsiveness.
   * To achieve this, the map is treated as a normal 2D plane and calculations are made based on its
   * corner extreme points and dimensions.
   */
  renderPoints(divisions) {
    this.$divisions = divisions.map((division) => {
      const $division = document.createElement('div');
      $division.classList.add('division');

      division.events.forEach((event) => {
        const $point = document.createElement('span')
        $point.classList.add('point');

        $point.style.left = `${(event.lon - GEO_EXTREMES.W) / GEO_DIMENSIONS.lon * 100}%`;
        $point.style.top = `${(GEO_EXTREMES.N - event.lat) / GEO_DIMENSIONS.lat * 100}%`;

        $division.appendChild($point);
      });

      this.$root.appendChild($division);
      return $division;
    });
  }
}
