// Challenge: limitedInterval
// Write a function called limitedInterval that accepts as arguments in this order -

// callback function
// wait time in milliseconds
// limit time in milliseconds.
// limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.

// declare function limitedInterval, that accepts callback, wait: number, limit: number
function limitedInterval(callback, wait, limit) {
  // initialize a variable, interval, that calls callback every wait milliseconds
  // use setInterval(fn, time in ms)
  let interval = setInterval(callback, wait);
  // stop the interval with clearInterval after reaching limit
  // use setTimeout() and clearInterval
  setTimeout(() => clearInterval(interval), limit);
}

/* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
