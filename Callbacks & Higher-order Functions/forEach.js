// Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

const forEach = (array, callback) => {
  // iterate thru array
  for (let i = 0; i < array.length; i++) {
    // invoke the callback function
    callback(array[i]);
  }
};

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

const map = (array, callback) => {
  // assign new array as output
  let output = [];
  // call forEach func with params for array and the func takes an array element
  forEach(array, function (element) {
    // invoke the callback func with the current array element given by forEach
    output.push(callback(element));
  });
  return output;
};

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]
