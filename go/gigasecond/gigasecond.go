// Package gigasecond calculates a time one billion seconds if the future
// from any given time.
package gigasecond

import (
	"time"
)

const testVersion = 4

// AddGigasecond takes a time.Time and returns a time.Time one billion
// seconds in the future from it.
func AddGigasecond(t time.Time) time.Time {
	seconds := t.Unix()
	futureSeconds := seconds + 1000000000
	futureTime := time.Unix(future_seconds, 0)
	return futureTime
}
