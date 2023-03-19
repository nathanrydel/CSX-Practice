// ADD CODE HERE
// declare a function, multiplyAll, that takes an unknown number of integers as args
const multiplyAll = (...ints) => {
  // declare product, to store the resulting multiplication
  let product = 1;
  // iterate thru args
  for (let i = 0; i < ints.length; i++) {
    // reassign product, product * current arg
    product = product * ints[i];
  }
  // return product
  return product;
};

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375
