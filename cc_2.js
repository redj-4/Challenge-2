//Task 1: Declaring Tasks with an Array//
let products = ["Apples", "Bananas", "Carrots", "Detergent", "Eggs"];

// Add a new product to the array
products.push("Flour");

// Remove the last product from the array
products.pop();

//log in console//
console.log('Updated product lists:', products)

//Task 2//
let scores = [85,95,76,88,92];//declaring array with numerical values//

scores[1] = 95; //updated second score in array//

//Calculating scores//
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

console.log("Updated Scores:", scores);
console.log("Average Score:", average);

//Task 3//
let employee = {
    name: "Carl Baskins",
    age: 30,
    department: "Sales",
    isActive: true
}; //Declare an object "employee" with initial properties//

//updating department property//
employee.department = 'Marketing';

employee.position = 'Manger';

console.log('Updated Employee Record:',employee);

//Task 4//
let customers = [
    { name: "DJ Black", email: "alice.johnson@example.com", purchaseAmount: 120.50 },
    { name: "Bob White", email: "bob.smith@example.com", purchaseAmount: 75.00 },
    { name: "Charlie Brown", email: "charlie.brown@example.com", purchaseAmount: 200.00 }
];//Array with 3 objects given properties//

//Adding new customer/object to array now//
customers.push({ name: "Diana Prince", email: "diana.prince@example.com", purchaseAmount: 150.75 });

console.log('Customer List:',customers);

//Task 5//
