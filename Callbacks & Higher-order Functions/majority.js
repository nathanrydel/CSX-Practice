// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

// ADD CODE HERE

// input: array, callback function
// output: boolean result of callback function

const majority = (arr, callback) => {
  // declare trueCount
  let trueCount = 0;
  // declare falseCount
  let falseCount = 0;
  // use .forEach to iterate thru each element of arr
  arr.forEach((element) => {
    // check if running callback on element is true or false
    if (callback(element)) {
      // if yes, increment trueCount
      trueCount++;
    } else {
      // else, increment false count
      falseCount++;
    }
  });
  // return trueCount if greater than falseCount
  return trueCount > falseCount ? true : false;
};

const refactoredMajority = (arr, callback) => {
  let trueCount = 0;
  let falseCount = 0;

  arr.forEach((element) => (callback(element) ? trueCount++ : falseCount++));

  return trueCount > falseCount ? true : false;
};

// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

console.log(refactoredMajority([2, 3, 4, 5], isOdd)); // should log: false
console.log(refactoredMajority([1, 2, 3, 4, 5], isOdd)); // should log: false
