/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/

let bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120,
}

function printObject(obj) {
    for (let key in obj) {
        let val = obj[key];

        console.log(key + ' : ' + val);
    }
}

printObject(bootcamp);



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = printObject;
