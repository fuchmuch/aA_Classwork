// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array) {
    for (i = 0; i < array.length; i += 1) {
        console.log(i + ": " + array[i])
    }
}

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end) {
    let array = []

    for (i = start; i <= end; i++) {
        array.push(i);

    }
    return array
}





console.log(range(1, 4));
console.log(range(4, 2));

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        let num = array[i];
        sum += num
    }
    return sum;
}

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words) {
    let neWord = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let cappedWords = words.toUpperCase()
        neWord.push(cappedWords)
    }
    return newWord;
}

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'


function wordPeriods(sentence) {

}