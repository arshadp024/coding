//* Create a variable of typr string and try to add a number to it.
let a = "Nayan";
let b = 1;
console.log(a + b);         //?When + has a string on either side, JavaScript performs string concatenation.

//* Use typeof operator to find datatype of string in last qs.
console.log(typeof(a + b));

//* Create a const object in JS. Can you change it to hold a number later ? --> No

const qs3 = {       
    x : 1,                  //? writing the keys in double quotes is not compulsion.
    "y" : 2
}

// qs3 = "Nayan";           //! error

qs3["z"] = 3;               /* adding a key outside the object.{The new data typed can be added in const object,
                            only its name cant be assigned later}*/
console.log(qs3);           //? a new key z is added with value 3
console.log(qs3["x"]);      //? But while printing any value of a key it must be inside double quotes.
console.log(qs3.x);