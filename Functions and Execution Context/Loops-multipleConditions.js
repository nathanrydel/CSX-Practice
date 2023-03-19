// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.

const addingAllTheWeirdStuff = (array1, array2) => {
  // declare evenSum variable
  // declare oddSum variable
  let evenSum = 0;
  let oddSum = 0;

  // calculate the sum of odd and even numbers in array2
  // use a FOR loop to iterate thru each element in array2
  for (let i = 0; i < array2.length; i++) {
    // check if number is even
    if (array2[i] % 2 === 0) {
      // if yes, add element to sumEven
      evenSum += array2[i];
      // else, add element to sumOdd
    } else {
      oddSum += array2[i];
    }
    // if array2 element is greater than 20
    if (array2[i] > 20) {
      // use the map function to add 1 any element in array1
      array1 = array1.map((element) => element + 1);
    }
  }
  // add the sums to elements in array1
  // use a FOR loop to iterate thru each element in array1
  for (let i = 0; i < array1.length; i++) {
    // if element in array1 is less than 10
    if (array1[i] < 10) {
      // add sumOdd to element
      array1[i] += oddSum;
      // else array1 element is greater than 10
    } else {
      // add evenSum to element
      array1[i] += evenSum;
    }
  }
  // return array1
  return array1;
};

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
