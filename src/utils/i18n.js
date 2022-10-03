import labelsByLang from '../data/names.json';

const locale = navigator.language || 'en-US';

// Labels translation will depend on user's language with fallback to English if there is no support for it.
const [langCode] = locale.split('-');
const labels = labelsByLang[langCode] || labelsByLang['en'];

// Number and date formatting will depend solely on user's geo locale irrespective to an actual language picked above.
export const formatDate = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format;
export const formatNumber = new Intl.NumberFormat(locale).format;

export function getAffectedTypeLabel(type) {
  return labels.affected_type[type] || '';
}

export function getAllAffectedTypes() {
  return Object.keys(labels.affected_type);
}
