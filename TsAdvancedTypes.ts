//Conditional Types

type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>;  // "Yes"
type B = IsString<number>;  // "No"


//ts Guard
//typeof Guard

function formatInput(input: string | number) {
  if (typeof input === "string") {
    
    return input.trim().toUpperCase();
  }
  
  return input.toFixed(2);
}

//2. instanceof Guard

class Bird { fly() { console.log("bird is fyling"); } }
class Fish { swim() { console.log(" swimming..."); } }

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim(); 
  }
}

//3. in Operator Guard

interface User1 { name: string; }
interface Admin1 { name: string; role: string; }

function greet(person: User1 | Admin1) {
  if ("role" in person) {
    console.log(`Hello Admin, your role is ${person.role}`);
  } else {
    console.log(`Hello User ${person.name}`);
  }
}

//4. Custom Type Guards (Type Predicates) syntax arg is Type

interface Cars { brand: string; speed: number; }


function isCar(vehicle: any): vehicle is Cars {
  return (vehicle as Cars).speed !== undefined;
}

let myVehicle: any = { brand: "Tata", speed: 120 };

if (isCar(myVehicle)) {
  console.log(myVehicle.speed); 
}



//5. Equality Narrowing

function check(x: string | number, y: string | boolean) {
  if (x === y) {               // here if both are equal then type will only string
    console.log(x.toLowerCase());
    console.log(y.toUpperCase());
  }
}

//infer keyword
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet2() {
  return 4;
}

type MyReturn = GetReturnType<typeof greet2>; // now MyReturn is 'string' type
const z : MyReturn = 4 
console.log(z)
//typeof: string, number, boolean 

//instanceof: Classes 

//in: Object property

// Custom Guard (is): for self type checking