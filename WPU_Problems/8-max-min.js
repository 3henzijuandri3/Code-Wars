/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/

// Imperative Approach
var min = function(list){
    let minValue = list[0];
    for(let i=0; i < list.length; i++) if(minValue > list[i]) minValue = list[i];
    return minValue;
}

var max = function(list){
    let maxValue = list[0];
    for(let i=0; i < list.length; i++) if(maxValue < list[i]) maxValue = list[i];
    return maxValue;
}

// Declarative Approach
const min2 = (list) => list.sort((a,b) => a-b)[0];
const max2 = (list) => list.sort((a,b) => a-b)[list.length - 1];

console.log(min([4,6,2,1,9,63,-134,566]));
console.log(max([4,6,2,1,9,63,-134,566]));

console.log(min2([4,6,2,1,9,63,-134,566]));
console.log(max2([4,6,2,1,9,63,-134,566]));