import {
  getAffectedTypeLabel,
  getAllAffectedTypes,
  formatNumber,
} from '../utils/i18n';

export default class Summary {
  $root = document.getElementById('summary');

  constructor() {
    this.renderStatBlocks();
  }

  /**
   * Applies passed stats info to respective stat blocks.
   */
  applyStats(stats = {}) {
    this.$statBlocks.forEach(($block) => {
      const type = $block.dataset.type;
      $block.querySelector('.value').innerText = formatNumber(stats[type] || 0);
    });
  }

  /**
   * Renders stat blocks for all possible affected types.
   */
  renderStatBlocks() {
    this.$statBlocks = getAllAffectedTypes().map((type) => {
      const $block = document.createElement('div');
      $block.classList.add('stat');
      $block.innerHTML = `
        <span class="value">0</span>
        <span class="label">${getAffectedTypeLabel(type)}</span>
      `;

      $block.dataset.type = type;
      this.$root.appendChild($block);
      return $block;
    });
  }
}
