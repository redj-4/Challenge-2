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
