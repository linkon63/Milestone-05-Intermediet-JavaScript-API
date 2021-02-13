//23-3 Null Vs Undefined, different ways you will get undefined
//undefined Error list
let name;

function add(num1, num2) {
    console.log(num1 + num2);
    return;
}

function add2(num, num2) { //num2=0 default value
    console.log(num2);
}
const result = add2(2);
console.log(result);

const obj = {
    name: 'Linkon',
    add: 'Bnagladesh',
    phone: 012
};
console.log(obj.gf); ////finding obj property without set it

let value = undefined;
console.log(value);

const arr = [1, 2, 3, 1];
console.log(arr[4]);