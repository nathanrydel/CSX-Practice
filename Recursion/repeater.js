// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

// Input: {String} char
// Output: {String}

console.log('Hello, world!');

// declare a function, repeater, that takes an input, character: string
function repeater(char) {
  // check if string has a length of 5, return input string
  if (char.length === 5) {
    return char;
  }
  // recursively call function, repeater, with input string & first character of input string
  return repeater(char + char[0]);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g')); // should return 'ggggg'
console.log(repeater('j')); // should return 'jjjjj'
