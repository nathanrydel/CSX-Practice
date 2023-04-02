// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// ADD CODE HERE
// input: array, callback
// output: array

const groupBy = (array, callback) => {
  const groupedObj = {};
  // iterate thru array
  for (let i = 0; i < array.length; i++) {
    // return value from callback and save as a key
    const key = callback(array[i]);
    // value of key associated is an array
    if (!groupedObj[key]) {
      groupedObj[key] = [];
    }
    groupedObj[key].push(array[i]);
  }
  return groupedObj;
};

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
