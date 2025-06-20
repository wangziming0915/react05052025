import { add } from './util/math.js'; // ES6 module import
// const { add } = require('./util/math.js'); // CommonJS import

const os = require('os'); // Importing Node.js built-in module
//import  os from 'os'; // ES6 module import (not supported in all Node.js versions)

const path = require('path'); // Importing Node.js built-in module
// import path from 'path'; // ES6 module import (not supported in all Node.js versions)

const fs = require('fs'); // Importing Node.js built-in module
// import fs from 'fs'; // ES6 module import (not supported in all Node.js versions)

const {v4: uuidv4} = require('uuid'); // Importing UUID v4 generator
// import { v4 as uuidv4 } from 'uuid'; // ES6 module import

console.log(add(1, 2, 3)); // Outputs: 6
console.log("Hello, Node.js!");