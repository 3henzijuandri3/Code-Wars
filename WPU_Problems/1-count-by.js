/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]

Function
function countBy(x, n) {
    let z = [];
  
    return (x*n);
}
*/

// Imperative Approach
function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(x*i);
    }
    return z;
}

// Declarative Approach
const countBy2 = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

a = countBy(2,5)
a

b = countBy2(2,5)
b