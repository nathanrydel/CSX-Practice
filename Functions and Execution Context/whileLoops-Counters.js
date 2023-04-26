const imAboutToExplodeWithExcitement = (countdownLength) => {
  // ADD CODE HERE
  // use a while loop to count backwards from n
  while (countdownLength >= 0) {
    // check if n strictly equals 5
    if (countdownLength === 5) {
      // print required string to console
      console.log("Oh wow, I can't handle the anticipation!");
      // check if n strictly equals 3
    } else if (countdownLength === 3) {
      // print required string to console
      console.log("I'm about to explode with excitement!");
      // check if countdown finished
    } else if (countdownLength === 0) {
      // print required string to console
      console.log('That was kind of a let down');
      // print n to console as base case
    } else {
      console.log(countdownLength);
    }
    countdownLength--;
  }
};

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
