/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

/*
GAME PLAN
create a results array
make a recursive function to help fill in the variables into the results array
call upon the results array
return the results array

Input: number
Output: Array of strings
Constraints: what time complexity
Edge Case: if the parameter is a less than 1 or anything other than a number
*/

function rockPaperScissors(num) {
  let results = [];
  let recursive = (str) => {
    if (str.length === num) {
      results.push(str);
      return;
    }
    ['R', 'P', 'S'].forEach((round) => {
      recursive(str + round);
    })
  }
  recursive('');
  return results;
}

console.log(rockPaperScissors(4));

