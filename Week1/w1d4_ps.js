// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array) {
    for (i = 0; i < array.length; i += 1) {
        console.log(i + ":" + array[i])
    }
}

