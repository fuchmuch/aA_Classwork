// // The 'for' loop

function printRange(start, end) { //1 , 10
    for (let i = start; i <= end; i++) { // i =11
        console.log(i); // console.log(10);
    }
}

printRange(1, 10);

//while loop

function printRange2(start, end) {
    let i = start;

    while (i <= end) {
        console.log(i);
        i++

    }
}




// // infinite loop
function printChars2(str) {
    for (let i = 0; i <= 10; i--) {
        console.log(i);
    }
}

printChars2('hello')  /// never ends 

// // 'ctrl c' to escape an infinite loop ****////

// //Looping keywords
// //continue - skips the current loop iteration
// //break terminates the loop/ exit the line

function skipEvenNums(num) {
    for (let i = 1; i < num; i++) {
        if (i % 2 === 0) {
            break;
        }
        console.log(i)
    }
}

function earlyReturn(num) {
    console.log('before the loop');

    for (let i = 0; i <= num; i++) {
        if (i === 5) {

            console.log('i is equal to 5')
            break;
        }
        console.log(i); //console.log(0)
    }
    console.log('after the loop')

}

// isPrime
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.

function isPrime(number) {

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }
    }
    return true;

}

console.log(isPrime(7));

// 2, 3, 5, 7, 11, 13, 15, 19, 23, 29, 31 prime numbers
//i know that a prime number is only divisible by itself and the number 1
// negative umbrs are not prime
// I know that th numbers 1 and 0 are not prime 
//only whole numbers are prime 
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// continue : skip one iteration and goes back to top of the bracket
//break: loop goes to end of bracket
