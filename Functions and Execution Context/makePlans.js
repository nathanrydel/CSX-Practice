let friendsAvailable = true;

const makePlans = (name) => {
  // INSERT CODE HERE
  // return invoc of callFriend and pass friendsAvailable and name
  return callFriend(friendsAvailable, name);
};

const callFriend = (bool, name) => {
  // INSERT CODE HERE
  // assign bool from friendsAvailable
  if (bool) {
    // if bool true, return "Plans made with NAME this weekend"
    return `Plans made with ${name} this weekend`;
    // if bool false, return "Everyone is busy this weekend"
  } else {
    return "Everyone is busy this weekend";
  }
};

// Uncomment these to check your work!
console.log(makePlans("Mary")); // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")); //should return: "Everyone is busy this weekend."
