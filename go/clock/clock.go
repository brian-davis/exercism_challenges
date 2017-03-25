// Package clock models a 24 hour clock.
//
// Clocks have hour and minute values represented in hh:mm format,
// with minimum value being 00:00 and maximum value being 23:59
package clock

import "fmt"

const testVersion = 4

// Clock object has attributes:
//   hour
//   minute
// and methods:
//   String
//   Add
//   normalize
type Clock struct {
	hour   int
	minute int
}

// New initializes a Clock object
func New(hour, minute int) Clock {
	var c = Clock{hour: hour, minute: minute}
	c.normalize()
	return c
}

// String method on Clock returns a formatted string representing hours and minutes
// ```
// c.String()
// => "23:59"
// ```
func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hour, c.minute)
}

// Add method on Clock takes a minutes arguments and adjusts the hour and minute attributes
// on the Clock accordingly.
// ```
// c.String()
// => "00:00"
// c.Add(1)
// => <Clock>
// c.String()
// => "00:01"
// ```
func (c Clock) Add(minutes int) Clock {
	c.minute = c.minute + minutes
	c.normalize()
	return c
}

// Normalize private method on Clock handles winding the clock hour and minute values past
// 00:00 or 23:59, mutating the Clock object.
// Called by Add() and New()
// ```
// c.String()
// => "23:59"
// c.Add(1)
// => <Clock>
// c.String()
// => "00:00"
// ```
func (c *Clock) normalize() {
	for {
		if c.minute < 60 {
			if c.minute < 0 {
				c.hour = c.hour - 1
				c.minute = c.minute + 60
			} else {
				break
			}
		} else {
			c.hour = c.hour + 1
			c.minute = c.minute - 60
		}
	}

	for {
		if c.hour < 24 {
			if c.hour < 0 {
				c.hour = c.hour + 24
			} else {
				break
			}
		} else {
			c.hour = c.hour - 24
		}
	}
}
