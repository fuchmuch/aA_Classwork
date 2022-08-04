// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));


function isOddv2(num) {
    return num % 2 === 1 || num % 2 === -1;
}
console.log(isOddv2(2));
console.log(isOddv2(5));
console.log(isOddv2(-17));


function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));


// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {

    return num + 5;
}

console.log(plusFive(10));

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//

function threeOrSeven(num) {
    return (num % 3 === 0) || (num % 7 === 0);

}
console.log(threeOrSeven(3));
console.log(threeOrSeven(42));
console.log(threeOrSeven(8));

function threeOrSeven(num) {
    if ((num % 3 === 0) || (num % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(threeOrSeven(3));
console.log(threeOrSeven(42));
console.log(threeOrSeven(8));




// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//


function hello(str) {

    console.log("hello" + str + ".");

}
console.log(hello("child"))

function hello(str) {
    let message = "hello" + str
    console.log(message);
}

console.log(hello("child"));

function hello(str) {
    return `Hello${str}`
}

console.log(hello("child"));


//string interpolation

// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.

// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//


function yell(str) {

    let yelledStr = str.toUpperCase()
    return yelledStr + "!!!";
}

console.log(yell("I want to go to the store"));
console.log(yell("Time to program"));


function yell(string) {
    return string.toUpperCase()
}


console.log(yell("I want to go to the store"));

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."


function whisper(string) {

    let whispheredStr = string.toLowerCase()
    return "..." + whispheredStr + "..."
}

console.log(whisper("Hey Anthony"));
console.log(whisper("YEA! that was fun"));

function whisper(string) {

    return "..." + string.toLowerCase() + "..."
}

console.log(whisper("Hey Anthony"));
console.log(whisper("YEA! that was fun"));


function whisper(string) {

    return `...${string.toLowerCase()}...`
}
console.log(whisper("Hey Anthony"));
console.log(whisper("YEA! that was fun"));


// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {

    let result = searchString.toLowerCase().indexOf(subString.toLowerCase());
    return result !== -1; //-1 is nothing to do with true or false
}
console.log(isSubstring("The cat went to the store", "he cat went"));
console.log(isSubstring("Time to program", "time"));



function isSubstring(searchString, subString) {

    return searchString.toLowerCase().includes(subString.toLowerCase()) //instead of looking for #, looking for existing
}

console.log(isSubstring("The cat went to the store", "he cat went"));



function isSubstring(searchString, subString) {
    let lowerSearch = searchString.toLowerCase();
    let lowerSub = subString.toLowerCase();
    return searchString.indexOf(subString) > -1;
}
console.log(isSubstring("The cat went to the store", "he cat went"));
console.log(isSubstring("Jump for joy", "joys"));

function isSubstring(searchString, subString) {
    let lowerSearch = searchString.toLowerCase();
    let lowerSub = subString.toLowerCase();

    if (lowerSearch.indexOf(lowerSub) !== -1) {
        return true
    } else {
        return false
    }
}

console.log(isSubstring("The cat went to the store", "he cat went"));
console.log(isSubstring("Jump for joy", "joys"));



// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {

    let firstEcho = string.toUpperCase()
    let lastEcho = string.toLowerCase()

    return string = firstEcho + "..." + string + "..." + lastEcho;

}

console.log(echo("Mom!"));

//
function echo(string) {

    let upperWord = string.toUpperCase();
    let lowerWord = string.toLowerCase()

    return string = upperWord + "..." + string + "..." + lowerWord;

}



// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false

function isEven(num) {

    return (num % 2 === 0);
}



function isEven(num) {
    return !isOdd(num);
}
isEven(100)



// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
    let sum = num1 + num2 + num3 + num4;
    let avg = sum / 4;
    return avg;
}

console.log(averageOfFour(10, 10, 15, 5));
console.log(averageOfFour(3, 10, 11, 4));
console.log(averageOfFour(1, 2, 3, 4));



function sayHello(name) {
    var msg = 'Hello, ' + name + '. How are you?';
    return msg;
}

console.log(sayHello('bootcamp prep')); // feel free to change the string being passed


function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(checkNumber(5)); // feel free to change the number being passed

