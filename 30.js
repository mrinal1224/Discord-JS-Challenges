// Problem 11: Throttle Function
// Description:
// Implement a throttle function that ensures a given function is not called more than once in a specified time interval.

// Solution Approach:
// Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.


// Solution

function throttle(func, interval) {
    let lastInvocationTime = 0;
  
    return function(...args) {
      const currentTime = Date.now();
      if (currentTime - lastInvocationTime >= interval) {
        func.apply(this, args);
        lastInvocationTime = currentTime;
      }
    };
  }

  
//Test cases

function logMessage(message) {
    console.log(message);
  }
  
  const throttledLog = throttle(logMessage, 1000);
  
  throttledLog('Message 1'); // Output: Message 1
  setTimeout(() => throttledLog('Message 2'), 500); // No output
  setTimeout(() => throttledLog('Message 3'), 1200); // Output: Message 3
  