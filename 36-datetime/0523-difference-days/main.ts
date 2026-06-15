import { DateTime } from 'luxon';

const start = DateTime.fromISO('2026-06-15', { zone: 'utc' });
const end = DateTime.fromISO('2026-07-15', { zone: 'utc' });

const days = end.diff(start, 'days').days;

console.log(days);
