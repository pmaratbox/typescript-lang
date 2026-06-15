import { DateTime } from 'luxon';

// Parse a FIXED UTC instant (never the current time), then convert it to a
// FIXED +05:00 offset zone (not a named tz / OS tzdata). Luxon computes the
// local hour in that offset for us.
const utc = DateTime.fromISO('2026-06-15T12:00:00Z', { zone: 'utc' });
const local = utc.setZone('UTC+5');
console.log(local.hour);
