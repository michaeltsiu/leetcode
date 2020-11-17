// https://leetcode.com/problems/day-of-the-week/

// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.



// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:

// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:

// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"


// Constraints:

// The given dates are valid dates between the years 1971 and 2100.

// /**
//  * @param {number} day
//  * @param {number} month
//  * @param {number} year
//  * @return {string}
//  */
var dayOfTheWeek = function(day, month, year) {
  // create a variable for the days of the week that will eventually be the answer
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // return the options of days
    // the date you are looking at, .getDay returns the numbers 0-6
    // going through the days array, the .getDay returns the index of the day
  return days[new Date(`${month}/${day}/${year}`).getDay()];
};
