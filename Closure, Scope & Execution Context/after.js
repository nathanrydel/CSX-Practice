// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

// ADD CODE HERE

// create a function, after, that takes a number and callback
function after(numberThreshold, callback) {
  // create counter variable to track number of times invoked
  let runCounter = 0;

  // create inner function that returns function definition
  return function (...args) {
    // increment runCounter on every run
    runCounter++;
    // check if number of times run is equal to or greater than numberThreshold
    if (runCounter >= numberThreshold) {
      // if truthy, return callback on invocation
      return callback.apply(this, args);
    }
  };
}

const called = function (string) {
  return 'hello ' + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
