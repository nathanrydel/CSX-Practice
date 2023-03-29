// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

const filterArray = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
};

const arrOfNums = [1, 2, 3, 4, 5];
const func1 = (num) => {
  // ADD CODE HERE
  // check if numb is even
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

function func2(num) {
  // ADD CODE HERE
  // check if num is odd
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]
