package gigasecond
import("time")

const testVersion = 4

func AddGigasecond(t time.Time) time.Time {
  seconds := t.Unix()
  future_seconds := seconds + 1000000000
  future_time := time.Unix(future_seconds, 0)
  return future_time
}
