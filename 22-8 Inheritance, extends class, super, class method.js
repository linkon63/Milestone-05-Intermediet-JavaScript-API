//22-8 Inheritance, extends class, super, class method

class Parent{
    constructor(){
        this.fatherName = "FatherOf Rahim Karim";
    }
}

class Child extends Parent{ //inherite Parent Class by extend
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.fatherName+ " " + this.name;
    }
}

const childClass =new Child();  
const childClass2 = new Child('Rohim');
console.log(childClass.getFullName()); //method calling
console.log(childClass2);