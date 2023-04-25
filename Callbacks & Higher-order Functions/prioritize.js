// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

// ADD CODE HERE

// input: arr, callback
// output: arr with truthy results first, falsy results second

const prioritize = (arr, callback) => {
  // declare empty truthy result array
  const truthyArr = [];
  // declare empty falsy result array
  const falsyArr = [];
  // iterate thru each element of arr
  // perform callback on each element
  arr.forEach((element) => {
    // if callback result is truthy, add to truthy array
    if (callback(element)) {
      truthyArr.push(element);
    } else {
      // if result is false, add to falsy array
      falsyArr.push(element);
    }
  });
  // return combination of truthy array and falsy array with truthy first
  return [...truthyArr, ...falsyArr];
};

// Uncomment these to check your work!
function startsWithS(str) {
  return str[0].toLowerCase() === 's';
}
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
