//object type  explicit
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var car = {
    type: "toyota",
    model: "corolla",
    year: 2009
};
//object type  inference
var car1 = {
    type: "toyota",
};
//car1.type = 2;
car1.type = "ford";
// const car2 : {type : string, mileage : number} = {
//     type : "toyota",
// }
// car2.mileage = 2000;  // will give error
var car3 = {
    type: "toyota",
};
car3.mileage = 2000; // no error
var nameAgeMap = {}; // key and values types defining
nameAgeMap.jack = 25;
//nameAgeMap.mark = "fifty";
// type enum 
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 0] = "North";
    CardinalDirection[CardinalDirection["East"] = 1] = "East";
    CardinalDirection[CardinalDirection["South"] = 2] = "South";
    CardinalDirection[CardinalDirection["West"] = 3] = "West";
})(CardinalDirection || (CardinalDirection = {}));
var currentDirection = CardinalDirection.North;
console.log(currentDirection); // will give zero
//currentDirection = "North" // eror not assignable
var CardinalDirection1;
(function (CardinalDirection1) {
    CardinalDirection1[CardinalDirection1["North"] = 1] = "North";
    CardinalDirection1[CardinalDirection1["East"] = 2] = "East";
    CardinalDirection1[CardinalDirection1["South"] = 3] = "South";
    CardinalDirection1[CardinalDirection1["West"] = 4] = "West";
})(CardinalDirection1 || (CardinalDirection1 = {}));
console.log(CardinalDirection1.North);
console.log(CardinalDirection1.West);
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
;
console.log(Role[1]);
var myCar = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    isElectric: true
};
var safari = {
    brand: "Tata",
    engine: "Diesel" //  if take water will give error
};
var leaf = {
    wheels: 4,
    batteryLife: 500
};
var myWin = { title: "App", ts: 2026 };
//Type Union
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(400);
printStatusCode("404");
//ts functions
//how to marks optinal parameter 
function add(a, b, c) {
    return a + b + (c || 0);
}
// default parameter
function pow(values, exponenet) {
    if (exponenet === void 0) { exponenet = 10; }
    return Math.pow(values, exponenet);
}
pow(2);
console.log(pow(2));
//Named Prameter 
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(23 / 3);
//Rest Parameter 
var arr = [3, 4, 6];
function sum(a, b) {
    var arr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arr[_i - 2] = arguments[_i];
    }
    return a + b + arr.reduce(function (p, c) { return p + c; }, 0);
}
console.log(sum.apply(void 0, __spreadArray([2, 2], arr, false)));
