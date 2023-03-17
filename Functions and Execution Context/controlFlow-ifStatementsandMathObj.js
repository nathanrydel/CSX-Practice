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
