// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// input: array of arrays
// output: array

// declare intersection that takes arrays
const intersection = (arrays) => {
  // accumulator = starts as one of our arrays
  let accumulator = arrays.pop();
  // loop thru array of arrays
  while (arrays.length) {
    const current = arrays.pop();
    // declare newArray to store comparisons
    const newArray = [];
    // compare current array with accumulator
    // for each element in current
    current.forEach((element) => {
      // if that element exists in accumulator
      // push element into a new array
      if (accumulator.includes(element)) newArray.push(element);
    });
    // accumulator reassigned to new array
    accumulator = newArray;
  }
  // return accumulator
  return accumulator;
};

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
