const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const values = Object.values(people);
  const sum = values.reduce((acc, person) => acc + person.age, 0);
  return sum / values.length;
};

getAverageAge({
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
});
