/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
//initialize word array by splitting the sentence string at the spaces 
//init newSen arr
//loop through the words array backward
//at every iteration i want to push to the newSen
//return newSen joined at the spaces

function reverseSentence(sentence) {
  console.log(sentence)
  let words = sentence.split(' ')
  console.log(words)
  let newSen = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    console.log(word)
    newSen.unshift(word)
    console.log(newSen)
  }
  console.log(newSen)
  console.log(newSen.join(' '))

  return newSen.join(' ')
}
reverseSentence("Go to the store");
reverseSentence("Jump, jump for joy")


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
