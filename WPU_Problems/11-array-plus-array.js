/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// Declarative Approach
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0)
}

// Imperative Approach
function arrayPlusArray2(arr1, arr2) {
    let sum = 0;
    let biggerArr = arr1.length - arr2.length < 0 ? arr2 : arr1;
    let smallerArr = arr1.length - arr2.length < 0 ? arr1 : arr2;
    if(biggerArr === smallerArr){
        for(let i=0; i < arr1.length; i++){
            sum += (arr1[i] + arr2[i]);
        }
        return sum;
    }
    for(let i=0; i < biggerArr.length; i++){
        i < smallerArr.length ? sum+=(biggerArr[i] + smallerArr[i]) : sum+=biggerArr[i]
    }
    return sum;
}

// Imperative Approach (More Efficient)
function arrayPlusArray2(arr1, arr2) {
    let sum = 0;
    let longestArr = arr1.length - arr2.length < 0 ? arr2.length : arr1.length;

    for(let i=0; i < longestArr; i++){
        if(i < arr1.length) sum+=arr1[i];
        if(i < arr2.length) sum+=arr2[i];
    }
    return sum;
}


console.log(arrayPlusArray([1,2,3], [4,5,6]))
console.log(arrayPlusArray2([1,2], [4,5,2,3,4,5,5,5]))