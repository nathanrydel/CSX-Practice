// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

// ADD CODE HERE

const countBy = (array, callback) => {
  // create empty obj to store result
  const countedArrayToObj = {};
  // iterate thru array
  for (let i = 0; i < array.length; i++) {
    // declare key and set to callback at element of array
    const key = callback(array[i]);
    // check if key exists in countedArrayToObj
    if (countedArrayToObj[key]) {
      // increment key
      countedArrayToObj[key]++;
    } else {
      // if does not exist, create new key and set to 1;
      countedArrayToObj[key] = 1;
    }
  }
  return countedArrayToObj;
};

const refactoredCountBy = (arr, callback) => {
  // use .reduce() method to iterate thru the array and update the counts obj
  return arr.reduce((counts, current) => {
    // apply callback to current element to get the result
    const result = callback(current);
    // update the counts obj by incrementing the count associated with the results key
    counts[result] = (counts[result] || 0) + 1;
    // return the updated counts object to be used as the accumulator in the next iteration
    return counts;
  }, {});
};

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
console.log(refactoredCountBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
