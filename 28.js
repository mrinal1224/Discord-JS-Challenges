// Problem 8: Proxy Object
// Description:
// Create a proxy object that intercepts and logs all property access.

// Solution Approach:
// Use the Proxy object to create a wrapper around another object.

// Complete Solution:


function createLoggingProxy(target) {
    return new Proxy(target, {
      get: function(target, property, receiver) {
        console.log(`Getting property: ${property}`);
        return Reflect.get(target, property, receiver);
      }
    });
  }


  //Test cases

const obj = { a: 1, b: 2 };
const proxyObj = createLoggingProxy(obj);

console.log(proxyObj.a); // Getting property: a, 1
console.log(proxyObj.b); // Getting property: b, 2

  