/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/
//loop through the sentence

function sillyCipher(sentence, cipher) {
  let newWord = '';
  let dot = '.'

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (cipher[letter] === undefined) {
      newWord += dot
    } else {
      newWord += cipher[letter]

    }
  }
  return newWord;
}



//or
function sillyCipher(sentence, cipher) {
  let newWord = '';

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (cipher[letter] === undefined) {
      newWord += '.';
    } else {
      newWord += cipher[letter]

    }
  }
  return newWord;
}


function sillyCipher(sentence, cipher) {
  let char = sentence.split('');
  let arr = [];

  for (let i = 0; i < char.length; i++) {
    let ele = char[i];
    if (cipher[ele] !== undefined) {
      arr.push(cipher[ele]);
    } else {
      arr.push(".")
    }
  }
  return arr.join('')
}


//0bj? key intoa value
//
function sillyCipher(sentence, cipher) {
  //  for ( let obj in )
}
let obj = { 'a': 2, 'b': 3, 'c': [2, 3, 4], 'd': { 'ab': [21] } }
console.log(obj['c']);
console.log(obj['a']);

// console.log(sillyCipher("apple", { a: "c", p: "x", l: "r", e: "o" }));
// console.log(sillyCipher("apple", { a: "c", p: "x" }));
// console.log(sillyCipher("bootcamp prep?", { o: "e", p: "q", "?": "!" }));
// console.log(sillyCipher("twmce", { m: "n", t: "d", w: "a" }));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
