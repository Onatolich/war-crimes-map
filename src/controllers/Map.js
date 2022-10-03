import {
  GEO_EXTREMES,
  GEO_DIMENSIONS,
} from '../constants';

export default class Map {
  $root = document.getElementById('map');

  constructor(divisions) {
    this.renderPoints(divisions);
  }

  /**
   * Sets the current division index and shows/hides corresponding division.
   */
  setDivisionIndex(index) {
    this.$divisions.forEach(($division, i) => {
      $division.classList.toggle('active', index >= i)
    });
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
