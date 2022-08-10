//non-unique pairs
function everyCombination(students) {
    let pairs = [];

    for (let i = 0; i < students.length; i++) {
        let name1 = students[i];
        console.log(`NAME1 = ${name1}`)
        for (let j = 0; j < students.length j++) {
            let name2 = students[j];
            pairs.push([name1, name2])
        }
    }
    return pairs;
}

let students = ['kevin', 'Jesse', 'Jason', 'Simon']
console.log(everyCombination(students));


function pairStudents(arr) {
    let uniquePairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            uniquePairs.push([arr[i], arr[j]])
        }
    }
    return uniquePairs;
}

console.log(pairStudents(uniquePairs));