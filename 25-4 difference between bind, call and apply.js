//25-2 object method property review
const persion = {
        firstName: 'Abraham',
        lastName: 'Linkon',
        salary: 2000,
        fullName: function name() {
            //this.fullName = this.firstName + this.lastName; //Not Work
            console.log(this.firstName, this.lastName);
        },
        chargeBill: function (amount) {
            this.salary = this.salary - amount;
            return this.salary;
        },
        vat: function (vat, cost) {
            this.vatCut = this.salary - vat - cost;
            return this.vatCut;
        }
    }
    
    const newMe = {
        firstName: 'lin',
        lastName: 'Kon',
        salary: 1500
    }
    const friend = {
        firstName: 'ant',
        last: 'hor',
        salary: 1000
    }
    console.log("Object Calling", persion);
    persion.fullName();
    console.log(persion.chargeBill(10));
    console.log("Method Calling fullName:", persion.fullName[0]);
    // bind function calling
    const newMeBill = persion.chargeBill.bind(newMe);
    console.log('NewMe Bill Chanrge from persion:',newMeBill(100));
    const friendBill = persion.chargeBill.bind(friend);
    console.log('firend Bill Chanrge from persion:',friendBill(100));
    call 
    const newMeCallBill = persion.chargeBill.call(newMe, 10);
    console.log("Method take from function Call:", newMe.salary);
    const newBillVat = persion.vat.call(newMe,100,100);
    console.log("Pass argument by Call function: ",newBillVat);
    Apply
    const applyFriend = persion.vat.apply(friend,[100,100]);
    console.log(applyFriend);
    