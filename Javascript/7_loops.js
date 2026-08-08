//todo-->  FOR LOOP

let n = prompt("Enter number : ");
let sum = 0;

for(let i=0 ; i<=n ; i++){
    sum+=i;
}
console.log("The sum of first " + n + " numbers is : " + sum);


//todo--> FOR IN LOOP [The for...in loop is used to iterate over the properties of an object.]

let obj = {
    a : 90,
    b : 85,
    c : 55,
    d : 32
}
for(let x in obj){
    console.log("The marks of " + x + " are " + obj[x]);    //! here obj.x won't work... even if obj.x = obj[x] is used for accesing the value at that key.
}

//todo--> FOR OF LOOP [The for of loop is used to iterate over iterable objects like arrays, strings, or sets.]

let arr = [1,2,3,4,5]      
for(let x of arr){
    console.log(x);
}

//todo--> WHILE LOOP

// let n = prompt("Enter number : ");
let sum = 0;
let i = 0;
while(i <= n){
    sum+=i;
    i++;
}
console.log("The sum of first " + n + " natural numbers is : " + sum);

//todo--> DO WHILE LOOP

let n = 5;
let sum = 0;
let i = 0;
do{
    sum+=i;
    i++;
} while(i <= n)

console.log("The sum of first " + n + " natural numbers is : " + sum);
