//* METHOD 1 - Funtion declaration - (old method of creating function) 

function sum1(x , y){
    return x + y;
}

let x = 5;
let y = 10;

console.log("The sum of " + x + " and " + y + " is : " + sum1(x,y));

//* METHOD 2 - Arrow Function - (new method of creating function) [MODERN ES6]

const sum2 = ()=>{
    return x+y;
}

console.log("The sum of " + x + " and " + y + " is : " + sum2(x,y));

//* METHOD 3 - Function expression

const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5)); 
