let arr = [45, 23, 21];

//todo: ---------------------------------------- MAP -----------------------------------------------
//! map()     --> Used when we want to transform data and create a new array.
// Cleaned up: Returns a new array with each value incremented by 1.
let a = arr.map((value)=>{ 
    return value + 1;
});

//! OR the abovr function can also be written as --> (modern JS , shorter code)

let a = arr.map( value => value + 1);
console.log(a);

console.log("------------------------------------------------");

//! forEach() --> Used when we want to perform an action/side-effect for each element.
// Cleaned up: Executes the operation (logging) directly for each item.
arr.forEach(value => console.log(value));

//todo : ----------------------------------------------------------------------------------------------------------------------


const prices = [100, 200, 300];

/**
 * The map() method automatically passes 3 parameters to your callback function:
 * 1. element  -> The current item being processed in the loop (e.g., 100, 200, 300).
 * 2. index    -> The current item's position, starting from 0 (e.g., 0, 1, 2).
 * 3. array    -> A reference to the entire original array ([100, 200, 300]).
 */
const priceReceipts = prices.map((element, index, array) => {
    
    // 1. Using 'element': Get the current price
    const currentPrice = element;
    
    // 2. Using 'index': Create a human-readable item number (1, 2, 3 instead of 0, 1, 2)
    const itemNumber = index + 1;
    
    // 3. Using 'array': Calculate the total number of items available in the store roster
    const totalItemsCount = array.length;
    
    // Return the formatted string for the new array
    return `Item ${itemNumber} of ${totalItemsCount} costs $${currentPrice}`;
});

console.log(priceReceipts);






