/*  k1. Download and install Nodejs 
    2. install typescript using, "npm install -g typescript" in cmd
    3. Write typescript program with different building blocks in any IDE
    4. In the terminal write, "npm test.ts", this command creates a test.js file which transpiles the .ts into .js
    5. In the terminal write, "node test" to run the file
*/

// Types
console.log("Types: ")
let firstName:string = "Mike";
let age:number = 20
console.log("First Name: ", firstName, "\n", "Age: ", age, "\n")

//Function
console.log("Function: ")
function add(a:number, b:number):number {
    return a+b;
}

console.log(add(1, 2));

//Interface
console.log("Interface: ")
interface User {
    name: string
    email: string
    userID: number
}

const mithil: User = {name: "Mithil", email: "m@m.com", userID: 15}
console.log(mithil)

//Interface and Inheritance
console.log("Interface & Inheritance: ")
interface Person {
    name: string;
    age: number
}

interface Employee extends Person {
    employeeID: number
}

const emp1: Employee = {name: "Mithil", age: 22, employeeID: 15}
console.log(emp1)

//class 
console.log("Class: ")
class Vehicle {
    constructor(private name: string, private price: number){
        console.log("New vehicle logged", name, price)
    }

    public get Name(): string {
        return this.name
    }

    public get Price(): number {
        return this.price
    }
}

const v1 = new Vehicle("BMW", 50000)
console.log("Vehicle info: ", v1)
