// Problem 2: Debounce Function
// Description:
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.

// Solution Approach:
// Use a timer and clear it on each invocation to delay the function execution.

// Complete Solution

function debounce(func, delay) {
    let timeout;
  
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }


// Test Cases

function printMessage(message) {
    console.log(message);
  }
  
  const debouncedPrint = debounce(printMessage, 200);
  
  debouncedPrint("Hello");
  debouncedPrint("World"); // Only this should be printed after 200ms
  
  