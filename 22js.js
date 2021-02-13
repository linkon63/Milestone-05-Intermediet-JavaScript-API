// //22-2 Let, const, array declared with const, object declared with const

// const a = "Linkon";//not changes variable

// console.log(a);

// // let changeable value of variable
// //var data lic kore

//22-3 Function default parameter for not provided values

// function add(number1, number2){
//     return number1 + number2;
// } //NaN not a number

// //other way 
// function addTwo(num,numTwo){
//     if(numTwo == undefined){ // other way without if numTwo = numTwo || 0;
//         numTwo = 0;
//     }return num + numTwo;
// }

// function addThree(number1, number2 = 0){ ///es-6 model 
//     return number1 + number2;
// }
// const total = add(15,17);
// console.log(total);

// const totalTwo = addTwo(12);
// console.log(totalTwo);

//22-4 Template string, multiple line string

// const firstName = "John";
// const lastName = "Wicks";
// const fullName = firstName + ' ' + lastName + " is a Hero";

// const fullNameTemplate = `${firstName} ${lastName} is a good template ${20*20}`;
// console.log(fullName);
// console.log(fullNameTemplate);

// const multiLine = 'I love you \n'
// + 'not need you more \n';
// console.log(multiLine);
// const multiLine2 = `hello **** you are 
// are you okey
// want to be a programmer`
// console.log(multiLine2);

// //22-5 Arrow function, multiple parameter, function body

// //One Way
// // function doubleIt(number){
// //     return number * 2;
// // }
// //2nd Way
// // const doubleIt = function muFun(num){
// //     return num*2;
// // }
// //3rd Way arrow function
//  const doubleIt = num => num*2; //1st parameter name => return value;
//  const add = (a,b) => a+b;
//  const addValue = add(2,3)
//  console.log(addValue);
// const total = doubleIt(10);
// console.log(total);
// //give me five arrow function without name or parameters

// const give5 = () => 5;
// const getGive = give5();
// console.log("arrow function give 5: ",getGive);
// // multiline function
// const doMath = (x,y) => {
//     const add = x + y;
//     const diff = x - y;
//     const result = add * diff;
//     return result;
// }
// const mathTotal = doMath(10,5);
// console.log("do math: ",mathTotal);

// // 22-7 Class, constructor, create object from class

// class phone{
//     constructor(pID,pName,pColor,pPrice){
//         this.phoneID = pID;
//         this. phoneName = pName;
//         this.phoneColor = pColor;
//         this.phonePrice = pPrice;
//         this.comapany = "Califonia"
//     }
// }

// const phone1 = new phone(1,'iPohne', 'Black', 10.000);
// const phone2 = new phone(2, 'Xiomi', 'Red', '5.000');
// console.log("Phone-One: ", phone1); //accessing obj
// console.log("Phone-Two:", phone2.phoneName); //accessing obj property 

// //22-8 Inheritance, extends class, super, class method

// class Parent{
//     constructor(){
//         this.fatherName = "FatherOf Rahim Karim";
//     }
// }

// class Child extends Parent{ //inherite Parent Class by extend
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     getFullName(){
//         return this.fatherName+ " " + this.name;
//     }
// }

// const childClass =new Child();  
// const childClass2 = new Child('Rohim');
// console.log(childClass.getFullName()); //method calling
// console.log(childClass2);


// //22-9 Destructure, Object, array, destructure complex object

// const person = {name : "John", Phone: 017125063, Address: 'America', gf: 'Died', Profession:  "Actor", FirendsName: ['Rockey', 'Erick', 'Rickle', 'A', 'b', "V"]};

// const obj = person; //by variable accessing 
// // console.log("variable", obj);

// const {name, Phone} = obj; //obj veriable
// //console.log(name, Phone);
//         //play with array
// const {FirendsName} = obj;
// const [first , second, ...All] = FirendsName;
// console.log(first, second, All);
// //Nasted Obj:

// const complexObj = {
//     name: 'XYZ',
//     info :{
//         add: 'unknown',
//         leader: 'MP-',
//         phone: 10
//     }
// }

// const getComplexObj = complexObj.info;
// console.log("complexObj: ",getComplexObj);
// const {leader} = complexObj.info; //without variable destucturing obj property
// const{add} = getComplexObj; // with variable
// console.log(add);
// console.log(leader);



//
