// Create a function subtractTwo that accepts a number and returns that number minus 2.

const subtractTwo = (num) => num - 2;

// Then create a function map that takes two inputs -
// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

const map = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

console.log(map([3, 4, 5], subtractTwo)); //-> [1,2,3]
console.log(subtractTwo(10)); //-> 8
console.log(subtractTwo(12)); //-> 10
