//22-8-1 Inheritance, extends class, super, class method
class Values{
    constructor(){
        this.value1 = 10;
        this.value2 = 20;
    }
}

class Add extends Values{
    constructor(){
        super();
        this.defultValue = 0;
    }
    getValue(){
       return this.result = this.value1 + this.value2 + this.defultValue;
    }
}
const output =new Add();
console.log(output.getValue());