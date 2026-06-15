import { DateTime } from 'luxon';

// Parse a FIXED UTC instant (never the current time), then ask Luxon for its
// Unix timestamp in SECONDS via `.toSeconds()`. The value is computed by the
// library, not hardcoded.
const instant = DateTime.fromISO('2026-06-15T00:00:00Z', { zone: 'utc' });
console.log(instant.toSeconds());
