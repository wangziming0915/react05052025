//filter
let arr = [1, 2, 4, 5, 6, 9, 10, 15];

//filter takes a function as an argument
let r = arr.filter(function (x) {
    return x % 2 !== 0;
});

//arrow function
let r1 = arr.filter((x) => x % 2 !== 0);


console.log(r); // [1, 5, 9, 15]
console.log(r1); // [1, 5, 9, 15]