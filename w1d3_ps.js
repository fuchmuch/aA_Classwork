// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
6

function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        console.log(i);
    }
}

logBetween(4, 6);





// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

// function logBetweenStepper(min, max, step) {
//     for (let i = min; i <= max; i += step) {
//         console.log(i)
//     }
// }

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

function printFives(max) {
    for (let i = 0; i < max; i += 5) {
        console.log(i)
    }
}

printFives(20)

function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }

}
printFives(20)

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse(min, max) {
    for (let i = max; i >= min; i--) {
        console.log(i);
    }
}

printReverse(90, 94);

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

function sumNums(max) {
    let sum = 0
    for (let i = 0; i <= max; i++) {
        sum += i
    }
    return sum;
}

console.log(sumNums(365));


// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:


function isFactorOf(number, factor) {
    if (number % factor === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isFactorOf(6, 2)); // => true
console.log(isFactorOf(-6, 2)); // => true
console.log(isFactorOf(5, 0)); // => false
console.log(isFactorOf(22, 7)); // => false

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

function fizzBuzz(max) {

    for (let i = 0; i < max; i++) {
        let divByFive = i % 5 === 0;
        let divByThree = i % 3 === 0;

        if ((divByFive || divByThree) && !(divByFive && divByThree)) {
            console.log(i)
        }

    }

}
fizzBuzz(20);


// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true

function isPrime(number) {

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }
    }
    return true;

}
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(2017));















function printBackwards(start, end) {
    let i = end;
    while (i >= start) {
        console.log(i);
        i--;
    }
}
printBackwards(-5, 6)



function func1(num) {
    return num + 50;
}

function func2(num) {
    return num + " bottles of beer on the wall";
}

function func3(num) {
    var x = func1(num);
    return func2(x);
}

var result = func3(5);
console.log(result);
var foo = function (name) {
    return "Dance " + name + ", dance! "
}

var bar = function () {
    var str = "";

    for (var i = 0; i < 3; i += 1) {
        str += foo("Anthony");
        str += foo("Haseeb");
        str += foo("Winnie");
        str += " | ";
    }

    return str;
}

var result = bar();
console.log(result);