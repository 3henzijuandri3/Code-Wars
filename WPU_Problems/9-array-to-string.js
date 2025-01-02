/*
Write a function to split a string and convert it into an array of words.

Example
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

}
*/

// Imperative Approach
function stringToArray(string) {
    const arr = [];
    let word = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            if (word !== '') {
                arr.push(word);
                word = '';
            }
        } else {
            word += string[i];
        }
    }
    if (word !== '') {
        arr.push(word);
    }
    return arr;
}


// Declarative Approach
const stringToArray2 = (string) => {
    return string.split(' ');
}

console.log(stringToArray2('Henzi'))
console.log(stringToArray('Henzi Juandri Juandri'))