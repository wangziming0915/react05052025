// reinvent the wheel: prototype methods

export function myMap(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
    // Create a new array to store the results
    const newArray = [];

    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
      // Apply the callback function to each element
      // The callback receives the current element and its index
      const result = cb(arr[i], i, arr);
  
      // Push the result into the new array
      newArray.push(result);
    }
  
    // Return the new array
    return newArray;
  
}

export function myFilter(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  const filteredArray = [];

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function for each element
    // The callback receives the current element, its index, and the original array
    const shouldInclude = cb(arr[i], i, arr);

    // If the callback returns a truthy value, include the element in the new array
    if (shouldInclude) {
      filteredArray.push(arr[i]);
    }
  }

  // Return the new array containing only the filtered elements
  return filteredArray;
}

export function myConcat(arr1, arr2) {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
    // Create a new array to store the combined elements
    const newArray = [];

    // Add elements from the first array to the new array
    for (let i = 0; i < arr1.length; i++) {
      newArray.push(arr1[i]);
    }
  
    // Add elements from the second array to the new array
    for (let i = 0; i < arr2.length; i++) {
      newArray.push(arr2[i]);
    }
  
    // Return the new array containing elements from both input arrays
    return newArray;
}

export function myFind(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function for the current element
    // The callback receives the current element, its index, and the original array
    const conditionMet = cb(arr[i], i, arr);

    // If the callback returns a truthy value, return the current element immediately
    if (conditionMet) {
      return arr[i];
    }
  }

  // If the loop finishes without finding an element that satisfies the condition,
  // return undefined (which is the default return value if nothing else is returned)
  return undefined;
}

export function myEvery(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function for the current element
    // The callback receives the current element, its index, and the original array
    const conditionMet = cb(arr[i], i, arr);

    // If the callback returns a falsy value, return false immediately
    if (!conditionMet) {
      return false;
    }
    return true; // If all elements pass the test, return true
  }
}

export function mySome(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function for the current element
    // The callback receives the current element, its index, and the original array
    const conditionMet = cb(arr[i], i, arr);

    // If the callback returns a truthy value, return true immediately
    if (conditionMet) {
      return true;
    }
  }
}

export function myIncludes(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is equal to the value
    if (arr[i] === val) {
      return true; // Return true if found
    }
  }
}

export function myJoin(arr, separator) {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
    // Handle edge cases: empty array
    if (!arr || arr.length === 0) {
      return "";
    }
  
    // Handle edge case: array with one element
    if (arr.length === 1) {
      return String(arr[0]); // Convert to string just like native join
    }
  
    // Initialize the result string with the first element
    let result = String(arr[0]);
  
    // Iterate through the rest of the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Append the separator and the current element (converted to string)
      result += separator + String(arr[i]);
    }
  
    // Return the final joined string
    return result;
}

export function myPush(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  arr[arr.length] = val;

  // The push method typically returns the new length of the array.
  // However, the prompt asks to return the array itself.
  // If you wanted to return the new length, you would return arr.length;
  return arr;
}

export function myReverse1(arr) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  const reversedArray = [];

  // Iterate through the input array from the last element to the first
  for (let i = arr.length - 1; i >= 0; i--) {
    // Add the current element to the new array
    reversedArray.push(arr[i]);
  }

  // Return the new array with the elements in reversed order
  return reversedArray;
}

export function myReverse2(arr) {
  // Same as above but this time returns the original array reference reversed.
  const length = arr.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Calculate the index of the corresponding element from the end
    const endIndex = length - 1 - i;

    // Swap the elements at index i and endIndex
    const temp = arr[i]; // Store the element at the beginning
    arr[i] = arr[endIndex]; // Replace the beginning element with the end element
    arr[endIndex] = temp; // Replace the end element with the stored beginning element
  }

  // Return the original array reference, which is now reversed
  return arr;
}

// Challenges
export  function myReduce(arr, cb, initial) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
  let accumulator;
  let startIndex = 0;

  // Determine the initial value and starting index for iteration
  if (initial !== undefined) {
    // If an initial value is provided, use it as the starting accumulator
    accumulator = initial;
    startIndex = 0; // Start iterating from the first element
  } else {
    // If no initial value is provided, use the first element as the initial accumulator
    // and start iterating from the second element
    if (arr.length === 0) {
      // If no initial value and an empty array, throw an error (like native reduce)
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[0];
    startIndex = 1; // Start iterating from the second element
  }

  // Iterate through the array starting from the determined index
  for (let i = startIndex; i < arr.length; i++) {
    // Call the callback function
    // The callback receives the current accumulator, the current element,
    // the current index, and the original array
    accumulator = cb(accumulator, arr[i], i, arr);
  }

  // Return the final accumulated value
  return accumulator;
}

export function mySort(arr, cb) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
  const sortedArray = [...arr]; // Using spread syntax for a shallow copy

  // Implement a simple sorting algorithm (Bubble Sort)
  const n = sortedArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Use the callback function to compare adjacent elements
      // If the callback returns a positive value, swap the elements
      if (cb(sortedArray[j], sortedArray[j + 1]) > 0) {
        // Swap elements
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  // Return the new sorted array
  return sortedArray;
}

export function mySlice(arr, start, end) {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
  const slicedArray = [];

  // Determine the actual start and end indices, handling negative indices and out-of-bounds
  const arrayLength = arr.length;

  // Calculate the effective start index
  let effectiveStart = start === undefined ? 0 : start;
  if (effectiveStart < 0) {
    effectiveStart = Math.max(0, effectiveStart + arrayLength);
  } else {
    effectiveStart = Math.min(effectiveStart, arrayLength);
  }

  // Calculate the effective end index
  let effectiveEnd = end === undefined ? arrayLength : end;
  if (effectiveEnd < 0) {
    effectiveEnd = Math.max(0, effectiveEnd + arrayLength);
  } else {
    effectiveEnd = Math.min(effectiveEnd, arrayLength);
  }

  // Iterate from the effective start index up to (but not including) the effective end index
  for (let i = effectiveStart; i < effectiveEnd; i++) {
    // Add the element at the current index to the new array
    slicedArray.push(arr[i]);
  }

  // Return the new array containing the sliced elements
  return slicedArray;
}
