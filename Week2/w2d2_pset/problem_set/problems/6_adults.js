/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
***********************************************************************/

function adults(people) {
  let names = [];
  for (let i = 0; i < people.length; i += 1) {
    let person = people[i];
    console.log(person);

    if (person.age >= 18) {
      names.push(person.name) //using dot notation and person.name is string
    }
  };
  return names
}



///bracket notation
function adults(people) {
  let names = [];

  for (let i = 0; i < people.length; i += 1) {
    let person = people[i];
    if (person.age >= 18) {
      names.push(person.name);
    }
  }
  return names;
}



let ppl = [
  { name: 'John', age: 20 },
  { name: 'Jim', age: 13 },
  { name: 'Jane', age: 18 },
  { name: 'Bob', age: 7 }
];

console.log(adults(ppl));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = adults;
