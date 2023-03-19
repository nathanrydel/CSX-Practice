const getTheSum = (arr) => {
  // ADD CODE HERE
  // declare sum variable to store sum
  let sum = 0;
  // use a for loop to iterate thru arr
  for (let i = 0; i < arr.length; i++) {
    // add the element at i to sum
    sum += arr[i];
  }
  // return sum
  return sum;
};

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33
