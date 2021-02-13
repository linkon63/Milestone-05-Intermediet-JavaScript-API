//23-7 Scope, block scope, access outer scope variable

function add(num1, num2) {
    const result = num1 + num2;
    if (result > 9) {
        let mood = "happy Now"; //you can try by const also give same result without ver;
        console.log(mood);
    }
    // let mood2 = "Hello Mood"
    //console.log(mood) // error cz mood in define in condition block can't access from here
    return result;
}
const rst = add(5, 9);
console.log(rst);
//console.log(result); //want to access variable from function will give error cz variable scope
 
console.log(name); //undefine cz var goes to parent catagories but without values of him
var name = "linkon";