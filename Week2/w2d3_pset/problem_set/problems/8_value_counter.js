/***********************************************************************
Write a function `valueCounter(obj, val)` that takes in an object and a 
value, the function should return the number of times 'val' repeats as a
value in 'obj'.

//Example:
// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// valueCounter(obj1, 'Anne') // => 3

// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// valueCounter(obj2, 88) // => 0

// pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
// valueCounter(pairs, 'Roman') // => 2
***********************************************************************/

//init an interger that will kepp count of the amount of times of a value appears in the object
//init to 0;
//use a for in loop to loop through the obj
//but in for loop, key into the obj to the key == key into the obj with the key thats given from the for in loop
//check to see if the value = the value being passed in
//if ture, then increment the count

function valueCounter(object, value) {
    let count = 0;

    for (let key in object) {
        let val = object[key];
        if (val === value) {
            count++;
        }
    }

    return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valueCounter;