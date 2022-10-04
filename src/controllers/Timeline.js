import { formatDate } from '../utils/i18n';

export default class Timeline {
  static PLAYBACK_SPEED = 1000;

  $root = document.getElementById('timeline');
  $playbackControl = this.$root.querySelector('.playbackControl');
  $slider = this.$root.querySelector('.slider');
  $dateIndicator = this.$slider.querySelector('.date');

  _currentDivisionIndex = 0;
  isPlaying = false;

  get isSliding() {
    return !!this.slidingInfo;
  }

  get currentDivisionIndex() {
    return this._currentDivisionIndex;
  }

  set currentDivisionIndex(index) {
    const normalizedIndex = Math.min(Math.max(index, 0), this.totalDivisions - 1);
    if (normalizedIndex === this._currentDivisionIndex) {
      return;
    }

    this._currentDivisionIndex = normalizedIndex;
    this.onCurrentChange(this._currentDivisionIndex);

    const $division = this.$divisions[this._currentDivisionIndex];
    this.$slider.style.left = `${this._currentDivisionIndex}%`;

    this.$dateIndicator.innerText = formatDate($division.dataset.date);
    this.updateDivisionHighlight();
  }

  constructor(divisions, onCurrentChange) {
    this.onCurrentChange = onCurrentChange;

    this.renderDivisions(divisions);
    this.totalDivisions = divisions.length;
    this.currentDivisionIndex = this.totalDivisions - 1;

    // We are binding on timeline itself instead of slider for slider events to allow the user to click not only on
    // the slider but also on timeline bars and move mouse to navigate the timeline.
    this.$root.addEventListener('mousedown', this.handleMouseDown.bind(this));
    window.addEventListener('mouseup', this.handleMouseUp.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));

    // Playback control binding.
    this.$playbackControl.addEventListener('mousedown', this.handlePlaybackControlMouseDown.bind(this));
    this.$playbackControl.addEventListener('click', this.handlePlaybackControlClick.bind(this));

    // Keyboard controls binding.
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleMouseDown(e) {
    if (e.button !== 0) {
      return;
    }

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
    this.updateDivisionHighlight();
  }

  handleMouseMove(e) {
    e.preventDefault();

    this.activateDivisionAtX(e.clientX);
  }

  handlePlaybackControlClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.togglePlayback();
  }

  handlePlaybackControlMouseDown(e) {
    e.stopPropagation();
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowLeft':
        this.pause();
        this.currentDivisionIndex -= 1;
        break;

      case 'ArrowRight':
        this.pause();
        this.currentDivisionIndex += 1;
        break;

      case ' ':
        this.togglePlayback();
        break;

      case 'Home':
        this.pause();
        this.currentDivisionIndex = 0;
        break;

      case 'End':
        this.pause();
        this.currentDivisionIndex = this.totalDivisions - 1;
        break;

      default:
        return;
    }

    e.preventDefault();
  }

  play() {
    this.isPlaying = true;
    this.$playbackControl.classList.add('isPlaying');

    // If play is hit when on the last division - start from the beginning.
    if (this.currentDivisionIndex === this.totalDivisions - 1) {
      this.currentDivisionIndex = 0;
    }
    this.scheduleNextDivisionMove();
    this.updateDivisionHighlight();
  }

  pause() {
    this.isPlaying = false;
    this.$playbackControl.classList.remove('isPlaying');
    clearTimeout(this.playbackTimeout);
    this.updateDivisionHighlight();
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.pause();
      return;
    }
    this.play();
  }

  /**
   * Schedules and performs playback move to the next division.
   */
  scheduleNextDivisionMove() {
    if (this.currentDivisionIndex === this.totalDivisions - 1) {
      this.pause();
      return;
    }

    this.playbackTimeout = setTimeout(() => {
      this.currentDivisionIndex += 1;
      this.scheduleNextDivisionMove();
    }, Timeline.PLAYBACK_SPEED);
  }

  /**
   * Makes the division closest to passed x coordinate (relative to window) active.
   */
  activateDivisionAtX(x) {
    if (!this.isSliding) {
      return;
    }

    this.currentDivisionIndex = Math.floor((x - this.slidingInfo.rootX) / this.slidingInfo.stepSize);
  }

  /**
   * Highlights the current division on slider dragging or playing for better visuals.
   */
  updateDivisionHighlight() {
    const isHighlightEnabled = this.isSliding || this.isPlaying;

    this.$divisions.forEach(($division, i) => {
      const isCurrent = i === this.currentDivisionIndex;
      $division.classList.toggle('isHighlighted', isHighlightEnabled && isCurrent);
    });
  }

  /**
   * Renders division bars on the timeline plane.
   *
   * Instead of setting height for a bar it is setting its top padding which is pushing the nested ::after element.
   * This allows to have a bigger interactive area without a need to render an actual DOM element for bar visuals.
   */
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
