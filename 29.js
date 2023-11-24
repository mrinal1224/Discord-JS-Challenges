// Problem 10: Promise.all with Timeout
// Description:
// Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.

// Solution Approach:
// Use Promise.race and a timeout promise.

//Solution 
function raceWithTimeout(promises, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Timeout')), timeout);
    });
  
    return Promise.race([...promises, timeoutPromise]);
  }

//Test cases

const promise1 = new Promise(resolve => setTimeout(() => resolve('Result 1'), 500));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));

raceWithTimeout([promise1, promise2], 800)
  .then(result => console.log(result)) // Output: Result 1
  .catch(error => console.error(error.message)); // Output: Timeout

  