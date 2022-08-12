/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }

        return true;
    }
}



function nextTwoPrimes(num) {
    let primes = [];

    for (let i = num + 1; primes.length < 2; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }

    }
    return primes;
}


//     let primes = [];
//     let n = 2;

//     while (primes.length < num) {
//         if (nextTwoPrimes(n)) {
//             primes.push(n);
//         }

//         num += 1;
//     }

//     return primes;
// }


// let num = 0;
// console.log(0 < 10);

// while (0 < 10) {
//     // num = 
//     console.log("hello world")
//     console.log(num)
//     num = num + 1;
// }
// for (let i = 0; i < 10; i++)
//< === <= ! always boolean
// console.log(nextTwoPrimes(2));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
