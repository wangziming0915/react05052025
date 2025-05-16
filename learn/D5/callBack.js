// Example of a simple callback function in JavaScript

// A function that takes another function as a parameter (callback)
function processUserInput(callback) {
    const name = "Dylan";
    callback(name);
}

// A callback function
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

// Using the processUserInput function with the greetUser callback
processUserInput(greetUser);