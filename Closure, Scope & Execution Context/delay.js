// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

// ADD CODE HERE

// declare a function, delay, that accepts a callback and waitTime: number
function delay(callback, waitTime) {
  // return a function
  return function () {
    // use setTimeout() to invoke callback after waitTime
    return setTimeout(callback, waitTime);
  };
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
