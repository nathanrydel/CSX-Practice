// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

// ADD CODE HERE

const countBy = (array, callback) => {
  const countedArrayToObj = {};
  // iterate thru array
  for (let i = 0; i < array.length; i++) {
    // declare key and set to callback at element of array
    const key = callback(array[i]);
    // check if key true
    if (countedArrayToObj[key]) {
      // increment key
      countedArrayToObj[key]++;
    } else {
      // set key to 1 if false
      countedArrayToObj[key] = 1;
    }
  }
  return countedArrayToObj;
};

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
