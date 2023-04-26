// Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

// When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

// updateHobbies('yoga', 2);
// // { yoga: 2, baking: 0, piano: 0 }

// updateHobbies('baking', 3);
// // { yoga: 2, baking: 3, piano: 0 }

// updateHobbies();
// // 'tracker has been reset!'

function hobbyTracker(hobbies) {}

// Uncomment the code below to check your code:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
