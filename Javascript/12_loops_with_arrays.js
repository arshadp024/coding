let arr = [1,2,3,4,5,6,7,8,9];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-----------------------FOR EACH LOOP-----------------------");

arr.forEach( (element) => {
    console.log(element*element);
})

console.log("-------------------------FROM LOOP-------------------------");

//! Array.from() is a static built-in method in JavaScript that creates a new, shallow-copied Array instance from an iterable object (like a String, Set, or Map) or an array-like object (an object with a .length property and indexed elements).

let name = "Nayan";
let array = Array.from(name);
console.log(array);

console.log("-------------------------FOR OF LOOP-------------------------");
//! access the array elements.

for(let j of arr){
    console.log(j);
}

console.log("-------------------------FOR IN LOOP-------------------------");
//! array index

for(let k in arr){
    console.log(k);
}




