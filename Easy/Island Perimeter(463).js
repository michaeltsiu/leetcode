// https://leetcode.com/problems/island-perimeter/

// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
var islandPerimeter = function(grid) {
  var edges = 0;
  grid.forEach((row, r) => {
      row.forEach((col, c) => {
          var left = grid[r][c-1] || 0;
          var right = grid[r][c+1] || 0;
          var top = (grid[r-1] || [])[c] || 0;
          var bottom = (grid[r-1] || [])[c] || 0;
          if (col === 1) {
              edges += (4 - top - bottom - left - right)
          }
      })
  });
  return edges;
};