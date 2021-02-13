

//22-9 Destructure, Object, array, destructure complex object

const person = {name : "John", Phone: 017125063, Address: 'America', gf: 'Died', Profession:  "Actor", FirendsName: ['Rockey', 'Erick', 'Rickle', 'A', 'b', "V"]};

const obj = person; //by variable accessing 
// console.log("variable", obj);

const {name, Phone} = obj; //obj veriable
//console.log(name, Phone);
        //play with array
const {FirendsName} = obj;
const [first , second, ...All] = FirendsName;
console.log(first, second, All);
//Nasted Obj:

const complexObj = {
    name: 'XYZ',
    info :{
        add: 'unknown',
        leader: 'MP-',
        phone: 10
    }
}

const getComplexObj = complexObj.info;
console.log("complexObj: ",getComplexObj);
const {leader} = complexObj.info; //without variable destucturing obj property
const{add} = getComplexObj; // with variable
console.log(add);
console.log(leader);