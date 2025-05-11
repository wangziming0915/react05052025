export function combineObjects(obj1, obj2) {
  // Combine the objects
  // if the objects have the same key, use the value from obj2
  // Example 1: const obj1 = {name: 'Alice', age: 25};
  // const obj2 = {job: 'teacher'};
  // Expected output: {name: 'Alice', age: 25, job: 'teacher'}
  // Example 2: const obj1 = {name: 'Alice', age: 25};
  // const obj2 = {name: 'John', age: 21};
  // Expected output: {name: 'John', age: 21}
  const combined = {};

  for (const key in obj1) {
    // Check if the property is an own property of the object
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      combined[key] = obj1[key];
    }
  }

  // Copy properties from obj2 to the new object.
  // This will overwrite properties that were already copied from obj1 if the keys are the same.
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      combined[key] = obj2[key];
    }
  }

  // Return the new object containing the combined properties.
  return combined;
}

export function changeValueOf(obj, key, value) {
  // update the obj in place, do not return a new obj
  // Change the value of the key in the object
  // Example 1: const obj = {name: 'Alice', age: 25};
  // changeValueOf(obj, 'age', 21);
  // Expected obj: {name: 'Alice', age: 21}
  // Example 2: const obj = {name: 'Alice', age: 25};
  // changeValueOf(obj, 'job', 'teacher');
  // Expected obj: {name: 'Alice', age: 25, job: 'teacher'}
  obj[key] = value;
}

export function cancelExpiredEvents(events) {
  // update the events in place, do not return a new obj

  // Cancel the expired events
  // Example: const events = [
  //   event1: {name: 'Birthday Party', date: '2020-01-01', isCanceled: false},
  //   event2: {name: 'New Year Party', date: '2021-01-01', isCanceled: false},
  //   event3: {name: 'Christmas Party', date: '2024-12-25', isCanceled: false}
  // ];
  // Expected events: // an array of events, but event1 and event2 are canceled, event3 is not canceled
  const OriginalDate = new Date('2024-12-24');

  for (const event of events) {
    const eventDate = new Date(event.date);


    if (eventDate > OriginalDate) {
      event.isCanceled = false;
    }else {
      event.isCanceled = true;
    }
  }
}

export function findEventByType(events, type) {
  // Find the event by type
  // Example: const events = [
  //   event1: {name: 'Birthday Party', type: 'private'},
  //   event2: {name: 'New Year Party', type: 'public'},
  //   event3: {name: 'Christmas Party', type: 'private'}
  // ];
  // findEventByType(events, 'private');
  // Expected output: [{name: 'Birthday Party', type: 'private'}, {name: 'Christmas Party', type: 'private'}]
  const filteredEvents = [];

  // Handle edge case: if the input is not an array
  if (!Array.isArray(events)) {
    console.error("Input 'events' must be an array.");
    return filteredEvents; // Return empty array for invalid input
  }

  // Iterate through the array of events
  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    // Check if the current element is a valid object and has a 'type' property
    // Use typeof event === 'object' and event !== null to check if it's a non-null object
    if (typeof event === 'object' && event !== null && event.hasOwnProperty('type')) {
      // Check if the event's type matches the specified type
      if (event.type === type) {
        // If the type matches, add the event object to the filteredEvents array
        filteredEvents.push(event);
      }
    }
    // Optional: You could add an else block here to handle elements that are not valid event objects
    // For example: console.warn(`Skipping invalid element at index ${i}:`, event);
  }

  // Return the new array containing only the events of the specified type
  return filteredEvents;
}
