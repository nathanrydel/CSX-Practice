// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values

// ADD CODE HERE

// declare a function, saveOutput, that accepts callback and password:string
function saveOutput(func, password) {
  // declare an empty obj to store all invocations
  const cache = {};
  // declare and return a function that behaves like callback with one argument
  return function (argument) {
    // check if argument === password
    if (argument === password) {
      // return cache obj
      return cache;
    } else {
      // perform saveOutput func on argument
      // save arg as key
      cache[argument] = func(argument);
      // return output value
      return cache[argument];
    }
  };
}

// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog(11)); // should log: 18
console.log(multBy2AndLog(14)); // should log: 18
console.log(multBy2AndLog(144)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
