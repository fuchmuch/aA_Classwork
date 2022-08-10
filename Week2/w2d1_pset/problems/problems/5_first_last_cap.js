/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let words = sentence.split('');
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = word.toLowerCase();
        let firstChar = newWord[0].toUpperCase();
        let lastChar = newWord[newWord.length - 1].toUpperCase();
        newWord = firstChar + newWord.slice(1, -1) + lastChar; //(1, -1) why i put -1?
        newWords.push(newWord);
        console.log(newWord);
    }
    let newSen = newWords.join('');
    return newSen;

}

function firstLastCap(sentence) {
    let words = sentence.split('');
    let newArray = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newArray.push(capLowerCaseWord(word))
    }
    return newArray.join('');
}

function capLowerCaseWord(word) {
    let firstChar = word[0].toUpperCase();
    let lastChar = word[word.length - 1].toUpperCase()
    let middleChars = word.slice(1, word.length - 1) //index 1(inclusive), exclusive of last index
    return firstChar + middleChars + lastChar;
}






console.log(firstLastCap('hello BOOTCAMP PrEp'));
console.log(firstLastCap('what is on the radio'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
