// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  if (typeof str !== 'string') {
    return false;
  }

  // Use parseFloat to attempt to convert the string to a number.
  // parseFloat will parse as much of the string as possible until it hits a non-numeric character.
  const parsedValue = parseFloat(str);

  // Check if the parsed value is NOT NaN (meaning the parsing was successful)
  // AND if the original string (after trimming whitespace) matches the string representation
  // of the parsed value. This second check prevents strings like "123a" from returning true.
  // Also handle empty string case explicitly as parseFloat('') is NaN.
  if (str.trim() === '') {
      return false; // An empty string is not considered a number
  }

  return !isNaN(parsedValue) && parsedValue.toString() === str.trim();
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let sum = 0;
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  if(count === 0) {
    return 0;
  }
  return sum / count;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if(!typeof people === 'array') {
    return "Type Error: Expected an array";
  }
  let sum = 0;
  let count = 0;
  for(let i = 0; i < people.length; i++) {
    if(typeof people[i].age === 'number') {
      sum += people[i].age;
      count++;
    }
  }
  if(count === 0) {
    return 0;
  }
  return sum / count;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  if(!typeof people === 'array') {
    return "Type Error: Expected an array";
  }
  let sum = 0;
  let count = 0;
  for(let i = 0; i < people.length; i++) {
    if(typeof people[i].age === 'number' && people[i].job === job) {
      sum += people[i].age;
      count++;
    }
  }
  if(count === 0) {
    return 0;
  }
  return sum / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];

  if(arr.length === 0) {
    return 0;
  }
  // Initialize a variable 'max' with the first element of the array
  let max = arr[0];

  // Iterate through the rest of the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Compare the current element with the current maximum
    if (arr[i] > max) {
      // If the current element is greater, update the maximum
      max = arr[i];
    }
  }

  // Return the final maximum value found
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  if (typeof str !== 'string' || str.length === 0) {
    // Return an empty string or null, depending on desired behavior for invalid input
    return "";
  }

  // Split the string into an array of words.
  // Using a regular expression to split by spaces and punctuation
  const words = str.split(" "); // \W+ matches one or more non-word characters

  // Initialize the longest word variable.
  // Start with an empty string or the first word.
  // Using an empty string handles cases with no words after splitting (e.g., input is just punctuation).
  let longestWord = "";

  // Iterate through the array of words
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    // Compare the length of the current word with the length of the longest word found so far
    if (currentWord.length > longestWord.length) {
      // If the current word is longer, update the longest word
      longestWord = currentWord;
    }
  }

  // Return the longest word found
  return longestWord;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  const evenNumbers = [];

  // Handle edge case: if the input is not an array or is empty
  if (!Array.isArray(arr) || arr.length === 0) {
    // Return an empty array for invalid or empty input
    return evenNumbers;
  }

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    // Check if the current element is a number and is even
    // Use Number.isInteger to ensure it's an integer before checking for evenness
    if (Number.isInteger(currentNumber) && currentNumber % 2 === 0) {
      // If it's an even number, add it to the evenNumbers array
      evenNumbers.push(currentNumber);
    }
  }

  // Return the new array containing only the even numbers
  return evenNumbers;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  const sortedArray = [...num]; // Using spread syntax for a shallow copy

  // Get the length of the array
  const n = sortedArray.length;

  // Implement the Bubble Sort algorithm
  // The outer loop controls the number of passes
  for (let i = 0; i < n - 1; i++) {
    // The inner loop performs the comparisons and swaps
    // The last i elements are already in place after each pass
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (sortedArray[j] > sortedArray[j + 1]) {
        // If the element on the left is greater than the element on the right, swap them
        const temp = sortedArray[j]; // Store the left element temporarily
        sortedArray[j] = sortedArray[j + 1]; // Replace the left element with the right element
        sortedArray[j + 1] = temp; // Replace the right element with the stored left element
      }
    }
  }

  // Return the new array with the elements in sorted order
  return sortedArray;
}

export function bubbleSortArr2(arr) {
  // Same as above but this time returns the original array reference sorted.
  const n = arr.length;

  // Implement the Bubble Sort algorithm
  // The outer loop controls the number of passes
  for (let i = 0; i < n - 1; i++) {
    // The inner loop performs the comparisons and swaps
    // The last i elements are already in place after each pass
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // If the element on the left is greater than the element on the right, swap them
        const temp = arr[j]; // Store the left element temporarily
        arr[j] = arr[j + 1]; // Replace the left element with the right element
        arr[j + 1] = temp; // Replace the right element with the stored left element
      }
    }
  }

  // Return the original array reference, which is now sorted
  return arr;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  const newArray = [];

  // Handle edge case: if the input is not an array
  if (!Array.isArray(arr)) {
    // Return an empty array for invalid input
    console.error("Input must be an array.");
    return newArray;
  }

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    // Check the type of the current element
    const elementType = typeof currentElement;

    // If the element's type is NOT the typeToRemove, add it to the new array
    if (elementType !== typeToRemove) {
      newArray.push(currentElement);
    }
  }

  // Return the new array containing elements without the specified type
  return newArray;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  const changedNumbers = [];

  // Iterate through the input array of numbers
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // Ensure the current element is a number before performing operations
    if (typeof currentNum === 'number') {
      let newNum;
      // Apply the specified operator
      if (operator === '+') {
        newNum = currentNum + amount;
      } else if (operator === '-') {
        newNum = currentNum - amount;
      } else if (operator === '*') {
        newNum = currentNum * amount;
      } else if (operator === '/') {
        // Handle division by zero if necessary, depending on desired behavior
        if (amount === 0) {
              console.warn(`Division by zero attempted for element at index ${i}. Skipping or handling as needed.`);
              // Option 1: Skip this element
              // continue;
              // Option 2: Set to Infinity or -Infinity
              newNum = currentNum / amount; // This will result in Infinity, -Infinity, or NaN
        } else {
              newNum = currentNum / amount;
        }
      }
      changedNumbers.push(newNum);
    } else {
      // If an element is not a number, you might skip it,
      // add it as is, or handle it differently.
      // Here, we'll skip non-numeric elements.
      console.warn(`Skipping non-numeric element at index ${i}:`, currentNum);
    }
  }

  return changedNumbers;
  }


export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  const newArray = [];

  // Handle edge case: if the input is not an array
  if (!Array.isArray(nums)) {
    console.error("Input 'nums' must be an array.");
    return newArray; // Return empty array for invalid input
  }

  // Iterate through the input array
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // Check if the current number is NOT equal to the number to remove
    // Using strict inequality (!==) to avoid type coercion issues
    if (currentNum !== num) {
      // If it's not the number to remove, add it to the new array
      newArray.push(currentNum);
    }
  }

  // Return the new array containing elements without the specified number
  return newArray;
}
