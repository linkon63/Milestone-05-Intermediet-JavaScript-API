//25-2 object method property review
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

console.log("Object Calling", persion);
persion.fullName();
console.log(persion.chargeBill(10));
//console.log("Method Calling fullName:", persion.fullName[0]);