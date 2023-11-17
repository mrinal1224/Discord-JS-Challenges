// Problem Statement: Implement a memoization function.

// Description: Write a function that takes a function as its argument and returns a memoized version of the function.

// Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.

// Solution
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn.apply(this, args);
    }
    return cache[key];
  };
}


// Test Cases

// const fib = memoize(n => n <= 1 ? n : fib(n - 1) + fib(n - 2));
// console.log(fib(10)); // 55

