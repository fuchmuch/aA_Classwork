/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/


//caesarCipher
//indexOf, store in idx variable
//using module 

function shiftChars(word, num) {
  let alphbet = 'abcdefghijklmnopqrstuvwxyz'
  let newWord = ''

  for (i = 0; i < word.length; i++) {
    let char = word[i];
    let idx = alphbet.indexOf(char);
    let newIdx = (idx + num) % 26;
    let newChar = alphbet[newIdx];
    newWord += newChar;
  }
  return newWord
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shiftChars;
