const getRemainder = (num1, num2) => {
  // use modulus op to return remainder
  // needs to always check numbers for bigger one
  if (num1 > num2) {
    return num1 % num2;
  } else {
    return num2 % num1;
  }
};

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0
