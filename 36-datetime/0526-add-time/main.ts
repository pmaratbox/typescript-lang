import { DateTime } from 'luxon';

const start = DateTime.fromISO('2026-06-15T10:00', { zone: 'utc' });
const result = start.plus({ minutes: 90 });
console.log(result.toFormat('HH:mm'));
