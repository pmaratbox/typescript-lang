import { DateTime } from 'luxon';

const start = DateTime.fromISO('2026-06-15', { zone: 'utc' });
const result = start.plus({ days: 10 });
console.log(result.toISODate());
