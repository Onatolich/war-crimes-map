export const DAY_MS = 24 * 60 * 60 * 1000;

// Ukraine's geographic extremes
export const GEO_EXTREMES = {
  N: 52.3794,
  S: 44.3864,
  E: 40.2278,
  W: 22.1369,
};

export const GEO_LENGTH = {
  lat: GEO_EXTREMES.N - GEO_EXTREMES.S,
  lon: GEO_EXTREMES.E - GEO_EXTREMES.W,
};

// lon: 37.0637
// lat: 49.3992

// x: (lon - GEO_EXTREMES.W) / GEO_LENGTH.lon * 100
// y: (lat - GEO_EXTREMES.N) / GEO_LENGTH.lat * 100

// x = ((37.0637 - 22.1369) / 18.0909) * 100 = 82.5%
// y = ((49.3992 - 52.3794) / 7.9929) * 100
