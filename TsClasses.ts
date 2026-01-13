class Student {
  
  rollNo: number;
  name: string;

  
  constructor(r: number, n: string) {
    this.rollNo = r;
    this.name = n;
  }

 
  displayDetails() {
    return `${this.name} has ${this.rollNo} Roll No. `;
  }
}

const s1 = new Student(101, "Rahul");
console.log(s1.displayDetails());


//with access modifire

//private, public , protected

class BankAccount {
  public holderName: string;
  private balance: number; 

  constructor(name: string, amt: number) {
    this.holderName = name;
    this.balance = amt;
  }

  showBalance() {
    console.log(this.balance); 
  }
}

const myAcc = new BankAccount("Amit", 5000);
console.log(myAcc.holderName); 
// console.log(myAcc.balance); //  Error: Property 'balance' is private


//Shorthand Syntax (Constructor Assignment)

class Person {
  constructor(public name: string, private age: number) {}

  greet1() {
    console.log("Hello " + this.name);
  }
}

const p = new Person("Asmita", 23);
 p.greet1();


 