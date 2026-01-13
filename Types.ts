//object type  explicit

const car : { type : string, model : string, year : number}  = {
    type : "toyota",
    model : "corolla",
    year : 2009
};

//object type  inference

const car1 = {
    type : "toyota",
};

//car1.type = 2;
car1.type= "ford";

// const car2 : {type : string, mileage : number} = {
//     type : "toyota",
// }

// car2.mileage = 2000;  // will give error

const car3 : { type : string, mileage? : number} = {
    type : "toyota",
}

car3.mileage = 2000;  // no error


const nameAgeMap : { [key : string] : number}  = {}; // key and values types defining

nameAgeMap.jack = 25;
//nameAgeMap.mark = "fifty";


// type enum 

enum CardinalDirection {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirection.North;

console.log(currentDirection) // will give zero

//currentDirection = "North" // eror not assignable

enum CardinalDirection1 {
    North = 1,
    East,
    South,
    West
}

console.log (CardinalDirection1.North);

console.log(CardinalDirection1.West);

enum Role { Admin = 1, User };
console.log(Role[1]);

// behind the scene in js how enums ts looks in js
// var Role1 = {
//     "Admin": 1,
//     "User": 2,
//     [1]: "Admin",
//     [2]: "User"
// };


// types and interfaces

type Car = {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
};

const myCar: Car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    isElectric: true
};

//type with union - mean we can options
type EngineType = "Petrol" | "Diesel" | "Electric";

type Car1 = {
    brand: string;
    engine: EngineType; // it will  take  only 3 values from above
};

const safari: Car1 = {
    brand: "Tata",
    engine: "Diesel" //  if take water will give error
};

// types with intersection  &

type baseType = { wheels : number}
type baseType1 = { batteryLife: number}

type completeType = baseType & baseType1

const leaf: completeType = {
    wheels: 4,
    batteryLife: 500
};

// interfaces  with 2. Declaration Merging

interface Windows { title: string }
interface Windows { ts: number }

const myWin: Windows = { title: "App", ts: 2026 };

//Type Union


function printStatusCode (code: string | number){
    console.log(`My status code is ${code}.`)
    
}

printStatusCode(400);
printStatusCode("404");

//ts functions

//how to marks optinal parameter 

function add1(a: number , b : number, c?: number){
    return a + b + (c || 0);
}

// default parameter

function pow ( values : number, exponenet : number = 10) : number{
    return values ** exponenet
}

pow(2);
console.log(pow(2))

//Named Prameter 

function divide ({ dividend, divisor} : {dividend : number, divisor : number}){
    return dividend / divisor ;
}

console.log(23/3)

//Rest Parameter 

 const arr = [3, 4, 6]
function sum ( a: number , b : number, ...arr : number[]){
    return a + b + arr.reduce((p, c) => p+ c, 0)

}

console.log(sum(2, 2, ...arr))