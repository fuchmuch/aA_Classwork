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
    let words = sentence.split('')

    for (i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word + "."
    }
    let newSent = words.join('')
    return newSent
}
console.log(wordPeriods('hello world'))

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array) {
    let max = null; //only a person sets (no value)

    for (let i = 0; i < array.length; i += 1) {// i= i+1 = i++
        let num = array[i];
        if (num > max || max === null) {
            max = num;
        }
    }
    return max;
}

console.log(maxValue([12, 6, 43, 2]));


// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1



function myIndexOf(array, target) {

    for (var i = 0; i < array.length; i++) {
        var num = array[i];

        if (num === target) {
            return i;
        }
    }

    return -1;
}
