//22-5 Arrow function, multiple parameter, function body

//One Way
function doubleIt(number){
    return number * 2;
}
//2nd Way
const doubleIt = function muFun(num){
    return num*2;
}
//3rd Way arrow function
const doubleIt = num => num*2; //1st parameter name => return value;
const add = (a,b) => a+b;
const addValue = add(2,3)
console.log(addValue);
const total = doubleIt(10);
console.log(total);
//give me five arrow function without name or parameters

const give5 = () => 5;
const getGive = give5();
console.log("arrow function give 5: ",getGive);
// multiline function
const doMath = (x,y) => {
   const add = x + y;
   const diff = x - y;
   const result = add * diff;
   return result;
}
const mathTotal = doMath(10,5);
console.log("do math: ",mathTotal);