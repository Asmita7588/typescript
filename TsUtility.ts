interface User {
  id: number;
  name: string;
  email: string;
}


type UserKeys = keyof User;

let myProperty: UserKeys = "name"; // right
// let myProperty: UserKeys = "age"; //Error


//Ts Utility
//Partial<T> (Utility Type)

interface Product {
  title: string;
  price: number;
  description: string;
}

function updateProduct(id: number, fieldsToUpdate: Partial<Product>) {

  console.log(`Updating product ${id} with:`, fieldsToUpdate);
}

updateProduct(101, { price: 500 }); 
updateProduct(102, { title: "New Phone", price: 900 }); 

//2. Required<Type>

interface Car2 {
  brand: string;
  model?: string; // Optional 
}

const myCar1: Required<Car2> = {
  brand: "Tesla",
  model: "Model 3" // need to provide model
};


//3 Readonly
const config: Readonly<{ api: string }> = {
  api: "https://api.com"
};

 //config.api = "new-url";  // you can not modified

 //4. Pick<Type, Keys>
 interface Employee1 {
  id: number;
  name: string;
  salary: number;
  department: string;
}

// only 'name' and 'salary' will select
type EmployeePreview = Pick<Employee1, "name" | "salary">;

const emp1: EmployeePreview = {
  name: "Asmita",
  salary: 50000
};

//5. Omit<Type, Keys>

type PublicEmployeeInfo = Omit<Employee1, "salary">;

const publicInfo: PublicEmployeeInfo = {
  id: 1,
  name: "Rahul",
  department: "IT"
};

// 6 Record<Keys, Type>
const inventory: Record<string, number> = {
  apples: 10,
  oranges: 5,
  bananas: 20
};

//ts null

let userId: number | null = null; 

userId = 101;
console.log(userId)
userId = null;
console.log(userId)