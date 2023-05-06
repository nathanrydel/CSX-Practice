// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

const personStore = {
  greet() {
    console.log('hello');
  },
};

function personFromPersonStore(name, age) {
  // add code here
  // declare person variable and assign to output of Object.create passing personStore as prototype
  const person = Object.create(personStore);
  // add name property
  person.name = name;
  // add age property
  person.age = age;
  // return person object
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); // -> Logs 26
// sandra.greet(); // -> Logs 'hello'
