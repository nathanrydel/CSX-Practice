// Get the length of an array using recursion without accessing its length property.

// Input: {Array} array - array whose length is sought
// Output: {Number}

// ADD CODE HERE

// declare a function, getLength, with params array: array, length: number with default value 0
function getLength(array, length = 0) {
  // base case: return length if array at index 0 is undefined
  if (array[0] === undefined) return length;
  // increase length if length is not undefined
  length++;
  // recursively call getLength, and pass in sliced array at index 1 and length
  // return resulting invocation of getLength
  return getLength(array.slice(1), length);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
