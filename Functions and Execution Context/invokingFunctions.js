let calls = "";

// output needs to be JerryKramerGeorgeElaine
const jerry = (str) => {
  //concat str with "Jerry"
  str += "Jerry";
  //return invoc of kramer and pass str
  return kramer(str);
};

const george = (str) => {
  // concat str with "George"
  str += "George";
  // return invoc of elaine and pass str
  return elaine(str);
};

const elaine = (str) => {
  // concat str with "Elaine"
  str += "Elaine";
  // return str
  return str;
};

const kramer = (str) => {
  // concat str with "Kramer"
  str += "Kramer";
  // return in invoc of george
  return george(str);
};

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
