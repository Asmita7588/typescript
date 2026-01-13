//Inheritance

class Animal {
  move() { console.log(" waliking"); }
}

class Dog extends Animal {
  bark() { console.log("barking"); }
}

const myDog = new Dog();
myDog.move(); 
myDog.bark();


//ReadOnly property

class Config {
  readonly apiKey: string = "XYZ123";
}

const c = new Config();
// c.apiKey = "ABC"; //  Error: Cannot assign to 'apiKey' because it is a read-only property.