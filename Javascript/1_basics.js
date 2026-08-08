console.log("Hello JS");

// Old method - Variable declaration
var a = 10;            
a = 100;               //! assigned the value
var a = 9;             //! The same variable is declared twice(hence not using var is considered good practice)

// Latest method - Variable Decalaration
let b = 100;
// b = 200;            //! Works 
// let b = 300         //! Error

// Const keyword

// const user;            //! Error -- constant must be assigned value at time of declaration.
// user = a;              //! Error

const user = "Nayan";
// const name = b;        //! Error

console.log(user);      //? semicolon at the end isn't compulsory. But using ; is a good practice


// Java Script is dynamically typed. It automatically decides the type of variable we declare. ex --> 

let x = 10;
x  = "Nayan";
x = 10.00;
x = [1,2,3,4,5]

$temp = 100;           //! same variable naming rules just add one more --> we can use dollar too.
if ($temp > 10) {
  let y = 20;
  console.log(y); 
}
//console.log(y);      //! ReferenceError: y is not defined


