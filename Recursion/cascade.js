// Challenge: cascade
// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!

/* cascade(12345) should print

12345
1234
123
12
1
12
123
1234
12345
*/

function cascade(number) {
  // base case: check if number < 1, return out to stop recursion
  if (number < 1) {
    return;
  }
  // log current number to console
  console.log(number);

  if (number < 10) {
    return;
  }
  // recursive case: If the number is greater than or equal to 10, recursively call cascade and divide the number by 10 and round down to nearest integer.
  if (number >= 10) {
    cascade(Math.floor(number / 10));
  }
  // log current number after recursive call
  console.log(number);
}

// Uncomment to test your work!
cascade(111); // should print
/*
111
11
1
11
111
*/

cascade(12345); // should log
/*
12345
1234
123
12
1
12
123
1234
12345
*/
