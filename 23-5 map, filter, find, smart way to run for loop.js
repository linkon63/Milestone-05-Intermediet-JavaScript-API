//23-5 map, filter, find, smart way to run for loop

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const sqrArr = [];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const sqrElement = element * element ;
    sqrArr.push(sqrElement);
}

function sqre(element) {
    return element*element;
}
// const sqrArr = sqre(5); //op-25

const sqrArr = element=> element*element;
const sqr = x =>x*x;

const rst = arr.map(function (element) { //more parameter: elemenet index array
    return element*element;
})
const arr = [2, 3, 4, 5, 6, 7, 8, 9];

const rst = arr.map(element=> element*element)
    console.log(rst);

const biggerResult = arr.filter(x=> x>=8);
console.log(biggerResult); //output hisabe array return kore filter use korle

const biggerResult = arr.find(x=> x>=8);
console.log(biggerResult); //value hisabe dibe