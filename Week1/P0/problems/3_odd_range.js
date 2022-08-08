/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
**
** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
** oddRange(6); // => [ 1, 3, 5 ]
*/

// use naming convention suggesting something (indexing into string or array)
function oddRange(end) {
  let odds = [];

  for (let i = 1; i <= end; i += 1) {
    if (i % 2 === 1) {
      odds.push(i);
    }
  }
  return odds;
}

function oddRange(end) {
  let arr = [];

  for (let i = 1; i <= end; i += 1) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return arr;
}

function oddRange(end) {
  let arr = [];

  for (let i = 1; i <= end; i += 2) {
    odds.push(i);
  }
  return arr;
}

function oddRange(end) {
  let arr = [];

  for (let n = 1; n <= end; n += 2) {
    odds.push(n);
  }
  return arr;
}
//command+d = ex) change i  to  n at the same time in the loop





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = oddRange;
