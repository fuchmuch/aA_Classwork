/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

//init an object
//loop through the people array
//init a person variable
//init a name variable
//init a score variable
//check to see if the name is in my totalScores obj
// if not then initialize the key value pair where the key is the name, and the value is the current score

function countScores(people) {
  let totalScores = {}; //make an empty object

  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    let name = person.name;
    let score = person.score;
    if (totalScores[name] === undefined) {
      totalScores[name] = score;
    } else {
      totalScores[name] += score

    }
    console.log(person)
    console.log(name)
    console.log(score)
    console.log(totalScores)
  }
  return totalScores
}

let ppl = [{ name: "Anthony", score: 10 },
{ name: "Fred", score: 10 },
{ name: "Anthony", score: -8 },
{ name: "Winnie", score: 12 }];

let countPpl = countScores(ppl);
console.log(countPpl); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

let peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];

console.log(countScores(peeps));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
