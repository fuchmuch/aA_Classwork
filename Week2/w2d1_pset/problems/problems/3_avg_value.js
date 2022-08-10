/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// init a sum variable
//loop through the array and collect the sum of the scores
//return the sum divided by the array.length 
//It’s also important that your variables are honest. An variable named “arr” shouldn’t be a String or Boolean.

function avgValue(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        sum += num
    }
    console.log('sum:' + sum);

    return sum / array.length

}

console.log(avgValue([10, 20]));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
