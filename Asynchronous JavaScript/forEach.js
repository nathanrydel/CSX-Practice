// Challenge: forEach
// Recreate the built in array method, forEach - Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.

// Create a variable named delays and assign to it an array with the numbers 200, 500, 0, and 350 (in that order).

// Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).

// Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.

// declare function forEach and pass in arr: array and cb: object/function
function forEach(arr, cb) {
  // iterate thru arr
  for (let i = 0; i < arr.length; i++) {
    // pass each element of arr to cb and its index
    cb(arr[i], i);
  }
}

// initialize variable, delays: array, and set to 200, 500, 0, 350
const delays = [200, 500, 0, 350];

// declare function delayLog and pass in delayTime and (index) i: number
function delayLog(delayTime, i) {
  // use setTimeout to console log desired string, with value of i
  // pass in anon func with desired string and delayTime as interval
  setTimeout(() => console.log(`printing element ${i}`), delayTime);
}

// invoke forEach with delays as arr arg and delayLog as cb arg
forEach(delays, delayLog);
