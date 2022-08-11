/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]
twoDimensionalTotal(arr2); // => 15
***********************************************************************/
// [1,2,3,4]
function twoDimensionalTotal(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    // array[0] = [5,2,5,4]
    //  sum array[0]
    // add that sum to your current total
    let innerArr = array[i]
    for (let j = 0; j < innerArr.length; j++)
      sum += array[i][j]; // sum = sum + variable == same as +=
  }
  return sum;

}

let arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // => 40

let arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]
console.log(twoDimensionalTotal(arr2)); // => 15




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalTotal;
