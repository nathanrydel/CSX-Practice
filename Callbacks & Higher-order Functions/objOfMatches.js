// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

// ADD CODE HERE

// input: array1, array2, callback
// output: obj

const objOfMatches = (array1, array2, callback) => {
  // declare variable to store output
  const updatedObj = {};
  // Loop thru elements of array1
  for (let i = 0; i < array1.length; i++) {
    // check if element of array 1 using callback is strictly equal to array2 element at same index
    if (callback(array1[i]) === array2[i]) {
      // if match, element from array1 = key and element from array 2 = value
      updatedObj[array1[i]] = array2[i];
    }
  }
  // return output
  return updatedObj;
};

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
