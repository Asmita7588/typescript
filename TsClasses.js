var Student = /** @class */ (function () {
    function Student(r, n) {
        this.rollNo = r;
        this.name = n;
    }
    Student.prototype.displayDetails = function () {
        return "".concat(this.name, " has ").concat(this.rollNo, " Roll No. ");
    };
    return Student;
}());
var s1 = new Student(101, "Rahul");
console.log(s1.displayDetails());
//with access modifire
//private, public , protected
var BankAccount = /** @class */ (function () {
    function BankAccount(name, amt) {
        this.holderName = name;
        this.balance = amt;
    }
    BankAccount.prototype.showBalance = function () {
        console.log(this.balance);
    };
    return BankAccount;
}());
var myAcc = new BankAccount("Amit", 5000);
console.log(myAcc.holderName);
// console.log(myAcc.balance); //  Error: Property 'balance' is private
//Shorthand Syntax (Constructor Assignment)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet1 = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p = new Person("Asmita", 23);
p.greet1();
