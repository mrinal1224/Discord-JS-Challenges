// Problem Statement: Write a function to deeply compare two objects for equality.

// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.

// Solution Approach: Recursively compare properties of both objects.


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) return false;
    
    let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
  
    return keys1.every(key => deepEqual(obj1[key], obj2[key]));
  }


  //   Test Cases

//   console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}})); // true
// console.log(deepEqual({a: 1}, {a: 2})); // false
