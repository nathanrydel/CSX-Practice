// Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

// Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

// The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

// The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

// The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.

function Inventory(item, price) {
  // add code here
  // use helper function, createItemObject, to create an object with key set to item
  // and have the evaluated result of invoking createItemObject on price be value
  this[item] = createItemObject(price);
}

// declare a method, addItem, that takes item: string and price: number on the proto of Inventory
Inventory.prototype.addItem = function (item, price) {
  // check if the proto object has item as a key
  if (this.hasOwnProperty(item)) {
    // if so, increment item quantity and set price to input price
    this[item].quantity++;
    this[item].price = price;
  } else {
    // if not found, create the item, using createItemObject and set the price
    this[item] = createItemObject(price);
  }
};

// declare a method, deleteItem, that takes item: string on the proto of Inventory
Inventory.prototype.deleteItem = function (item) {
  // check if the prototypal object has the item as a key
  if (this.hasOwnProperty(item)) {
    // check the quantity of the item
    if (this[item].quantity > 0) {
      // if truthy, decrement quantity and return desired string
      this[item].quantity--;
      return 'Deleted';
    } else {
      // if falsy, return desired string
      return 'Nothing to delete';
    }
    // if item doesn't exist, return Item is not in inventory
  } else {
    return 'Item is not in inventory';
  }
};

// declare a method, checkItem, that takes an item: string that checks if the item exists on Inventory proto
Inventory.prototype.checkItem = function (item) {
  //check if prototypal object has item as a property
  if (this.hasOwnProperty(item)) {
    // if so, return item
    return this[item];
  } else {
    // if not, return desired string
    return 'Item is not in inventory';
  }
};

// declaring Helper function, createItemObject, that takes in price: number
function createItemObject(price) {
  // return an object with a property(key) price and value to input price
  // set quantity key to 1
  return {
    price: price,
    quantity: 1,
  };
}

const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3);
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'
