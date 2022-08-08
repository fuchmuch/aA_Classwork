/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/
// certain pattern to follow 
// initialize an arr
// loop through the input array
//if !arr.includes(element) returns boolean and check to see if not included array
//then we push into the new arr
//return the arr

function unique(array) {
  let arr = [];

  for (i = 0; i < array.length; i++) {
    console.log(`element = ${array[i]} at index = ${i}`)
    if (!arr.includes(array[i])) {
      arr.push(array[i])
    }
  }


  return arr;
}

function unique(array) {
  let arr = [];

  for (i = 0; i < array.length; i++) {
    let ele = array[i]
    if (!arr.includes(ele)) {
      arr.push(ele)
    }
  }


  return arr;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
