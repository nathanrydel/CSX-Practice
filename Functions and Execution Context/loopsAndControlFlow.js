const mergingTripletsAndQuints = (array1, array2) => {
  // ADD CODE HERE
  // create a new array, mergedArr
  let mergedArr = [];
  // iterate thru array1 with FOR loop
  for (let i = 0; i < array1.length; i++) {
    // check if array1 element is divisible by 3 OR 5
    if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
      // add replaced element in new array, mergedArr
      // replaced element is array1[i] + array2[i]
      mergedArr[i] = array1[i] + array2[i];
    } else {
      mergedArr[i] = array1[i];
    }
  }
  // return new array
  return mergedArr;
};

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
