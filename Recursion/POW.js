// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// Input 1: {Number} base - base number raised to the exponent
// Input 2: {Number} exponent - exponent the base is raised to
// Output: {Number} - expected value of base raised to exponent

function pow(base, exponent) {
  // base case: return the base if exponent is 1
  if (exponent === 0) return 1;
  // recursive case: mulitply base by pow(base, exponent -1)
  return base * pow(base, exponent - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
