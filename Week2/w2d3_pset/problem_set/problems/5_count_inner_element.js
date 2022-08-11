/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

// Examples:
// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]

// countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}
***********************************************************************/
// I notice that the inner arrays are the different lengths
//Init an object to be returned 
//I know that I need to use the same counting pattern 

function countInnerElement(arr) {
    let obj = {}; //need to populate the key of element and create key value pair

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let innerArr = arr[i];

        for (let j = 0; j < arr.length; j++) {
            console.log(innerArr[j])
            let ele = innerArr[j];
            if (obj[ele] === undefined) {
                obj[ele] = 1 //single = is an assignment
            } else { //tells key does exist
                obj[ele] += 1 //count up, start to incrementing
            }

        }
        console.log(obj)
        return obj
    }
}


var arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
]
console.log(countInnerElement(arr1)); // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

var arr2 = [
    ['a', 'b', 'c', 'd'],
    ['a', 'b'],
    ['a', 'c', 'd', 'a']
]

console.log(countInnerElement(arr2)); // => {a: 4, b: 2, c: 2, d: 2}





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countInnerElement;
