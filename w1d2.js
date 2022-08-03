// DRY - Don't repeat yourself
// To avoid repeating expressions, we have function

// function average(num1, num2) {
//     let sum = num1 + num2;
//     let average = sum / 2;

//     return average;
// }

// let average1 = function (num1, num2) {
//     let sum = num1 + num2;
//     let average = sum / 2;

//     return average;
// }

// let average2 = function (num1, num2) {
//     let sum = num1 + num2;
//     let average = sum / 2;
//     average === 1.5 ? console.log(1.5) : console.log('not 1.5') //syntactic sugar
//     //? presents if, : presents 
//     average !== 1.5 && console.log('testing the other if statement')
//     //&& is if in here 
//     return average; //how to initialize and declare the function
// }
// console.log(average1(1, 2))


// Helper cuntion
// Helps to simplify a section of code in another function

function average(num1, num2) {
    let sum = num1 + num2;
    let average = divideByTwo(sum); //sum 

    return average;
}

function divideByTwo(sum) {
    return average;
}


