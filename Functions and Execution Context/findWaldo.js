// Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

const findWaldo = (obj) => {
  // iterate through obj
  for (let key in obj) {
    // check if key is "Waldo"
    if (key === "Waldo") {
      return obj[key];
    }
  }
  return "Where's Waldo?";
};

const DC = { Bruce: "Wayne", Harley: "Quinn" };
const supernatural = { Sam: "Winchester", Dean: "Winchester", Waldo: "unknown" };
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
