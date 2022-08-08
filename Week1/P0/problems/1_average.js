/******************************************************************************
** Write a function average(num1, num2) that returns the average of two numbers.
**
** Examples:
**
** average(10, 20); // => 15
** average(5, 7); // => 6
** average(24, 32); // => 28
*/

function average(num1, num2) {
  let sum = num1 + num2
  let avg = sum / 2;
  return avg;

}

function average(num1, num2) {

  return (num1 + num2) / 2
}

console.log(average(10, 20));
console.log(average(5, 7));
console.log(average(24, 32));




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = average;
