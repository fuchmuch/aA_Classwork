/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let n = 2; n < number; n++) {
    if (number % n === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(1693));
console.log(isPrime(15));
console.log(isPrime(303212));

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
  let primes = [];

  while (primes.length < n) {//while the primes array is too small

    if (isPrime(n)) {
      primes.push(n);
    }
    n += 1; //is this same as i++ ?
  }

  return primes
}

console.log(firstNPrimes(0)); // => []
console.log(firstNPrimes(1)); // => [2]
console.log(firstNPrimes(10)); // => [2, 3, 5, 7]

/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
  let primes = firstNPrimes(n);
  let totalSum = 0;

  for (let i = 0; i < primes.length; i++) {
    let primeNum = primes[i];
    totalSum += primeNum;

  }
  return totalSum
}

console.log(sumOfNPrimes(4));



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = {
  isPrime: isPrime,
  firstNPrimes: firstNPrimes,
  sumOfNPrimes: sumOfNPrimes
};
