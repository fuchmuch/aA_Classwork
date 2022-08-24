/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
//loop throught word's array
//

function lastVowels(word) {
    let vowels = 'aeiou'

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]

        if (vowels.includes(char)) {
            return i
        }
    }
}

function removeVowels(word) {
    let vowels = 'aeiou'
    let newWord = '';
    let lastVowel = lastVowels(word)

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (!vowels.includes(char) || i === lastVowel) {
            newWord += char;
        }
    }
    return newWord;
}



function reverseHipsterfy(sentence) {
    let sen = sentence.split(' ')
    let arr = [];

    for (let i = 0; i < sen.length; i++) {
        let word = sen[i]
        arr.push(removeVowels(word))
    }

    return arr.join(' ')

}


//////////////another way to write


function reverseHipsterfy(sentence) {
    let words = sentence.split(' ')
    let newSentence = [];
    console.log(words)

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = handleWord(word);
        newSentence.push(newWord);
    }

    return newSentence.join(' ')
}

function handleWord(word) {
    let vowels = 'aeiou';
    let seenVowel = true;
    let newWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (!vowels.includes(char) || (vowels.includes(char) && seenVowel)) {
            newWord = char + newWord;
        }

        if (vowels.includes(char)) {
            seenVowel = false;
        }
    }

    return newWord;
}













/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
