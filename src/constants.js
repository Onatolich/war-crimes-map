export const DAY_MS = 24 * 60 * 60 * 1000;

// Ukraine's geographic plane extremes
export const GEO_EXTREMES = {
  N: 52.3794,
  S: 44.3864,
  E: 40.2278,
  W: 22.1369,
};

// Ukraine's geographic plane dimensions
export const GEO_DIMENSIONS = {
  lat: GEO_EXTREMES.N - GEO_EXTREMES.S,
  lon: GEO_EXTREMES.E - GEO_EXTREMES.W,
};
