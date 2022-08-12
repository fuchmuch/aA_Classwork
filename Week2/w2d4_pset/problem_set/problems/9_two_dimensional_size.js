/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/
//using nested for loops
//2d array : usually do nested loop
//capture the length (distinct length )

function twoDimensionalSize(array) {
  let size = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      size += 1 //size++ //asking fot total #
    }
  }
  return size;
}




function twoDimensionalSize(array) {

  let size = 0;
  for (let i = 0; i < array.length; i++) {
    let subArray = array[i];
    size += subArray.length;

  }
  return size;
}

let arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(twoDimensionalSize(arr1)); // => 9

let arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

console.log(twoDimensionalSize(arr2)); // => 5

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalSize;
