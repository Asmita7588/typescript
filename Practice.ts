let message :string = "Hellow typeScript";

console.log(message);

let isActive : boolean = true;

let hasPermission = false;

console.log(isActive);
console.log(hasPermission);
let age : number = 4
let fullName : string = 'Asmita girhepunje'
let sentence : string = `Hellow, my name is ${fullName} and I will be ${age + 1} next year.`

console.log(sentence);

//explicit type 

function greet(name: string): string{

    return `Hello, ${name}`
}

greet("Asmita")
console.log(greet("Asmita"));
//greet(23) 

//with type inference

function add2(a: number , b : number){

    return a + b;
}

add2(4, 2)
console.log(add2(4, 2));

//object literal inference

const user = {
    name :"Asmita",
    age : 23,
    isAdmin : true
};

console.log(user.name)
console.log(user.age)

// ts special type 

// to skip the type checking for particular type
//without any

// let u = true;
// u = 'string';

// Math.round(u);

let v : any = true;
v = 'string';

Math.round(v);

// unkown

let w : unknown = 1;

w = "string";

w = {
    runANonExistentMethod : () =>{
        console.log("I think therefore i am");
    }
} as {
    runANonExistentMethod : () => void
}

if(typeof w === 'object' && w !== null)
{
    (w as {runANonExistentMethod : Function}).runANonExistentMethod();
}


// if you dont want check type and null then use custome type guard

interface User {
    id : number,
    name : string
}

function isUser(data : unknown) : data is User{
    return(
        typeof data === 'object' && data != null && 'id' in data && 'name'in data

    );
}

let apiResponce : unknown = {id : 1, name : "asmita"}

if(isUser(apiResponce)){
    console.log(apiResponce.name)
}



// type never 
function keepRunning(): never {
    while (true) {
        console.log(" will never stop");
    }
}

function throwCustomError(message: string): never {
    throw new Error(message);
}

//Exhaustive Checking

type Shape = "circle" | "square" | "rectangle";

function getArea(shape: Shape) {
    switch (shape) {
        case "circle":
            return "Area of Circle";
        case "square":
            return "Area of Square";
        case "rectangle":
            return "Area of Rectangle";
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

//Conditional Types
// keep string and remove all
type OnlyStrings<T> = T extends string ? T : never;

//result has only string type all will get removed as never
type Result = OnlyStrings<string | number | boolean>;



// type undefined and null

let x : number | undefined;

function sayHellow(name? : string){
    console.log("Hello " + name);
}

sayHellow("Asmita")
sayHellow();

// for null
let user1 : string | null = null;
user1 = "Rahul";



type Employee = {
    info? :{ name : string}
}

let emp : Employee = {}

console.log(emp.info?.name) // output undefined

let displayName = emp.info?.name ?? "Guest";
console.log(displayName);


//array

const  names : string[] = [];

names.push("Asmita");
// with readonly 

const names1 : readonly string[] = ["Chetan"];
console.log(names1);
// names1.push("ankita") //  throw error

const numbers = [1, 2, 3];
numbers.push(4);
//numbers.push("2") // give eeror

let head : number = numbers[0];
console.log(head);

//Tuples

let person :[number , string];

person =[1, "asmita"]
console.log(person);

let response: [number, string, boolean] = [200, "Success", true];

console.log(response);

let ourTouple : [number, boolean, string];

ourTouple = [5, false, "coding"]

console.log(ourTouple);

ourTouple.push("something")
console.log(ourTouple);


// with readonly 

const readOnlyTuple : readonly [number, boolean, string] = [4, true,"typescript"]

console.log(readOnlyTuple);

//readOnlyTuple.push("java") // will throw error