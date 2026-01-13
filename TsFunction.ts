//Casting with as keyword

let someValue: unknown = "Hello TypeScript";

let strLength: number = (someValue as string).length;

console.log(strLength);


// casting with<>

let someValue1: any = "this is a string";

let strLength1: number = (<string>someValue).length;


//casting with dom mainipulation


const myInput = document.getElementById("user-email");


const emailValue = (myInput as HTMLInputElement).value;

// force casting

let x1= "10";


//let y = x1 as number;

let y = (x1 as unknown) as number