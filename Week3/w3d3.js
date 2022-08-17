//math & callback


// Math.floor : Rounds numbers downwards
console.log(Math.floor(3.8));

// Math.ceil : rounds numbers upwards
console.log(Math.ceil(3.2));

// // Math.round : Rounds numbers normally
console.log(Math.round(3.7));

// // Math.sqrt : Squart root of a number
console.log(Math.sqrt(25));

// // Math.pow : Two arguments, first agrument is the base number, second argument is what youre setting the power to
// console.log(Math.pow(2, 4));

// // Math.sign : Returns -1 or 1 depending on if the number is negative or positive respectively
console.log(Math.sign(10));

// // Math.abs : Returns the absolute value of a number
console.log(Math.abs(-20));

// Math.PI : Returns pi
console.log(Math.PI);


function areaCircle(radius) {
    let area = Math.PI + Math.pow(radius, 2);
    return Math.floor(area);
}

console.log(areaCircle(5));


//higher order function: 1) takes a fuction as an argument 2) returns a function as a return value
//functions can also be stored or paased arnd in variables
//callbacks: when the arguments is a function it is considered as a callback

function higherOrder(cb) {
    cb();
}

function sayHello() {
    console.log('Hello')
}

function sayGoodBye() {
    console.log('goodbye')
}

higherOrder(sayHello);
higherOrder(sayGoodBye); ///calling and invoking 





