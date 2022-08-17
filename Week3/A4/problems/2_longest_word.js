/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let longWord = '';
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= longWord.length) {
      longWord = word
      // } else if (word.length === longWord.length) {
      //   longWord = word
    }

  }
  return longWord

}
console.log(longestWord('app academy is cool'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
