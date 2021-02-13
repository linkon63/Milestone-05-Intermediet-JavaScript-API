//23-9 Array slice, splice, array join elements
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const partArray = array.slice(2,5); //index count kore array theke alada korbe
console.log("main array",array);
console.log("Array part by slice" , partArray);

console.log("original array:", array);
const arraySplice = array.splice(2,5); //index theke koto gula value sorabe
console.log("arraySplice", arraySplice);
console.log("afterSplice:",array);

const array2 = [1, 2 ,6 ,48 ,46 ,45 ,654, 64868 ,64 ,648 ,645 ,64, 4685 ,648];

const partArray2 = array2.splice(2,5,1,2,3,4,5); //injecting main array  1 2 3 4 5
console.log("part2array",partArray2);

console.log("main array 2,:" ,array2);

const together = array2.join("");
console.log(together);
console.log(parseInt(together));