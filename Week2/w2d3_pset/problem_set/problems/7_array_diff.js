/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
function should return a new array, containing the elements of arr1 that
are not also in arr2.

Note: Assume both arrays have unique elements.
//Example:
// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// arrayDiff(array1, array2) // => [1, 2, 43 ,4]

// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// arrayDiff(array3, array4) // => ['a', 'ab', 'c', 'c']
***********************************************************************/
//init a new array
//loop through arr1
//look at each element and say !arr2.includes(ele)
//return array

function arrayDiff(arr1, arr2) {
    let unique = [];

    for (let i = 0; i < arr1.length; i++) {
        let ele = arr1[i];
        if (!arr2.includes(ele)) {
            unique.push(ele)
        }
    }
    return unique;
}



array1 = [1, 23, 2, 43, 3, 4]
array2 = [3, 23]
console.log(arrayDiff(array1, array2)); // => [1, 2, 43 ,4]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayDiff;