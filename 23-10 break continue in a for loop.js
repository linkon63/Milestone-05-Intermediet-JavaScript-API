//23-10 break continue in a for loop

const array = [1,2,3,5,6,4,96,165];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 3) {
        break; // skiping bigger value from 3
    }console.log(element);
}

const array2 = [1,2,-3,5,-6,-4,96,-165];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < 0 ){
        continue; //skiping negetive value
    }console.log(element);
}