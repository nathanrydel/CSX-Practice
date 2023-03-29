// Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.

const eitherFilter = (array, callback1, callback2) => {
  // ADD CODE HERE
  // declare a new array to store output
  const filteredArray = [];
  // iterate thru array
  for (let i = 0; i < array.length; i++) {
    // store the element of the array
    let element = array[i];
    // check truthyness of callback1 or callback 2
    if (callback1(element) || callback2(element)) {
      // push result to filteredArray
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
