const gradeCalculator = (grade) => {
  // ADD CODE HERE
  // check if grade is greater than or equal to 90 and return "A"
  if (grade >= 90) {
    return 'A';
    // else if grade is greater than or equal to 80 and less than 90, return "B"
  } else if (grade >= 80 && grade < 90) {
    return 'B';
    // else if grade is greater than or equal to 70 and less than 80, return "C"
  } else if (grade >= 70 && grade < 80) {
    return 'C';
    // else if grade is greater than or equal to 60 and less than 70, return "D"
  } else if (grade >= 60 && grade < 70) {
    return 'D';
    // else return "F"
  } else {
    return 'F';
  }
};

// Uncomment the lines below to test your code
console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"

console.log(gradeCalculator(90));
