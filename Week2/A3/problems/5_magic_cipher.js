/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/
// replace with certain letters that are given
//
// let obj = {
// }
// obj['color']
function magicCipher(sentence, cipher) {
  let newStr = '';

  for (let i = 0; i < sentence.length; i += 1) {
    let letter = sentence[i];
    if (cipher[letter] === undefined) {
      newStr += letter
    } else {
      // newStr = newStr + cipher[letter]
      newStr += cipher[letter]
    }
  }
  return newStr;
}

// let letter = 'h'
// let letter2 = 'e';
// letter + letter2
// let arr = 'hello'.split('')

// console.log(arr);
// arr[0] = 'p';
// console.log(arr);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
