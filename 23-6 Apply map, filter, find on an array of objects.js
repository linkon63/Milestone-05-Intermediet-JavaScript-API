//23-6 Apply map, filter, find on an array of objects
//getting element of obj by for loop
const student = [
    {id: 1, name: "linkon"},
    {id: 2, name: "anthor"},
    {id:3, name: 'billal'}
];
const arr= [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const name= element.name;
    const result = arr.push(name);
}
console.log(arr);

const nameStd = student.map(s=>s.name);
console.log("output form map: ",nameStd);
const ids = student.map(s=>s.id);
console.log(ids);
const biggar = student.filter(s=> s.id > 2);
console.log(biggar);
const biggarOne = student.find(x=> x.id > 1);
console.log(biggarOne);