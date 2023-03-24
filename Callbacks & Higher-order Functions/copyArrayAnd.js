// Now suppose we have a function copyArrayAndMultiplyBy2. Diagram it out

const copyArrayAndMultiplyBy2 = (array) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
};

// test your code
const myArrayMulti = [1, 2, 3];
let resultMulti = copyArrayAndMultiplyBy2(myArrayMulti);

console.log(resultMulti);

// Copy array and divide by 2

const copyArrayAndDivideBy2 = (array) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
};
const myArrayDiv = [1, 2, 3];
let resultDiv = copyArrayAndDivideBy2(myArrayDiv);

// test your code
console.log(resultDiv);

// Copy array and add 3
const copyArrayAndAdd3 = (array) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
};
const myArrayAdd = [1, 2, 3];
let resultAdd = copyArrayAndAdd3(myArrayAdd);

// test your code
console.log(resultAdd);

// Breaking principle of repeating code. Could implement other functions to manipulate the data with requested operators.
// Could do this by generalizing the function and passing the operator instructions via another function

// declare function of copyArrayAndManipulate
const copyArrayAndManipulate = (array, instructions) => {
  // assign target output as empty array
  let output = [];
  // iterate thru array param
  for (let i = 0; i < array.length; i++) {
    // push the action at specific element to the empty array based on the instructions to the targetted ouput array
    output.push(instructions(array[i]));
  }
  return output;
};

// Instructions defined
// declare a function to multiplyBy2
const multiplyBy2 = (input) => input * 2;

// declare a func to divideBy2
const divideBy2 = (input) => input / 2;

// delcare a func to add3
const add3 = (input) => input + 3;

// declare a func to square result
const squared = (input) => input * input;

// test your code
let resultManip = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(resultManip);

resultManip = copyArrayAndManipulate([1, 2, 3], divideBy2);
console.log(resultManip);

resultManip = copyArrayAndManipulate([1, 2, 3], add3);
console.log(resultManip);

resultManip = copyArrayAndManipulate([1, 2, 3], squared);
console.log(resultManip);

let myTestArray = [2, 5, 11];
resultManip = copyArrayAndManipulate(myTestArray, squared);
console.log(resultManip);

resultManip = copyArrayAndManipulate(myTestArray, multiplyBy2);
console.log(resultManip);

resultManip = copyArrayAndManipulate(myTestArray, divideBy2);
console.log(resultManip);

resultManip = copyArrayAndManipulate(myTestArray, add3);
console.log(resultManip);
