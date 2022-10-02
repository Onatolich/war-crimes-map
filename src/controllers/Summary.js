import {
  getAffectedTypeLabel,
  getAllAffectedTypes,
  formatNumber,
} from '../utils/i18n';

export default class Summary {
  constructor() {
    this.$root = document.getElementById('summary');
    this.renderTypeBlocks();
  }

  applyDivision(division) {
    this.$statBlocks.forEach(($block) => {
      const type = $block.dataset.type;
      const value = formatNumber(division.cumulativeAffectedNumberByType[type] || 0);
      $block.querySelector('.value').innerText = value;
    });
  }

  renderTypeBlocks() {
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
