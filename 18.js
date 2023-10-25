// Question 3: Doubling Each Value

// Problem Description:
// Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.

// Inputs:

// An array of numbers.

// Outputs:

// An array of numbers where each number is doubled.

// Hints:

// The map() method creates a new array with the results of calling a function for every array element.


// Solution Approach:
// Use the map() method to iterate over each value and double it.


function doubleValues(numbers) {
    return numbers.map(num => num * 2);
}



//Test cases

console.log(doubleValues([1, 2, 3, 4]));  // [2, 4, 6, 8]
console.log(doubleValues([0, -2, 5, 7]));  // [0, -4, 10, 14]
console.log(doubleValues([]));  // []