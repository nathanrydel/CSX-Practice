// Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

// Note: Due to the output being based off of a random factor, the tests provided below cannot determine if you have solved the prompt exactly. The test cases for this challenge check for the correct data types only.

function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  // check the position of player1 and see if it is greater than the position of player2
  // use the Math Absolute method to check if player1 - theMark is less than player2 - theMark
  if (Math.abs(player1 - theMark) < Math.abs(player2 - theMark)) {
    // return player1 is closer
    return 'Player 1 is closer';
  } else {
    return 'Player 2 is closer';
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));
console.log(closestToTheMark(75, 60));
