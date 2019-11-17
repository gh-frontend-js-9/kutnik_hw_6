console.log("TASK 1.1")
let arrayNumber = [ 23, 5, 54, 85];
let sortArrayToMin = Math.min.apply(null, arrayNumber)
    console.log("min array : " + sortArrayToMin);

let sortArrayToMax = Math.max.apply(null, arrayNumber)
    console.log("max array : " + sortArrayToMax);

let sortArray = ["12", "123", "2", "567", "1", "17"]
console.log("sort : " + sortArray.sort());

let sum = arrayNumber.reduce(function(sum, current) {
    return sum + current;
});
console.log("sum elements : " + sum);

console.log("TASK 1.2")

function getFunction(red) {
    alert(`Круто ${red}`);
}
getFunction(function() {
    alert(`Здорово, второй скрипт загрузился`);
});

console.log("TASK 1.3")

let arr = [2, 3, 4, 5, 7, 8, 12, 14, 18, 21];
for (let i=0; i< arr.length; i++){
    if((arr[i]% 3==0) && (arr[i]% 7==0)){
        arr[i]='foobar';
    }
    else
        if((arr[i]%3)==0){
        arr[i]='foo';
    }
    else
        if((arr[i]%7)==0){
        arr[i]='bar';
    }
}
console.log(arr);

console.log("TASK 1.4")

let stringOne = prompt();
let stringTwo = prompt();
let constantaZero = 0;
for( let i = 0; i < stringOne.length; i++){
    for ( let q = 0; q < stringTwo.length; q++){
        if (stringOne[i] == stringTwo[q]){
            constantaZero++;
        }
    }
}
let percent = constantaZero / ( stringOne.length + stringTwo.length) * 100;
console.log("string one" + stringOne);
console.log("string two" + stringTwo);
console.log("percentage of identical letters " + percent + " %");