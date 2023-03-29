// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

// input: array of arrays
// output: array

// ADD CODE HERE
const union = (arrOfArrs) => {
  // use reduce to iterate thru the outer array of arrays
  // initialize an empty arr to store output
  return arrOfArrs.reduce((outputArr, currentArr) => {
    // iterate thru each inner array
    currentArr.forEach((element) => {
      // if element is not present in output arr, add it
      if (!outputArr.includes(element)) {
        outputArr.push(element);
      }
    });
    // return output arr
    return outputArr;
  }, []);
};
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
