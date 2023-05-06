// Declare a function Dog that creates a new instance of a Dog object when invoked with the new keyword. Each Dog object should have a name property and a breed property, both strings which are passed in as arguments when calling the Dog function. It should also have a property called tricks, set to an array representing all the tricks that dog knows. When a new object is initiated, tricks should be empty.

// All of your Dog objects must also have access to two methods that are stored on the constructor's prototype:

// The first method, learnTrick, should take in a string as an argument and add that string to the tricks array of the particular Dog object it was called on.

// The second method, performTrick, should also take a string as an argument. It should check to see if that string is in the tricks array belonging to the Dog instance it was called on; if so, it should log the string 'name performed trick!' If not, log the string 'name doesn't know that trick.

// Declare a function Dog, instance of a Dog object, and pass in name: string and breed: string
function Dog(name, breed) {
  // add code here
  // assign key:name to arg name, key:breed to arg breed, and key:tricks to empty array
  this.name = name;
  this.breed = breed;
  this.tricks = [];
}

// add learnTrick method to Dog.prototype and pass in trick: string
// and add trick to the tricks array
Dog.prototype.learnTrick = function (trick) {
  this.tricks.push(trick);
};

// add performTrick method to Dog.prototype and pass in trick: string
Dog.prototype.performTrick = function (trick) {
  // check if trick all ready in tricks array
  if (this.tricks.includes(trick)) {
    // if yes, console.log desired string
    console.log(`${this.name} performed ${trick}!`);
  } else {
    // else, console.log desired string
    console.log(`${this.name} doesn't know that trick.`);
  }
};

const fido = new Dog('Fido', 'poodle');

// Uncomment these lines to check your work!
console.log(fido.tricks); // should log tricks as empty array
fido.learnTrick('fetch'); // should add fetch to tricks array
console.log(fido.tricks, 'after invocation'); // should log ['fetch'] 'after invoation'
fido.performTrick('fetch'); // should log 'Fido performed fetch!'
fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'
fido.learnTrick('roll over'); // should add 'roll over' to tricks array
console.log(fido.tricks); // should log ['fetch', 'roll over']
fido.performTrick('roll over'); // should log 'Fido performed roll over!'
