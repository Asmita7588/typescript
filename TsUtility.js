var myProperty = "name"; // right
function updateProduct(id, fieldsToUpdate) {
    console.log("Updating product ".concat(id, " with:"), fieldsToUpdate);
}
updateProduct(101, { price: 500 });
updateProduct(102, { title: "New Phone", price: 900 });
var myCar1 = {
    brand: "Tesla",
    model: "Model 3" // need to provide model
};
//3 Readonly
var config = {
    api: "https://api.com"
};
var emp1 = {
    name: "Asmita",
    salary: 50000
};
var publicInfo = {
    id: 1,
    name: "Rahul",
    department: "IT"
};
// 6 Record<Keys, Type>
var inventory = {
    apples: 10,
    oranges: 5,
    bananas: 20
};
//ts null
var userId = null;
userId = 101;
console.log(userId);
userId = null;
console.log(userId);
