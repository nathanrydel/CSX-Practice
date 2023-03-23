// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

const arrayBuilder = (obj) => {
  // declare empty array, resultArray to store result
  const resultArray = [];
  // FOR...IN loop thru each key-value in obj
  for (let key in obj) {
    // add key to resultArray obj[key] times
    for (let i = 0; i < obj[key]; i++) {
      // use push() method
      resultArray.push(key);
    }
  }
  return resultArray;
};

// Testing implementation
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
