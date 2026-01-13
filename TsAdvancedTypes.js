//Conditional Types
//ts Guard
//typeof Guard
function formatInput(input) {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    }
    return input.toFixed(2);
}
//2. instanceof Guard
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () { console.log("bird is fyling"); };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () { console.log(" swimming..."); };
    return Fish;
}());
function move(animal) {
    if (animal instanceof Bird) {
        animal.fly();
    }
    else {
        animal.swim();
    }
}
function greet(person) {
    if ("role" in person) {
        console.log("Hello Admin, your role is ".concat(person.role));
    }
    else {
        console.log("Hello User ".concat(person.name));
    }
}
function isCar(vehicle) {
    return vehicle.speed !== undefined;
}
var myVehicle = { brand: "Tata", speed: 120 };
if (isCar(myVehicle)) {
    console.log(myVehicle.speed);
}
//5. Equality Narrowing
function check(x, y) {
    if (x === y) { // here if both are equal then type will only string
        console.log(x.toLowerCase());
        console.log(y.toUpperCase());
    }
}
function greet2() {
    return "Hello!";
}
var z = "4";
console.log(z);
//typeof: string, number, boolean 
//instanceof: Classes 
//in: Object property
// Custom Guard (is): for self type checking
