// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// ADD CODE HERE
// input: array, callback
// output: object

const groupBy = (arr, callback) => {
  // Create an empty object to store the grouped elements
  const grouped = {};
  // Iterate over the array using the forEach method
  arr.forEach((element) => {
    // Call the callback function on the current element
    const key = callback(element);
    // If the key doesn't exist in the grouped object yet, create a new array for it
    if (!grouped[key]) {
      grouped[key] = [];
    }
    // Add the current element to the array associated with the key
    grouped[key].push(element);
  });
  // Return the final grouped object
  return grouped;
};

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
