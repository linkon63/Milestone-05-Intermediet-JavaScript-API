//25-6 new keyword, class and object difference

class Person {
    constructor(firstName, lastName, salary) {
        this.fName = firstName;
        this.lName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', '1', 5000);
console.log(heroPerson);
const heroPerson1 = new Person('Hero', '2', 2000);
console.log(heroPerson1);
const heroPerson2 = new Person('Hero', '3', 1000);
console.log(heroPerson2);

//old way they use function to make class like this
function PersonFn(firstName, lastName, salary) {
    this.fName = firstName;
    this.lName = lastName;
    this.salary = salary;
}
const functionClass = new Person('hello','im function', 10);
console.log(functionClass);