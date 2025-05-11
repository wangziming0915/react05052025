export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof a !== 'number' || typeof b !== 'number') {
    // If either argument is not a number, throw an error.
    throw new Error('Both arguments must be numbers.');
  }

  // If the arguments are numbers, return their sum.
  return a + b;
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  let totalSum = 0;

  // Iterate through each argument passed to the function.
  for (const arg of args) {
    // Check if the current argument is a number.
    // The typeof operator returns 'number' for both integers and floating-point numbers.
    if (typeof arg !== 'number') {
      // If any argument is not a number, throw an error immediately.
      throw new Error('All arguments must be numbers.');
    }
    // If the argument is a number, add it to the total sum.
    totalSum += arg;
  }

  // After checking all arguments and confirming they are numbers, return the total sum.
  return totalSum;
}
