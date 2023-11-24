// Problem 3: Promise Chaining
// Description:
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
// Use any random API that you want

// Solution Approach:
// Utilize the .then method to chain promises.



// Solution


function getData(api1, api2) {
    return fetch(api1)
      .then(response => response.json())
      .then(data1 => fetch(api2)
        .then(response => response.json())
        .then(data2 => ({ ...data1, ...data2 }))
      );
  }

  

// Test Cases
  const api1 = 'https://api.example.com/data1';
  const api2 = 'https://api.example.com/data2';
  
  getData(api1, api2)
    .then(result => console.log(result));
  
