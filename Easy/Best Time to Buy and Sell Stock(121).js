// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
var maxProfit = function(prices) {
  // Create variables to keep track of the profit, what day it currently is and the next day
  let profit = 0, currentDay = 0, nextDay = 1
  // while the current day isn't greater than the number of prices
  while (currentDay <= prices.length) {
    // iterate over the prices
    for (let i = nextDay; i < prices.length; i++) {
      // if the prices for the current day is less than the prices at the current index
      if (prices[currentDay] < prices[i]) {
        // if the profit is less than the prices at the current index - prices of the current day
        if (profit < (prices[i] - prices[currentDay])) {
          // set the profit to be equal to the prices of the current index - prices of the current day
          profit = prices[i] - prices[currentDay]
        }
      }
    }
    // increment next day
    nextDay++;
    // increment current day
    currentDay++;
  }
  // return profit
  return profit;
};