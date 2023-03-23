const holidays = (arr) => {
  // Do not use a variable to store your result
  // ADD CODE HERE
  // use a for loop to iterate through arr
  for (let i = 0; i < arr.length; i++) {
    // use conditional if to check if October in arr
    // if yes, return "Happy Halloween"
    if (arr[i] === "October") return "Happy Halloween";
  }
  // if not found, return "Have a great day!"
  return "Have a great day!";
};

// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"
