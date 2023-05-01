// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

// ADD CODE HERE

// input:
// output:

// declare function, censor, that accepts no arguments
function censor() {
  // create a variable, cachedPairs: object, and set as an empty object
  const cachedPairs = {};
  // return a function that accepts either two strings: string or one string: string
  return function (str1, str2) {
    // check if str2 exists
    if (str2) {
      // if two strings, store as a key value pair in cachedPairs
      cachedPairs[str1] = str2;
      // return out of loop
      return;
    }
    // if one string, modify the string with the key replaced with the value of the pair
    Object.keys(cachedPairs).forEach((key) => {
      str1 = str1.replaceAll(key, cachedPairs[key]);
    });
    // return the string
    return str1;
  };
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
