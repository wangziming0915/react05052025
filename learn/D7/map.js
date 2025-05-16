let f = function (x) {
    return x * x;
};

Array.prototype.myMap = function (f) {
    for (let i = 0; i < this.length; i++) {
        this[i] = f(this[i]);
    }
}
console.log([1, 2, 3, 4, 5].myMap(f)); // [1, 4, 9, 16, 25]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
for (let i=0; i<arr.length; i++) {
    result.push(f(arr[i]));
}
console.log(result); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//forEach
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result1 = [];
arr1.forEach((x) => {
    result1.push(x * x);
}); 
console.log(result1); // [1, 4, 9, 16, 25, 36, 49, 64, 81]


//Map
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let result2 = arr2.map((x) => x * x);
console.log(result2); // [1, 4, 9, 16, 25, 36, 49, 64, 81]