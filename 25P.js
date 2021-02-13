// //25-2 object method property review
// const persion = {
//     firstName: 'Abraham',
//     lastName: 'Linkon',
//     salary: 2000,
//     fullName: function name() {
//         //this.fullName = this.firstName + this.lastName; //Not Work
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function (amount) {
//         this.salary = this.salary - amount;
//         return this.salary;
//     },
//     vat: function (vat, cost) {
//         this.vatCut = this.salary - vat - cost;
//         return this.vatCut;
//     }

// }


// const newMe = {
//     firstName: 'lin',
//     lastName: 'Kon',
//     salary: 1500
// }
// const friend = {
//     firstName: 'ant',
//     last: 'hor',
//     salary: 1000
// }
// console.log("Object Calling", persion);
// persion.fullName();
// console.log(persion.chargeBill(10));
// console.log("Method Calling fullName:", persion.fullName[0]);

// / bind function calling
// const newMeBill = persion.chargeBill.bind(newMe);
// console.log('NewMe Bill Chanrge from persion:',newMeBill(100));

// const friendBill = persion.chargeBill.bind(friend);
// console.log('firend Bill Chanrge from persion:',friendBill(100));

// call 

// const newMeCallBill = persion.chargeBill.call(newMe, 10);
// console.log("Method take from function Call:", newMe.salary);
// const newBillVat = persion.vat.call(newMe,100,100);
// console.log("Pass argument by Call function: ",newBillVat);

// Apply

// const applyFriend = persion.vat.apply(friend,[100,100]);
// console.log(applyFriend);

//25-5 window, global variable, global scope

// var name = 'Kuddus'; //global Variable 

// function addNumber(num1, num2) { //global function :) 

//     console.log("Inside of function",name) // global variable accessing from function

//     var result = num1 + num2; //function local variable ** without var global variable not recomonded window.result gloabal variable not recomonded
//     function doubleFUnction(num) { // local function of global function
//         const doubleTwo = num * 2;
//         return doubleTwo;
//     }
//     return result;
// }
// console.log("Outside of function: ", name);
// console.log(addNumber(10, 15));

//25-6 new keyword, class and object difference

// class Person {
//     constructor(firstName, lastName, salary) {
//         this.fName = firstName;
//         this.lName = lastName;
//         this.salary = salary;
//     }
// }
// const heroPerson = new Person('Hero', '1', 5000);
// console.log(heroPerson);
// const heroPerson1 = new Person('Hero', '2', 2000);
// console.log(heroPerson1);
// const heroPerson2 = new Person('Hero', '3', 1000);
// console.log(heroPerson2);

// //old way they use function to make class like this
// function PersonFn(firstName, lastName, salary) {
//     this.fName = firstName;
//     this.lName = lastName;
//     this.salary = salary;
// }
// const functionClass = new Person('hello','im function', 10);
// console.log(functionClass)

//25-7 how to understand the this keyword

//25-9 Asynchronous Javascript setTimeout, setInterval

// setInterval(() => {
//         console.log("Doing Something"); 
// }, 3000);

// console.log("1000");
// console.log("2000");
// console.log('3000');
// setTimeout(() => {
//     console.log("setTimeOut",'5000');
// })
// console.log("4000");



