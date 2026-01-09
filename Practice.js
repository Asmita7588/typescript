var _a, _b, _c;
var message = "Hellow typeScript";
console.log(message);
var isActive = true;
var hasPermission = false;
console.log(isActive);
console.log(hasPermission);
var age = 4;
var fullName = 'Asmita girhepunje';
var sentence = "Hellow, my name is ".concat(fullName, " and I will be ").concat(age + 1, " next year.");
console.log(sentence);
//explicit type 
function greet(name) {
    return "Hello, ".concat(name);
}
greet("Asmita");
console.log(greet("Asmita"));
//greet(23) 
//with type inference
function add(a, b) {
    return a + b;
}
add(4, 2);
console.log(add(4, 2));
//object literal inference
var user = {
    name: "Asmita",
    age: 23,
    isAdmin: true
};
console.log(user.name);
console.log(user.age);
// ts special type 
// to skip the type checking for particular type
//without any
// let u = true;
// u = 'string';
// Math.round(u);
var v = true;
v = 'string';
Math.round(v);
// unkown
var w = 1;
w = "string";
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore i am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
function isUser(data) {
    return (typeof data === 'object' && data != null && 'id' in data && 'name' in data);
}
var apiResponce = { id: 1, name: "asmita" };
if (isUser(apiResponce)) {
    console.log(apiResponce.name);
}
// type never 
function keepRunning() {
    while (true) {
        console.log(" will never stop");
    }
}
function throwCustomError(message) {
    throw new Error(message);
}
function getArea(shape) {
    switch (shape) {
        case "circle":
            return "Area of Circle";
        case "square":
            return "Area of Square";
        case "rectangle":
            return "Area of Rectangle";
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
// type undefined and null
var x;
function sayHellow(name) {
    console.log("Hello " + name);
}
sayHellow("Asmita");
sayHellow();
// for null
var user1 = null;
user1 = "Rahul";
var emp = {};
console.log((_a = emp.info) === null || _a === void 0 ? void 0 : _a.name); // output undefined
var displayName = (_c = (_b = emp.info) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : "Guest";
console.log(displayName);
//array
var names = [];
names.push("Asmita");
// with readonly 
var names1 = ["Chetan"];
console.log(names1);
// names1.push("ankita") //  throw error
var numbers = [1, 2, 3];
numbers.push(4);
//numbers.push("2") // give eeror
var head = numbers[0];
console.log(head);
//Tuples
var person;
person = [1, "asmita"];
console.log(person);
var response = [200, "Success", true];
console.log(response);
var ourTouple;
ourTouple = [5, false, "coding"];
console.log(ourTouple);
ourTouple.push("something");
console.log(ourTouple);
