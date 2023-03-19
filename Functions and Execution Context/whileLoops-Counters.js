const imAboutToExplodeWithExcitement = (n) => {
  // ADD CODE HERE
  // use a while loop to count backwards from n
  while (n > 0) {
    // if n is 5 print "Oh wow, I can't handle the anticipation!"
    if (n === 5) {
      console.log("Oh wow, I can't handle the anticipation");
      // if n is 3 print "I'm about to explode with excitement!"
    } else if (n === 3) {
      console.log("I'm about to explode with excitement!");
      // print n
    } else {
      console.log(n);
      // decrement n
    }
    n--;
  }
  console.log('That was kind of a let down');
};

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
