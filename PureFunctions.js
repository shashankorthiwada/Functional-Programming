//Write a Function birthday to take person's name an age in ana object and increase age
const birthday = (name, age) => {
  const person = { name: name, age: age };
  const newPerson = { ...person, age: person.age + 5 };
  console.log(person, newPerson);
};

birthday("Shashank", 21);
birthday("Shashank", 25);
birthday("Shashank", 21);
