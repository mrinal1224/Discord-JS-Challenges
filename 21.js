// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.

// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.

// Solution Approach: Use async/await within a for...of loop.

// Solution:

async function asyncLoop(arr, asyncFunc) {
    for (const item of arr) {
      await asyncFunc(item);
    }
  }
// Test cases-
// asyncLoop([1, 2, 3], async (num) => console.log(num)); // Logs 1, 2, 3 in sequence
