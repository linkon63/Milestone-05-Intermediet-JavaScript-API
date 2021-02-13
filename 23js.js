// 

// ///23-4 double equal (==) vs triple equal (===), implicit conversion
// const num = 2;
// const str = '2';
// if(num == str){ //true cz type of check kore na
//     console.log('true');
// }else{
//     console.log('false');
// }
// if(num === str){ //false cz type of check kore
//     console.log('true');
// }else{
//     console.log('false');
// }

//23-5 map, filter, find, smart way to run for loop

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// const sqrArr = [];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const sqrElement = element * element ;
//     sqrArr.push(sqrElement);
// }

// function sqre(element) {
//     return element*element;
// }
// // const sqrArr = sqre(5); //op-25

// const sqrArr = element=> element*element;
// const sqr = x =>x*x;

// const rst = arr.map(function (element) { //more parameter: elemenet index array
//     return element*element;
// })
// const arr = [2, 3, 4, 5, 6, 7, 8, 9];

// const rst = arr.map(element=> element*element)
//     console.log(rst);

// const biggerResult = arr.filter(x=> x>=8);
// console.log(biggerResult); //output hisabe array return kore filter use korle

// const biggerResult = arr.find(x=> x>=8);
// console.log(biggerResult); //value hisabe dibe

// //23-6 Apply map, filter, find on an array of objects
// //getting element of obj by for loop
// const student = [
//     {id: 1, name: "linkon"},
//     {id: 2, name: "anthor"},
//     {id:3, name: 'billal'}
// ];
// const arr= [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const name= element.name;
//     const result = arr.push(name);
// }
// console.log(arr);

// const nameStd = student.map(s=>s.name);
// console.log("output form map: ",nameStd);
// const ids = student.map(s=>s.id);
// console.log(ids);
// const biggar = student.filter(s=> s.id > 2);
// console.log(biggar);
// const biggarOne = student.find(x=> x.id > 1);
// console.log(biggarOne);

// //23-7 Scope, block scope, access outer scope variable

// function add(num1, num2) {
//     const result = num1 + num2;
//     if (result > 9) {
//         let mood = "happy Now"; //you can try by const also give same result without ver;
//         console.log(mood);
//     }
//     // let mood2 = "Hello Mood"
//     //console.log(mood) // error cz mood in define in condition block can't access from here
//     return result;
// }
// const rst = add(5, 9);
// console.log(rst);
// //console.log(result); //want to access variable from function will give error cz variable scope

// console.log(name); //undefine cz var goes to parent catagories but without values of him
// var name = "linkon";

// //23-8 Closure, encapsulation, private variable

// function stopWatch() {
//     let count = 0;
//     return function () {
//         count++
//         return count;
//     }
// }
// const clock = stopWatch();
// const clock2 = stopWatch();
// console.log(clock()); //1
// console.log(clock());//2
// console.log(clock2());//1
// console.log(clock());//3
// console.log(clock2());//2
// console.log(clock());//4
// console.log(clock());//5
// console.log(clock());//6
// console.log(clock2());//3
// console.log(clock());//7

// //23-9 Array slice, splice, array join elements
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const partArray = array.slice(2,5); //index count kore array theke alada korbe
// console.log("main array",array);
// console.log("Array part by slice" , partArray);

// console.log("original array:", array);
// const arraySplice = array.splice(2,5); //index theke koto gula value sorabe
// console.log("arraySplice", arraySplice);
// console.log("afterSplice:",array);

// const array2 = [1, 2 ,6 ,48 ,46 ,45 ,654, 64868 ,64 ,648 ,645 ,64, 4685 ,648];

// const partArray2 = array2.splice(2,5,1,2,3,4,5); //injecting main array  1 2 3 4 5
// console.log("part2array",partArray2);

// console.log("main array 2,:" ,array2);

// const together = array2.join("");
// console.log(together);
// console.log(parseInt(together));

// //23-10 break continue in a for loop

// const array = [1,2,3,5,6,4,96,165];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element > 3) {
//         break; // skiping bigger value from 3
//     }console.log(element);
// }

// const array2 = [1,2,-3,5,-6,-4,96,-165];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element < 0 ){
//         continue; //skiping negetive value
//     }console.log(element);
// }