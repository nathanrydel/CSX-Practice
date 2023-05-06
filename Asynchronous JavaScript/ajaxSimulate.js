// Challenge: ajaxSimulate
// In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.

// The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

// Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

// Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?

// Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.

// initialize dataReceived variable
let dataReceived;

// declare function ajaxSimulate and pass in id: number and callback
function ajaxSimulate(id, callback) {
  // initialize variable database: array and set to ['Aaron', 'Barbara', 'Chris'];
  const database = ['Aaron', 'Barbara', 'Chris'];
  // set a timer that will pass element of database that matches id to callback function
  setTimeout(() => {
    callback(database[id]);
  }, 0);
  // set interval to 0ms
}

// declare function, storeData, takes data as input and assigns it to dataReceived
function storeData(data) {
  dataReceived = data;
  // log dataReceived here so that it is executed in correct order
  console.log(dataReceived);
}

// invoke ajaxSimulate(1, storeData);
ajaxSimulate(1, storeData);
