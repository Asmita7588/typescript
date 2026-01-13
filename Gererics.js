//problems with nongeneric
function getIt(arg) { return arg; } // will return only number
function getIt1(arg) { return arg; } // here ts dont know what it will return
//solution
function identity(arg) {
    return arg;
}
var output1 = identity("Asmita");
var output2 = identity(100);
var output3 = identity(true); // type inference
function add(arg) {
    return arg;
}
//Generic with array
function arrayEle(arr) {
    return arr[0];
}
console.log(arrayEle([1, 2, 3, 4]));
var userResponse = {
    status: 200,
    data: { name: "Asmita" }
};
function logLength(item) {
    console.log(item.length);
}
logLength("Hello");
logLength([1, 2, 3]);
//logLength(10); // Error: 
function reverseArray(items) {
    return items.reverse();
}
var reversedNums = reverseArray([1, 2, 3, 4]);
console.log(reversedNums);
var reversedNames = reverseArray(["Amit", "Rahul", "Asmita"]);
console.log(reversedNames);
