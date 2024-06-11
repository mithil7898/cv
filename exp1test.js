/*  k1. Download and install Nodejs
    2. install typescript using, "npm install -g typescript" in cmd
    3. Write typescript program with different building blocks in any IDE
    4. In the terminal write, "npm test.ts", this command creates a test.js file which transpiles the .ts into .js
    5.
*/
// Types
console.log("Types: ");
var firstName = "Mike";
var age = 20;
console.log("First Name: ", firstName, "\n", "Age: ", age, "\n");
//Function
console.log("Function: ");
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//Interface
console.log("Interface: ");
var mithil = { name: "Mithil", email: "m@m.com", userID: 15 };
console.log(mithil);
//Interface and Inheritance
console.log("Interface & Inheritance: ");
var emp1 = { name: "Mithil", age: 22, employeeID: 15 };
console.log(emp1);
//class 
console.log("Class: ");
var Vehicle = /** @class */ (function () {
    function Vehicle(name, price) {
        this.name = name;
        this.price = price;
        console.log("New vehicle logged", name, price);
    }
    Object.defineProperty(Vehicle.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Price", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var v1 = new Vehicle("BMW", 50000);
console.log("Vehicle info: ", v1);
