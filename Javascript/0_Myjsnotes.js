//?---------------------------------------------------Operators----------------------------------------------------------
//All Assignment , Arithimetic , Logical < comaparision operators works same 
//!--------------------------------------------------Java Script String Addition-----------------------------------------
//The "+" can also be used to add (concatenate) strings
//Example : 
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3)
//The += assignment operator can also be used to add (concatenate) strings
//Example :
let text4 = "What a very ";
text4 += "nice day";
console.log(text4)
//When used on strings, the + operator is called the concatenation operator.
//!--------------------------------------------------Adding Strings and Numbers---------------------------------------------
//Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".
//Example :
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x)  //Number
console.log(y)  //String
console.log(z)  //String
//*If you add a number and a string, the result will be a string!
//!-----------------------------------------------New Operators-----------------------------------------------------------------
// Operator **= , x**=y means x=x**y, These is new Assignment Operator
//x**y =x^y
//Example :
let a= 5
a**=2
console.log(a)   //"a" square
//Operator === , x===y means  x and y have equal value and equal type(data type)
//Example:
x=5  // x is declared above so only changing its value
y="5"
console.log(x===y)   //false x and y are different x is number and y is string 
console.log(x==y)    //True the value of x and y is same , dont compare the data type
//Operator !== .x!==y means x and y dont have equal value or same data type
//Example:
y=3
console.log(x!==y)   // Not same value 
//All the comparison operators above can also be used on strings
//Note that strings are compared alphabetically.
//Example:
 text1 = "A";
 text2 = "B";
let result = text1 < text2;
console.log(result)  
//The Operation Precedence is similar to C and C++.
//! ----------------------------------------------------Assignment Operators-------------------------------------------------
//The &&= Operator, means If the first value is true, the second value is assigned.
Example:
x = true;      //We can use x=1 or 0 for 1 means True and 0 means false 
y = x &&= 10;  // Y will be 10 as the first value x is true 
console.log(y)
x = undefined;  //If x is undefined then value of y will also be undefined 
y = x &&= 10;   // These operator can be divided as "x&&=10" means "x=x&&10" hence if x is true then x =10 and if x is false x is unchanged and value of x=x&&10 will be x and which is equal to y
console.log(y)  //Y is undefined 
x = null;       //if x is null then value of y will also be null
y = x &&= 10;
console.log(y)  //Y is  NUll
//The ||= Operator ,means If the first value is false, the second value is assigned.
//Example :
 x = false;
 y = x ||= 10; 
 console.log(y)
 //The ??= Operator ,The Nullish coalescing assignment operator is used between two values.
 //If the first value is undefined or null, the second value is assigned.
 //Example:
 x=null 
x ??= 10;
console.log(x)

//!------------------------------------Falsy & truthy values ----------------------------------------------------
//1)The 8 FALSY Values
// A falsy value is a value that JavaScript treats as false when it is used in a condition.
// false	      The boolean keyword itself
// 0	          The number zero
// -0	          Negative zero
// 0n	          BigInt zero
// "", '', ``	  Any empty string
// null	          The absence of any value
// undefined	  A variable that has not been assigned a value
// NaN	         "Not-a-Number," usually the result of an invalid math operation 

//2)The 8 Truthy values
// A truthy value is a value that JavaScript treats as true when it is used in a condition.
// true
// 1
// -1
// "hello"
// "0"
// []
// {}
// function() {}
// In JavaScript, any non-empty string is truthy.
// any number apart from 0 is considered true in java script
//!------------------------------------------------------Spread Operator------------------------------------------------
// The spread operator (...) is used to unpack/expand the elements of an array or the properties of an object.
//Example:
a = [1, 2, 3];  //a was already defined above 
let b = [...a,4];
let c=[...a,...b];
console.log(b); // [1, 2, 3,4]
console.log(c)  //[1,2,3,1,2,3,4]
let person = {name: "Arshad", age: 20};

let p = {...person, city: "Pune"};

console.log(p);
// {name: "Arshad", age: 20, city: "Pune"}
//!--------------------------------------------------Comparing different String-----------------------------------------
// Comparing data of different types may give unexpected results.

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
// An empty string converts to 0. A non-numeric string converts to NaN which is always false
//* Conditional statement in C and JavaScript are same (if,else if,else,ternary,switch)
//!---------------------------------------------------Boolean Function()----------------------------------------------
// Boolean() is a built-in function used to convert any value into true or false.
//Boolean(value)
x = 10;
console.log(Boolean(x)); // true
let name = "";
console.log(Boolean(name)); // false
// We convert a value to a Boolean (true/false) when we want to use that value as a condition or decision.
name = "Arshad";
if (Boolean(name)) {
    console.log("Name exists");
}
//?---------------------------------------------------Loops---------------------------------------------------------------------
// The For loop , While loop and do while loop are same in java script as C
//!--------------------------------------------Java Script Label's--------------------------------------------------------------
// A label gives a name to a loop or block of code, so that break or continue can specifically control that named loop/block.
/*
Syntax:
label:
    statement 
*/
//Example :
outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        if (j == 1)
            break outer;            // when we want to terminate the outer loop we can give it the label and we write break label or continue label it will break or continue the loop which is labeled
    }
}
//Label = name a loop → break/continue labelName → control that specific loop.
//!----------------------------------------for...in Loop-------------------------------------------------------------------------
// for...in loops through the property keys of an object.
//Example 1:
let student = {
    name: "Arshad",
    age: 20,
    branch: "CSE"
};

for (let key in student) {
    console.log(key);
}
//Example 2:
let arr = [10, 20, 30];

for (let index in arr) {
    console.log(index);
}
//For in is mainly used objects  and can be used for array and string only , it can not be used for map and set
//!-------------------------------------for...of Loop---------------------------------------------------------------------------
//for...of loops through the values/elements of an iterable.
//Example 1:
arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
//Example 2:
name = "Arshad";

for (let character of name) {
    console.log(character);
}
// ✅Arrays
// ✅ Strings
// ✅ Maps
// ✅ Sets
//❌ Normal objects