
//W1D4 - Array


// high level languages: javascript , ruby, python:usually written in low level languages like c#, java, c++
//low level languages: many companies using it and more efficiently 



//Objectives
//What are arrays
//How to store data to an array
//Common array methods (mutating vs. non-mutating)
//How to loop through an array (forward and reverse order)


//What is an array?
//Array is a built in data structure
//Items stored inside arrays are called elements and are seperated by commas
//Arrays are mutable, unlike strings which are immutable (unchangable)

// Ex:

// let str1 = 'hello';
// str1[0] = 'x';
// console.log(str1);

// let arr1 = ['h', 'e', 'l', 'l', 'o'];
// arr1[0] = 'x';
// console.log(arr1);

//Elements can be any data types

// let array = ['hi', 10, 9, true, undefined, null, [1, 2]];
// index       0    1  2    3       4        5      6
// length      1    2  3    4       5        6      7
// console.log(array)

// console.log(array[6][0])
//Indexing
//Similarly to strings, when indexing into arrays it starts at the 0th index not 1.


//Array methods

// let fruits = ["apple", "orange", "pear"];

//<array>.length - Returns the length of the array
// console.log(fruits.length);

//<array>.indexOf(element) - Returns the first index at which the given element is found, otherwise returns -1
// console.log(fruits.indexOf('watermelon'));

//<array>.includes(element) - Returns true/false depending on whether the element is found in the array
// console.log(fruits.includes('orange'));

//Mutating methods

//<array>.push(element) - Adds element to the end of the array
// console.log(fruits)
// fruits.push('watermelon');
// console.log(fruits);

//<array>.pop() - Removes and return the last element in the array
// let foo = fruits.pop()
// console.log(fruits.pop());
// console.log(foo)
// console.log(fruits);

//<array>.unshift(element) - Adds element to the front of the array
// fruits.unshift('grape');
// console.log(fruits);

//<array.shift() - Removes and returns the first element in the array
// console.log(fruits.shift());
// console.log(fruits);

//Non-mutating methods

// let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//<array>.concat(array2) - Returns a new array where array is joined with array2
// console.log(fruits.concat(array1));
// console.log(fruits);

//<array>.slice(startIdx) - Returns a new array that contains elements from startIdx till the end
//<array>.slice(startIdx, endIdx) - Returns a new array that contains elements from startIdx to 
// endIdx(endIdx not included)
// console.log(array1.slice(2, 6));
// console.log(array1.slice(3));
// console.log(array1);

let sentence = 'Hi my name is Jesse';

//<string>.split(<string>) - Returns an array where the string is split on the given input
// let sentenceArray = sentence.split(' ');
// console.log(sentenceArray);


//<array>.join(<string) - Returns a string where array is joined by given input
// let newSentence = sentenceArray.join('');
// let newSentence2 = sentenceArray.join('--');
// console.log(newSentence);
// console.log(newSentence2);

//Looping through the array

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//FOR LOOP
// for(let i = 0; i < alphabet.length; i++) { //similar to iterating through a string
//     let currentElement = alphabet[i]; //gets the i-th index of the array

//     console.log(currentElement + ' is the element at index ' + i);
// }

// for (let i = 0; i < alphabet.length; i++) {
//     let element = alphabet[i];

//     console.log(element);
// }

//WHILE LOOP
// let i = 0;
// while (i < alphabet.length) {
//     let element = alphabet[i];

//     console.log(element);
//     i++;
// }



// Write a function capitalize that takes in an array of words and returns a new
// array where every word has its first letter capitalized and the rest lowercased

function capitalize(wordsArr) {
    let arr = [];

    console.log(wordsArr)

    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        // console.log(`word = ${word}`)
        let firstChar = word[0].toUpperCase();
        // console.log(`word = ${firstChar}`)
        let wordFrag = word.slice(1).toLowerCase()
        // console.log(`word = ${wordFrag}`)
        let newWord = firstChar + wordFrag
        // console.log(newWord)
        arr.push(newWord)

    }
    return arr;
} console.log(capitalize(['thIs', 'iS', 'fuN']))
console.log(capitalize(['this', 'is', 'fun']))


// function capitalizeSingleWord(word) { // 'this' => 'This'
//     var capWord = word.toUpperCase();
//     var newWord = capWord[0];

//     for (let i = 1; i < word.length; i++) {
//         var letter = word[i];

//         newWord += letter.toLowerCase();
//     }

//     return newWord;
// }

// function capitalizeSentence(words) {
//     var newArray = [];

//     for (let i = 0; i < words.length; i++) {
//         var word = words[i];
//         var newWord = capitalizeSingleWord(word);

//         newArray.push(newWord);
//     }

//     return newArray;
// }



// ['this', 'is', 'fun'] => ["This", "Is", "Fun"]

// create an empty array

// loop through the original array
// create variable currentWord = words[i]
// create variaable firstLetter = currentWord[0].toUpperCase()
// create variable otherChars = currentWord.slice(1).toLowercase()
// push into our newArray firstLetter + otherChars
// return newArray

// function capitalize(words) {
//     let capitalizedWords = [];

//     for (let i = 0; i < words.length; i++) {
//         let currentWord = words[i];
//         let firstChar = currentWord[0].toUpperCase();
//         let otherChars = currentWord.slice(1).toLowerCase;
//         let newWord = firstChar + otherChars;

//         capitalizedWords.push(newWord);
//     }

//     return capitalizedWords;
// }

// console.log(capitalize(['this', 'is', 'fun'])); // ["This", "Is", "Fun"]
// console.log(capitalize(['heLlO', 'wORLD'])); // ["Hello", "World"]


// Write a function `reverseWords(arr)` that receives an array of words and returns a new
// array where the words are reversed in order

// console.log(reverseWords(['hello', 'world'])); // => ["world", "hello"]
// console.log(reverseWords(['moon', 'goodbye'])); // => ["goodbye", "moon"]


// function reverseWords(array) { // ['hello', 'world']
//     let reversedArray = []; // reversedArray = ['world', 'hello']

//     for (let i = array.length - 1; i >= 0; i--) { // i = -1
//         let ele = array[0]; // ele = array[1] = 'hello'

//         reversedArray.push(ele); // 
//     }

//     return reversedArray;
// }

// console.log(reverseWords(['hello', 'world'])); // => ["world", "hello"]
// console.log(reverseWords(['moon', 'goodbye'])); // => ["goodbye", "moon"]



// 1. How do we iterate through elements of an array?
//      (a) using a loop**
//      (b) using a conditional
//      (c) using modulo

// 2. What type of data can an array store?
//      (a) Numbers
//      (b) Strings
//      (c) Booleans
//      (d) Any data type**

// 3. What value do we get back if we try to index an array using an invalid
//    number index?
//      (a) error
//      (b) -1**
//      (c) undefined

// 4. What method can we use to check if an element is inside an array?
//      (a) slice
//      (b) indexOf **
//      (c) push















