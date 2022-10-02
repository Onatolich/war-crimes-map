import labelsByLang from '../data/names.json';

/**
 * Number and date formatting will happen according to the user's locale while labels translation will be either
 * by user's language or, if not present, will default to English.
 */
const locale = navigator.language || 'en-US';
const labels = labelsByLang[locale.split('-').unshift()] || labelsByLang['en'];

export const formatDate = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format;
export const formatNumber = new Intl.NumberFormat(locale).format;

export function getAffectedTypeLabel(type) {
  return labels.affected_type[type] || '';
}

export function getAllAffectedTypes() {
  return Object.keys(labels.affected_type);
}
