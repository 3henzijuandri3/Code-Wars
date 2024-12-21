/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

Function
var countSheep = function (num){
  //your code here
}
*/

// Imperative Approach
var countSheep = function (num){
    let sentence = '';
    for(let i=1; i <= num; i++){
        sentence += i + ' sheep...'
    }
    return sentence;
}

// Declarative Approach
const countSheep2 = (num) => {
    return [...Array(num)].map((_,index) => `${index + 1} sheep...`).join('');
}

console.log(countSheep(5))
console.log(countSheep2(5))