// Question 5: Find the First Negative Value

// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.

// Inputs:

// An array of numbers.
// Outputs:

// A number representing the first negative number in the array or undefined if there are no negative numbers.
// Hints:

// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Solution Approach:
// Use the find() method and provide a callback that checks if the number is negative.

//Solution - 

function findFirstNegative(numbers) {
    return numbers.find(num => num < 0);
}


// test cases

console.log(findFirstNegative([1, 2, 3, -4, 5]));  // -4
console.log(findFirstNegative([-1, 2, 3, 4]));  // -1
console.log(findFirstNegative([1, 2, 3, 4]));  // undefined