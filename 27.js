// Problem 7: Generator Function
// Description:
// Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.

// Solution Approach:
// Use the function* syntax for generator functions and the yield keyword.

//Solution

function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  

//test cases

const numbers = range(1, 5);

for (const num of numbers) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5
