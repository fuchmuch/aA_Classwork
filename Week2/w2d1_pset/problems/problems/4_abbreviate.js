/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
//initialize a new array;
//create a words array that is equal to the sentence.split('')
// loop through the words array
//check the legnth of each word
// if less than or equal to four then do nothing
//else remove all vowels
// create a new function that removes all the vowels for us

// pass the word to the new function
//init a vowels array
//initialize a newStr variable
//loop through the word
//if its a consenant concat to the newWord
//else do nothing
//return the newWord

function abbreviate(sentence) {
    let newArray = [];
    let words = sentence.split('');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length <= 4) {
            newArray.push(word);
        } else {
            newArray.push(removeVowels(word))
        }
    }
    return newArray.join('')
}

function removeVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char)) {
            newWord += char;
        }
    }
    return newWord
}











function removeVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    for (let i = 0; i < word.length; i += 1) {
        let char = word[i];

        if (vowels.indexOf(char) === -1) {
            //if this condition is true, if the character is a vowel then remove it from the string
            //if the char is not a vowel
            newStr += char;
        }
    }
    return newStr;
}







function abbreviate(sentence) {
    let words = sentence.split('');
    let newWords = [];

    for (let i = 0; i < words.length; i += 1) {
        let word = words[i];
        if (word.length > 4) {
            let newWord = removeVowels(word);
            newWords.push(newWord);
        } else {
            newWords.push(word);

        }
    }
    return newWords.join('');

}

console.log(abbreviate('bootcamp prep is fun'));
console.log(abbreviate('programming is fantastic'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
