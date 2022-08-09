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
