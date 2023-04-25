// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

// ADD CODE HERE

// input: object, callback
// output: array of truthy callbacks

// create function expression goodKeys with object and callback params
const goodKeys = (obj, callback) => {
  // declare truthy result array
  const truthyArr = [];
  // iterate thru obj  using Object.keys()
  for (const key of Object.keys(obj)) {
    // and apply callback to value of obj to check truthyness
    if (callback(obj[key])) {
      // if yes, push to truthyArr
      truthyArr.push(key);
    }
  }
  // return truthyArr
  return truthyArr;
};

// Uncomment these to check your work!
const sunny = {
  mac: 'priest',
  dennis: 'calculator',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
