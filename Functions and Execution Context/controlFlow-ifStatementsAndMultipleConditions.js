function greetings(hour) {
  // ADD CODE HERE
  // check the hour to determine greeting
  // if less than 12, return "Good Morning!"
  if (hour <= 11) {
    return 'Good Morning!';
    // else if greater than less than 15, return "Good Afternoon!"
  } else if (hour >= 12 && hour < 15) {
    return 'Good Afternoon!';
    // else return "Good Night!"
  } else {
    return 'Good Night!';
  }
}

// Uncomment these to check your work!
console.log(greetings(0)); // expected log 'Good Morning!'
console.log(greetings(8)); // expected log 'Good Morning!'
console.log(greetings(12)); // expected log 'Good Afternoon!'
console.log(greetings(14)); // expected log 'Good Afternoon!'
console.log(greetings(15)); // expected log 'Good Night!'
console.log(greetings(18)); // expected log 'Good Night!'
