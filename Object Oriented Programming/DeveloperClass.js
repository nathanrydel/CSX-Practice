// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string "Hello World, my name is [name]".

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('hello');
  }
}

// add code here
// initialize class DeveloperClass that extends PersonClass
class DeveloperClass extends PersonClass {
  // delcare constructor that takes name: string
  constructor(name) {
    // initialize DeveloperClass with all properties of PersonClass using super() method
    super(name);
  }
  // delcare method, introduce, in DeveloperClass
  introduce() {
    // console log desired string making sure it works for any instance
    console.log(`Hello World, my name is ${this.name}`);
  }
}

const thai = new DeveloperClass('Thai', 32);
const sergei = new DeveloperClass('Sergei', 43);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
thai.greet(); // Logs 'hello'

console.log(sergei.name); // Logs 'Sergei'
sergei.introduce(); // Logs 'Hello World, my name is Sergei'
sergei.greet(); // Logs 'hello'
