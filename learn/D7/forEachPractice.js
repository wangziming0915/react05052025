function forEachPractice() {
  const people = [
    { name: 'John', age: 25 },  
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 35 }
  ];

  people.forEach((person1) => {
    console.log(`Name: ${person1.name}, Age: ${person1.age}`);
  });
  // Name: John, Age: 25
  // Name: Jane, Age: 30
  // Name: Jack, Age: 35

  // Exercise 1: Custom forEach
  Array.prototype.myForEach = function() {
    for (let i = 0; i < this.length; i++) {
      console.log(this[i]);
    }
  };

  [10, 20, 30].myForEach(); // 10 20 30
}

// export default forEachPractice;
module.exports = forEachPractice