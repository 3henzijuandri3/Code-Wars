/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
Function
const reverseSeq = n => {
  return [];
};
k*/

// Imperative Approach
const reverseSeq = n => {
  const result = [];
  for (let i = n; i >= 1; i--){
    result.push(i);
  }
  return result;
};

// Declarative Approach
const reverseSeq2 = n => {
  return(
    Array(n)
     .fill(1)
     .map((value, index) => {
      return value+1*index
     })
     .reverse()
  );
};

a = reverseSeq(5)
a

b = reverseSeq2(5)
b