const disemvowel = (str) => {
  // delcare a result var to store output
  let rslt = "";
  // iterate thru str with FOR loop
  for (let i = 0; i < str.length; i++) {
    // assign str at element to variable char
    // necessary to later convert to lowercase
    let char = str[i];
    // check if letter is a not vowel - need a long chain of && and !==
    // needs to check both upper and lowercase
    // using the .toLowerCase() method
    if (
      char.toLowerCase() !== "a" &&
      char.toLowerCase() !== "e" &&
      char.toLowerCase() !== "i" &&
      char.toLowerCase() !== "o" &&
      char.toLowerCase() !== "u"
    ) {
      // add characters that are not vowels to rslt
      rslt += char;
    }
  }
  // return ouput (rslt)
  return rslt;
};

// Uncomment these to check your work!
console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'
