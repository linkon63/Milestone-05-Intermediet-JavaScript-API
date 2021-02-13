// 22-7 Class, constructor, create object from class
class phone{
        constructor(pID,pName,pColor,pPrice){
            this.phoneID = pID;
            this. phoneName = pName;
            this.phoneColor = pColor;
            this.phonePrice = pPrice;
            this.comapany = "Califonia"
        }
    }
    const phone1 = new phone(1,'iPohne', 'Black', 10.000);
    const phone2 = new phone(2, 'Xiomi', 'Red', '5.000');
    console.log("Phone-One: ", phone1); //accessing obj
    console.log("Phone-Two:", phone2.phoneName); //accessing obj property 
    