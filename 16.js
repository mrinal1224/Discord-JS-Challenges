// Question 1: Sum of Array Using reduce()

// Problem Description:
// Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.

// Inputs:

// An array of numbers.
// Outputs:

// A number representing the sum of the array.
// Hints:

// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Solution Approach:
// Initialize the reduce() method with an initial accumulator value of 0. Then, for each value in the array, add it to the accumulator.

// Solution:

function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}


// Test Cases

console.log(sumArray([1, 2, 3, 4]));  // 10
console.log(sumArray([-1, -2, 3, 4]));  // 4
console.log(sumArray([]));  // 0