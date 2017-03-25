// Package leap calculates leap years.
//
// Given a year, report if it is a leap year.
// In the Gregorian calendar, leap years occur:
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// For example:
//   1997 is not a leap year, but 1996 is.
//   1900 is not a leap year, but 2000 is.
package leap

const testVersion = 3

// IsLeapYear returns a boolean representing the leap-year-ness of any
// given integer year argument:
//
// ```
// IsLeapYear(2000)
// => true
// ```
func IsLeapYear(year int) bool {
	return ((year%4 == 0) && ((year%400 == 0) || !(year%100 == 0)))
}
