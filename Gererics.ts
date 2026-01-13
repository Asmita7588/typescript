//problems with nongeneric

function getIt(arg: number): number { return arg; } // will return only number

function getIt1(arg: any): any { return arg; } // here ts dont know what it will return

//solution
function identity<T>(arg: T): T {
  return arg;
}


let output1 = identity<string>("Asmita"); 
let output2 = identity<number>(100);      

let output3 = identity(true); // type inference

function add<T>(arg : T) : T {
    return arg;
}



//Generic with array

function arrayEle<T>(arr: T[]) : T {
    return arr[0];
}

console.log(arrayEle([1, 2, 3, 4]))


//generic with interface

interface ApiResponse<T> {
  status: number;
  data: T;  
}

const userResponse: ApiResponse<{name: string}> = {
  status: 200,
  data: { name: "Asmita" }
};



//Generic Constraints (extends) will work with only string and array because  it has lenght 

interface HasLength {
  length: number;
}


function logLength<T extends HasLength>(item: T) {
  console.log(item.length);
}

logLength("Hello"); 
logLength([1, 2, 3]); 
//logLength(10); // Error: 

function reverseArray<T>(items: T[]): T[] {
  return items.reverse();
}


const reversedNums = reverseArray([1, 2, 3, 4]); 

console.log(reversedNums)

const reversedNames = reverseArray(["Amit", "Rahul", "Asmita"]);
console.log(reversedNames)