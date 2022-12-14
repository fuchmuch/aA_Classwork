/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  let arr = [];

  for (let i = end - 1; i > start; i--) {
    arr.push(i);
  }
  console.log(arr)
  return arr;

}

console.log(reverseRange(2, 7));
console.log(reverseRange(4, 2));


function reverseRange(start, end) {
  let arr = [];
  for (let i = start + 1; i < end; i++) {
    arr.unshift(i) //unshift reverse (push to front)
  }
  return arr
}
console.log(reverseRange(2, 7));
console.log(reverseRange(4, 2));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
