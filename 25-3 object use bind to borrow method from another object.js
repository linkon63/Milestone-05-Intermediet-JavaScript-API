//25-object use bind to borrow method from aother Object
const persion = {
    firstName: 'Abraham',
    lastName: 'Linkon',
    salary: 1500,
    fullName: function name() {
        //this.fullName = this.firstName + this.lastName; //Not Work
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const newMe = {
    firstName: 'lin',
    lastName: 'Kon',
    salary: 1500
}
const friend = {
    firstName: 'ant',
    last: 'hor',
    salary: 1000
}
console.log("Object Calling", persion);
persion.fullName();
console.log(persion.chargeBill(10));
//console.log("Method Calling fullName:", persion.fullName[0]);

/// bind function calling
const newMeBill = persion.chargeBill.bind(newMe);
console.log('NewMe Bill Chanrge from persion:',newMeBill(100));

const friendBill = persion.chargeBill.bind(friend);
console.log('firend Bill Chanrge from persion:',friendBill(100));