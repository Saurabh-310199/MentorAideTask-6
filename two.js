
let person = {};

person.name = "John";
person.age = 30;
person.city = "New York";
delete person.age;
person.job = "Engineer";
person.city = "San Francisco";
console.log(person);