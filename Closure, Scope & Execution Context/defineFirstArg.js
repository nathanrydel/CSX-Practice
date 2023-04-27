// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

// ADD CODE HERE

// create defineFirstArg function that accepts a function and an argument and returns a new function
function defineFirstArg(callback, definedArgs) {
  // passed in function will accept at least one argument(...args)
  return function (...args) {
    // new function invokes passed in function
    // passed in arguments will be first arguments of of passed in function
    // additional arguments needed by passed in function will be passed into return function
    return callback(definedArgs, ...args);
  };
}

// Uncomment these to check your work!
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
