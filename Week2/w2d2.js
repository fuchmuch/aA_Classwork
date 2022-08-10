//decomposition - process of breaking down a larger complex problem
//into smaller, more manageable sub problems

//why do we decomposition or helper functions?
//example:
//write a function 'laligatSum(n)' that takes in a number
//and returns the laligatSum of that number
// a number's laligat sum is the sum of all the prime numbers less than
//or equal to 

//console.log(laligatSum(10)): // => 2+3+5+7 = 17
//console.log(laligatSum(11)): // => 2+3+5+7 +11 = 28

//init a sum variable that will collect the sum of all primes below the number for me
//create the isPrime function
//loop through all the numbers less than or equal to the number that is being passed into the function

function laligatSum(num) {
    let sum = 0;

    for (let n = 2; n <= num; n++) {
        if (isPrime(n)) {
            sum += n;
        }
    }

    return sum;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let n = 2; n < num; n++) {
        if (num % n === 0) {
            return false;
        }
    }
    return true;
}

console.log(laligatSum(10));

//there is no hard rule to decide or when and how to decompose a large problem
//into multiple helper functions
//Do what makes sense in the context of the problem

//Objects

//Data structures - containers to store / organize data
//      -Array []           a collection of relates items
//      -object{}           model a single entity  -ie: real life obj

//Objects are another Javascript data structure we can use to store data
//Objects are non-primitive data type
////Objects are mutable
//keys in Javascript are always STRINGS!!
// values in Javascript can be of ANY data type
//keys are UNIQUE vs values are not unique
//objects are unordered vs arrays are ordered (arrays are ordered by indices)

//Alphanumeric order
//Two ways to create an object

//Method 1:
//Let's create our very first cat object;

let cat = {
    name: 'whiskers',
    age: 2,
    color: 'orange'
};

let cats = ['whiskers', 'garfield', 'bobo'];
//keys: name, age , color
//values: whiskers, 2, orange

console.log(cat);

// Method 2:
let dog = {};
// add key value pairs using square bracket notation
dog["name"] = 'fido';
dog['age'] = 4;
dog['color'] = 'brown';
console.log(dog)

//adding key-value pairs using dot notation
// dog.name = "fido";
//dog.age = 4;
//dog.color = "brown";
//console.log(dog);


//Dot  Notation vs Bracket Notation 
let pokemon = {
    id: 25,
    name: 'pikachu',
    color: 'yellow',
    type: 'electric',
    attacks: ['thunderbolt', 'agility', 'growl'],
    'test-attr': true


}

//keying into an object to get its corresponding value
//1. using square bracket notation
console.log(pokemon['name']);

//2.using dot notations
console.log(pokemon.name)

//when a key-value pair does not exist in object
//console.log(pokemon['height']); //undefined
//console.log(pokemon.height); //undefined

// you can key into object into variable but not with dot notation
//you can only use dot notation with exact variable
//1.Using variables
let potato = 'color';

// console.log(pokemon[potato]); //"yellow"
// console.log(pokemon.potato); //undefined ; looks for the literal key of "potato"

//2. keys that are not valid varianble names
//console.log(pokemon(['test-attr']); //true

//keys in javascript objects are string and unique
//keys that are NOT valid javascript variable names can NOT be accessed with dot notation 
//key represented by variables can be used with square bracket notation and NOT dot notation
//Dot notation always looks for the literal key each key 

//write a function 'printObj' that takes in an object and simply prints out
//each key value pair of the object

let jigglypuff = {
    name: 'jigglypuff',
    id: 39,
    gender: 'female',
};

function printObj(obj) {
    for (let key in obj) {
        let val = obj[key];
        console.log(key + ':' + val)
    }
}

//printObj(jigglypuff);

//write function 'elementCount' that takes in a word and returns an 
//object where the keys represent each unique character in the word,
// and the value corresponds to the number of time each character appears in the string

//console.log(elementCount('')) //=>{}
//console.log(elementCount('pizza')) //{ p: 1, i: 1, z: 2, a: 1 }

function elementCount(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    return obj;

}
console.log(elementCount('')); //=>{}
console.log(elementCount('pizza'));

//Objects vs arrays

// an object contain key value pairs
//if key is not inside of an obj valu we get when accessing that key is undefined
//use variables as keys in an obj by using bracket notation
//keys in an obj can be strings data type
//values in an obj can be any data type