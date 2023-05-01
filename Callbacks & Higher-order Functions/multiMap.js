// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// input: arr, arr of callbacks
// output: object

// ADD CODE HERE
const multiMap = (values, callbacks) => {
  // declare an empty result obj
  const resultObj = {};
  // iterate thru the elements of arr using .forEach()
  values.forEach((value) => {
    // declare an empty array to store output of callbacks
    const outputArr = [];
    // iterate thru each callback in the callbacks array using .forEach()
    // apply the callback to element of arr (value) and push to output array
    callbacks.forEach((callback) => outputArr.push(callback(value)));
    // add to result obj with the value as the key and the element of output array as the value
    resultObj[value] = outputArr;
  });
  // return the result obj
  return resultObj;
};

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
