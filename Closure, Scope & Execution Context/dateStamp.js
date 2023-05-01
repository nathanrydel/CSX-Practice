// Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

// ADD CODE HERE

// input: function
// output: function that returns an obj

// create a function, dateStamp, that accepts a function as a parameter
function dateStamp(callback) {
  // return a function that accepts any arguments from the passed in function
  return function (...args) {
    // create an object
    const outputObj = {};
    // create a property with the key "date" and a value of today's date not including the time
    outputObj.date = new Date().toDateString();
    // create a property with the key "output" and a value of the evaluated result of the passed in func & arguments
    outputObj.output = callback(...args);
    // return the object
    return outputObj;
  };
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
