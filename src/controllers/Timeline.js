import { formatDate } from '../utils/i18n';

export default class Timeline {
  _currentDivision = 0;
  isPlaying = false;

  get currentDivision() {
    return this._currentDivision;
  }

  set currentDivision(index) {
    const normalizedIndex = Math.min(Math.max(index, 0), this.totalDivisions - 1);
    if (normalizedIndex === this._currentDivision) {
      return;
    }

    this._currentDivision = normalizedIndex;
    this.onCurrentChange(this._currentDivision);

    const $division = this.$divisions[this._currentDivision];
    const divisionBarCenterX = $division.offsetLeft + $division.clientWidth / 2;
    this.$slider.style.left = `${divisionBarCenterX}px`;

    this.$dateIndicator.innerText = formatDate($division.dataset.date);
  }

  constructor(divisions, onCurrentChange) {
    this.onCurrentChange = onCurrentChange;
    this.$root = document.getElementById('timeline');
    this.$slider = this.$root.querySelector('.slider');
    this.$dateIndicator = this.$slider.querySelector('.date');
    this.$playbackControl = this.$root.querySelector('.playbackControl');

    this.renderDivisions(divisions);
    this.totalDivisions = divisions.length;
    this.currentDivision = this.totalDivisions - 1;

    /**
     * We are binding on timeline itself instead of slider for slider events to allow the user to click not only on
     * the slider but also on timeline bars and move mouse to navigate the timeline.
     */
    this.$root.addEventListener('mousedown', this.handleMouseDown.bind(this));
    window.addEventListener('mouseup', this.handleMouseUp.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));

    /**
     * Playback control binding.
     */
    this.$playbackControl.addEventListener('mousedown', this.handlePlaybackControlMouseDown.bind(this));
    this.$playbackControl.addEventListener('click', this.handlePlaybackControlClick.bind(this));
  }

  handleMouseDown(e) {
    e.preventDefault();

    this.pause();

    const rootBbox = this.$root.getBoundingClientRect();
    this.slidingInfo = {
      rootX: rootBbox.x,
      stepSize: rootBbox.width / this.totalDivisions,
    };

    this.activateDivisionAtX(e.clientX);
  }

  handleMouseUp(e) {
    e.preventDefault();

    this.slidingInfo = undefined;
  }

  handleMouseMove(e) {
    e.preventDefault();

    this.activateDivisionAtX(e.clientX);
  }

  handlePlaybackControlClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.isPlaying) {
      this.pause();
      return;
    }
    this.play();
  }

  handlePlaybackControlMouseDown(e) {
    e.stopPropagation();
  }

  play() {
    this.isPlaying = true;
    this.$playbackControl.classList.add('isPlaying');

    // If play is hit when on the last division - start from the beginning.
    if (this.currentDivision === this.totalDivisions - 1) {
      this.currentDivision = 0;
    }
    this.scheduleNextDivisionMove();
  }

  pause() {
    this.isPlaying = false;
    this.$playbackControl.classList.remove('isPlaying');
    clearTimeout(this.playbackTimeout);
  }

  scheduleNextDivisionMove() {
    if (this.currentDivision === this.totalDivisions - 1) {
      this.pause();
    }

    this.playbackTimeout = setTimeout(() => {
      this.currentDivision += 1;
      this.scheduleNextDivisionMove();
    }, 1000);
  }

  /**
   * Makes the division closest to passed x coordinate active.
   */
  activateDivisionAtX(x) {
    if (!this.slidingInfo) {
      return;
    }

    this.currentDivision = Math.floor((x - this.slidingInfo.rootX) / this.slidingInfo.stepSize);
  }

  renderDivisions(divisions) {
    const rootHeight = this.$root.clientHeight;

    this.$divisions = divisions.map((division) => {
      const $division = document.createElement('div');
      $division.dataset.date = division.date;
      $division.classList.add('division');
      $division.style.paddingTop = `${(1 - division.relativeSize) * rootHeight}px`;
      this.$root.appendChild($division);

      return $division;
    });
  }
}
