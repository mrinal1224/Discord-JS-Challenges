// Problem 5: Map, Filter, Reduce
// Description:
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.

// Solution Approach:
// Combine map, filter, and reduce array methods.

// Solution

function calculateTotal(numbers) {
    return numbers
      .filter(num => num % 2 !== 0)
      .map(num => num * num)
      .reduce((acc, val) => acc + val, 0);
  }

  
//   Test cases

const numbers = [1, 2, 3, 4, 5];

console.log(calculateTotal(numbers)); // (3^2 + 5^2) = 34
