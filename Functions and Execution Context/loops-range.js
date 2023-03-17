const getTheRange = (arr) => {
  // initialize the lowest number as the first element of arr
  let low = arr[0];
  // initialize the highest number as the first element of arr
  let high = arr[0];
  // use a FOR loop to iterate through arr
  for (let i = 0; i < arr.length; i++) {
    // assign a new variable, num, as the element of arr
    const num = arr[i];
    // check if num is less than low
    if (num < low) {
      // if yes, re-assign low to num
      low = num;
      // check if num is greater than high
    } else if (num > high) {
      // re-assign num to high
      high = num;
    }
  }
  return [low, high, high - low];
};

// Simple Test
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
