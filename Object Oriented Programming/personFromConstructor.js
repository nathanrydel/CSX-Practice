// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

function PersonConstructor() {
  this.greet = function () {
    console.log('hello');
  };
}

function personFromConstructor(name, age) {
  // add code here
  // declare variable person and set to new instance of PersonConstructor
  const person = new PersonConstructor();
  // set name property
  person.name = name;
  // set age property
  person.age = age;
  // return person
  return person;
}

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); // -> Logs 30
// mike.greet(); // -> Logs 'hello'
