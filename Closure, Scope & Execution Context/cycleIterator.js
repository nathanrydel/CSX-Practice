// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// ADD CODE HERE
// input: array
// output: function

// declare a function, cycleIterator, that accepts an array
function cycleIterator(arr) {
  // declare a variable to store index of array element
  let indexPos = 0;
  // return a function that accepts zero args
  return function () {
    // return each element of array in order
    // grab the element of array at indexPos
    // update indexPos, increment by 1
    const result = arr[indexPos++];
    // check if the indexPos >= array length, reset index to 0
    if (indexPos >= arr.length) indexPos = 0;
    // return result value
    return result;
  };
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
