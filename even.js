// In this kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false. Numbers may be positive or negative, intergers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

// We want to check if the number is even or not
// The return value is a boolean
// The floats that has a decimal part that are not zero are considered uneven

// Reviewed
function testEven(n) {
  if (Number.isInteger(n) && n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(testEven(1));
