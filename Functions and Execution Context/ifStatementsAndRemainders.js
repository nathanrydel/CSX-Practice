// ADD CODE HERE
// create a function that accepts a num
let iLoveEvenNumbers = (num) => {
  // check if even
  if (num % 2 === 0) {
    // if so, return "Oh Yeah Evens!"
    return 'Oh Yeah Evens!';
    // else return "I am too normal for odd numbers"
  } else {
    return 'I am too normal for odd numbers';
  }
};
// Uncomment these to check your work!
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
