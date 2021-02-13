//22-8-1 Inheritance, extends class, super, class method
// class Values{
//     constructor(){
//         this.value1 = 10;
//         this.value2 = 20;
//     }
// }

// class Add extends Values{
//     constructor(){
//         super();
//         this.defultValue = 0;
//     }
//     getValue(){
//        return this.result = this.value1 + this.value2 + this.defultValue;
//     }
// }
// const output =new Add();
// console.log(output.getValue());

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(" ");
        for (let k = 0; k < (i * 2); k++) {
            console.log("*");
        }
        console.log("\n");
    }
}