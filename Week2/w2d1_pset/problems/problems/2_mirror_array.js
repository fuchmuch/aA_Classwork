/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
//declare the new array
//two for loops
//one will loop through the input array forward and push into a new array
// the second will loop through the array backward and push into the new array 
//return the array

function mirrorArray(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i += 1) {
        let ele = array[i];
        newArr.push(ele);
    }
    for (let i = array.length - 1; i >= 0; i -= 1) {
        let ele = array[i]
        newArr.push(ele);
    }
    //array.length -1 is backward (grabbing last index of array)
    return newArr;
}

console.log(mirrorArray([1, 2, 3]));
console.log(mirrorArray(['a', 'b', 'c', 'd']));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
