let marks = { 
    a : 90,
    b : 60,
    c : 30,
    d : 70
}

//* Method 1
//?Object.keys() is a JavaScript method that returns an array containing all the enumerable property names (keys) of an object.

for(let i=0 ; i<Object.keys(marks).length ; i++){              //! array.length gives size of array only in JS
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//* Method 2

for(let x in marks){
    console.log("The marks of " + x + " are " + marks[x]);
}
