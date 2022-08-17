//scope
//where a certain variale name evaluates to a specific value

//global scope is the largest and most outer scope there is in JS
//JS has function scope. New function means new scope!

let myName = 'alvin'
function foo() {
    let myName = 'bootcamp prep';
    console.log(myName)
}

console.log('global myname before', myName)


// global scope
var myName = 'global';

function function1() {
    // function1's scope
    var myName = 'func1';
    console.log('function1 myName: ' + myName);
}
function function2() {
    // function2's scope
    var myName = 'func2';
    console.log('function2 myName: ' + myName);
}

console.log('global myName: ' + myName); // global scope
function1();
function2();
console.log('global myName: ' + myName); // global scope

// BONUS - ES5 vs ES6 - var, const, let

// ES5 - var                        more flexible
// ES6 - const, let                 more strict

// -------------------------------------------------------------------------
//              Hoisting   |   Re-assign   | Re-declared   | Scope
// -------------------------------------------------------------------------
// var          Yes        | Yes           | Yes           | Function
// let          No         | Yes           | No            | Block
// const        No         | No            | No            | Block
// -------------------------------------------------------------------------
// Hoisting //available everywhere 
//reclare -> words var or let or const 
//ex of block : for loop or if statement has its own block