//23-8 Closure, encapsulation, private variable

function stopWatch() {
    let count = 0;
    return function () {
        count++
        return count;
    }
}
const clock = stopWatch();
const clock2 = stopWatch();
console.log(clock()); //1
console.log(clock());//2
console.log(clock2());//1
console.log(clock());//3
console.log(clock2());//2
console.log(clock());//4
console.log(clock());//5
console.log(clock());//6
console.log(clock2());//3
console.log(clock());//7