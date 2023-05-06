// Declare a class Chain that creates a new instance of a Chain object when invoked with the new keyword. Each Chain object should have a name property, a totalStores property, and a locations property. The name property will be assigned to a string which is passed in as an argument when calling the Chain function. The totalStores property should be initialized to 0 and the locations property set to an array representing all the existing franchises of that chain store. When a new object is initiated, the locations array should be empty.

// Declare another class Franchise that creates a new instance of a Franchise object when invoked with the new keyword. Each Franchise object should have an owner property and a city property, both of which will be set equal to strings passed in as arguments to the constructor.

// All instances of your Chain class must also have access to two methods that are stored on the class's prototype:

// The first method, openStore, should take in 2 strings as arguments. Those strings should be passed into a new instance of a Franchise object as the arguments for the owner and city properties. The new instance of Franchise should be added to the locations array which belongs to the Chain instance the method was called on. The totalStores property should also be updated accordingly.

// The second method, closeStore, should take a single string as an argument. It should check to see if there is an instance of a Franchise with a city property that matches the input string in the locations array on the instance of Chain the method was called on. If so, it should remove the instance from the locations array, update the totalStores property and display the string 'name closed the store in city!' If not, log the string 'name doesn't have a store in city.'

// initiatlize the class Chain
class Chain {
  // add code here
  // declare properties: name: string, totalStores: number, locations: array
  name;
  totalStores;
  locations;

  // declare constructor function that takes name as arg
  constructor(name) {
    // initialize name property with name arg
    this.name = name;
    // initialize totalStores property to 0
    this.totalStores = 0;
    // initialize locations property to empty array
    this.locations = [];
  }
}

// add openStore method to Chain prototype that takes owner and city args
Chain.prototype.openStore = function (owner, city) {
  // create new Franchise instance with owner and city args in newFranchise variable
  const newFranchise = new Franchise(owner, city);
  // add newFranchise instance to locations array
  this.locations.push(newFranchise);
  // increment totalStores
  this.totalStores++;
};

// add closeStore method to Chain prototype that takes city as arg
Chain.prototype.closeStore = function (city) {
  // declare variable to track whether Franchise was removed
  let removedFranchise = false;
  // iterate over locations array with for loop
  for (let i = 0; i < this.locations.length; i++) {
    // check if location at index matches city argument
    if (this.locations[i].city === city) {
      // if yes, remove from array
      this.locations.splice(i, 1);
      // decrement totalStores
      this.totalStores--;
      // log desired string
      console.log(`${this.name} closed the store in ${city}!`);
      // set removedFranchise to true
      removedFranchise = true;
      // exit loop
      break;
    }
  }
  // check if Franchise not removed
  if (!removedFranchise) {
    // log desired string
    console.log(`${this.name} doesn't have a store in ${city}.`);
  }
};

// create Franchise Class
class Franchise {
  //add code here
  // declare owner: string, and city: string properties
  owner;
  city;

  // declare constructor function with owner and city as args
  constructor(owner, city) {
    // initialize owner property to owner arg
    this.owner = owner;
    // iniitalize city property to city arg
    this.city = city;
  }
}

const buenoBell = new Chain('Bueno Bell');

// Uncomment these lines to check your work!
buenoBell.openStore('Will', 'Phoenix');
buenoBell.openStore('Kyle', 'Austin');
buenoBell.openStore('Allison', 'Wichita');

console.log(buenoBell['locations']);

console.log(buenoBell.totalStores); //should log 3
console.log(buenoBell.locations[0].owner); //should log 'Will'

buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'
