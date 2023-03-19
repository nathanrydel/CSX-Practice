const addN = (arr, n) => {
  // ADD CODE HERE
  // use a for loop to iterate thru arr
  for (let i = 0; i < arr.length; i++) {
    // add n to each element in arr
    arr[i] += n;
  }
  // return arr
  return arr;
};

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
