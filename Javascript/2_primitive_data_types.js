//todo -->  7 Primitive Data types -->  n n b b s s u
//* N = null
//* N = Number
//* B = Boolean
//* B = BigInt
//* S = String
//* S = Symbol
//* U = undefined

let a = null;
let b = 10;
let c = true;
let d = BigInt("100") + BigInt("10");
let e = "Nayan";
let f = Symbol("hi!");
let g = undefined;

console.log( a , b , c , d , e , f , g)



//todo -->  Objects in JS

const item = {
    "w" : true,         //!*When you use square brackets [], 
    "x":false,          //!*JavaScript expects the property name as a string or a variable containing the property name. 
    "y" : 10,
    "z" : undefined
}
console.log(item["w"]);   // method i of printing the element of object.(these is used when string is used to store the value)
console.log(item.w);      // method 2 of printing the element of object.
console.log(item["x"]);
console.log(item["y"]);
console.log(item["z"]);
console.log(item["q"]);  //! gives undefined