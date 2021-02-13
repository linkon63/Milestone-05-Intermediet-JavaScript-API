function add(number1, number2){
    return number1 + number2;
} //NaN not a number

//other way 
function addTwo(num,numTwo){
    if(numTwo == undefined){ // other way without if numTwo = numTwo || 0;
        numTwo = 0;
    }return num + numTwo;
}

function addThree(number1, number2 = 0){ ///es-6 model 
    return number1 + number2;
}
const total = add(15,17);
console.log(total);

const totalTwo = addTwo(12);
console.log(totalTwo);
