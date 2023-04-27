// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

// ADD CODE HERE
// input: callback
// output: first run result of callback

// declare function, once, that accepts a callback as input
function once(callback) {
  // declare a variable to check if once has run
  let hasRun = false;
  // initialize a variable to store result of first run
  let result;

  // create and return anonymous inner function that takes any number of args
  return function (...args) {
    // check hasRun to determine if function has run before
    if (!hasRun) {
      // apply callback to result and explicitly set this value
      result = callback.apply(this, args);
      // change hasRun state
      hasRun = true;
    }
    // return result of first run
    return result;
  };
}

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
