function squared(num) {
  return num ** 2;
}

console.log(squared(2));

function cAAMB2(num) {
  return num * 2;
}

const myArray = [1, 2, 3];
// const result = cAAMB2(myArray);

function dryMaths(array, cb) {
  const output = [];
  array.forEach((element) => output.push(cb(element)));
  return output;
}

// function 

const result = dryMaths(myArray, cAAMB2);

console.log(result);

function buildGreeting(time, name) {
  //your code goes here...
  let output = "";
  if (time <= 11) {
    output = `Good Morning, ${name}!`;
  } else if (time >= 12 && time <= 16) {
    output = `Good Afternoon, ${name}!`;
  } else if (time >= 17 && time <= 23) {
    output = `Good Evening, ${name}!`;
  } else {
    output = `That's not a real time ${name}. Maybe you need some sleep!`;
  }
  return output);
}


buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
buildGreeting(12, "John") //=> "Good Afternoon, John!"
buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
buildGreeting(31, "Derrick") // => "That's not a real time Derrick. Maybe you need some sleep!"
