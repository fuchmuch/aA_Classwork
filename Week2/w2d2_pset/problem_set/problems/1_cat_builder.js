/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
    let cat = {
        name: name,
        color: color,
        toys: toys
    }
    return cat;
}


let cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
console.log(cat2);

///////dot notatioin////

function catBuilder(name, color, toys) {
    let cat = {};
    cat.name = name;
    cat['color'] = color;  //why only color put a bracket? also is it ok to use color= cat['color']
    cat.toys = toys;

    return cat;
}

let cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
console.log(cat1);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = catBuilder;
