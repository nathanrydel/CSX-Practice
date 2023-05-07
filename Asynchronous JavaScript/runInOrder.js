// Challenge: runInOrder
// Write a function called runInOrder that accepts as arguments in this order -

// an array of functions
// an array of numbers representing times in milliseconds
// runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. For example -

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

/*
// runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
 should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') 
 */
// declare function, runInOrder, that accepts funcs: array and times: array
function runInOrder(funcs, times) {
  // declare index variable to keep place
  let index = 0;
  // declare inner function, executeNext, to move thru funcs array
  function executeNext() {
    // if current index is less than funcs.length
    if (index < funcs.length) {
      // invoke setTimeout
      setTimeout(() => {
        // invoke funcs callback at current index
        funcs[index]();
        // increment index
        index++;
        // invoke executeNext recursively
        executeNext();
        // use times at index for interval
      }, times[index]);
    }
  }
  // invoke inner function to execute functions in order
  executeNext();
}

// declare async function, runInOrder, that accepts functionsArr: array and intervalsArr: array as arguments
async function asyncRunInOrder(functionsArr, intervalsArr) {
  // iterate thru functionsArr
  for (let i = 0; i < functionsArr.length; i++) {
    // create a new Promise that resolves after corresponding intervalsArr[i] index
    await new Promise((resolve) => setTimeout(resolve, intervalsArr[i]));
    // wait for the Promise to resolve, then execute current function
    functionsArr[i]();
  }
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]); // should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye')
