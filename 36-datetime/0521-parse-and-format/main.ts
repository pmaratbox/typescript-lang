import { DateTime } from 'luxon';

// Parse a FIXED ISO date in UTC (never the current time), then format it
// back to an ISO calendar date (yyyy-MM-dd) computed by the library.
const parsed = DateTime.fromISO('2026-06-15', { zone: 'utc' });
console.log(parsed.toISODate());
