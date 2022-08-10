/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  let arr = [];

  for (let i = 0; i < max; i++) {

    let divByFour = i % 4 === 0;
    let divBySix = i % 6 === 0;
    if ((divByFour || divBySix) && !(divByFour && divBySix)) {
      arr.push(i)
    }

  }
  return arr
}

console.log(magicNumbers(20));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
