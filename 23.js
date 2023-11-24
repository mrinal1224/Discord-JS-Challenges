// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.

// Solution Approach:
// Utilize closure to maintain the state of the counter.


// Solution

function counter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }


// Test Cases


const incrementCounter = counter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
console.log(incrementCounter()); // 3

  

