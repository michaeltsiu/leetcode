// https://leetcode.com/problems/island-perimeter/

// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



// Example:

// Input:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Output: 16

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
var islandPerimeter = function(grid) {
  // create a variable to keep track of the perimeter
  var edges = 0;
  // iterate through the grid rows, letting r be the current index
  grid.forEach((row, r) => {
    // iterate through the grid columns, letting c be the current index
    row.forEach((col, c) => {
      // create variable for the left side to equal either 1 if present or 0
      var left = grid[r][c-1] || 0;
      // create variable for the right side to equal either 1 if present or 0
      var right = grid[r][c+1] || 0;
      // create variable for the top side to equal either 1 if present or 0
      var top = (grid[r-1] || [])[c] || 0;
      // create variable for the bottom side to equal either 1 if present or 0
      var bottom = (grid[r-1] || [])[c] || 0;
      // if the column exists
      if (col === 1) {
        // add to the perimeter all 4 sides if any
        edges += (4 - top - bottom - left - right)
      }
    })
  });
  // return the perimeter
  return edges;
};