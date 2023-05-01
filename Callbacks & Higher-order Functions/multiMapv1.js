// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// input: values: array, callbacks: array
// output: object with key matching element of values array and corresponding values matching an array of the output of the callbacks

// ADD CODE HERE

// declare a function, multiMap, that accepts values: array and callbacks: array
function multiMap(values, callbacks) {
  // instantiate an empty object to store result
  const result = {};
  // iterate thru values with a for loop
  for (let i = 0; i < values.length; i++) {
    // declare a key variable and assign it values[i]
    const key = values[i];
    // add this key to result obj and assign value as empty array
    result[key] = [];
    // iterate thru callbacks with a for loop
    for (let j = 0; j < callbacks.length; j++) {
      // declare a callback variable and assign to function at callbacks[j];
      const callback = callbacks[j];
      // run the callback function on key and push to result at key
      result[key].push(callback(key));
    }
  }
  // return result
  return result;
}

// Uncomment these to check your work!
function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
