// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


// Constraints:

// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
var maxProfit = function(prices) {
  // Create a variable to keep track of profit, the current day and the next day
  let profit = 0, currentDay = 0, nextDay = 1;
  // While the current day is less than the number of stocks
  while (currentDay < prices.length) {
    // iterate over the prices
    for (let i = currentDay; i < prices.length; i++) {
      // if the prices of the current day is less than the prices of the next
      if (prices[nextDay] > prices[currentDay]) {
        // add the prices of the next day - the price of the current index
        profit += (prices[nextDay] - prices[i])
        // break out of the if statement
        break;
      }
    }
    // increment the current day
    currentDay++
    // increment the next day
    nextDay++
  }
  // return the profit
  return profit
};