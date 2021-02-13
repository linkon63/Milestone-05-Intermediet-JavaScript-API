///23-4 double equal (==) vs triple equal (===), implicit conversion
const num = 2;
const str = '2';
if(num == str){ //true cz type of check kore na
    console.log('true');
}else{
    console.log('false');
}
if(num === str){ //false cz type of check kore
    console.log('true');
}else{
    console.log('false');
}