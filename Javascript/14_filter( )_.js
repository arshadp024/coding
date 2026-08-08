let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * The filter() method passes 3 parameters to its callback:
 * 1. element -> The current item (e.g., 1, 2, 3...)
 * 2. index   -> The position of the item (0, 1, 2...)
 * 3. array   -> The entire original array ([1, 2...])
 * *Rule: The function must return true to KEEP the item, or false to DROP it.
 */

// Example 1: Using 'element'.
// Keeps only numbers less than or equal to 5
let smallNumbers = arr.filter(num => num <= 5);
console.log(smallNumbers); 


// Example 2: Using 'index'.
// Keeps items only if they sit at an even index position (0, 2, 4...)
let evenIndexItems = arr.filter((num, index) => index % 2 === 0);
console.log(evenIndexItems); 


// Example 3: Using 'array' (Real-World Use Case: Removing Duplicates)
let duplicatesArr = [1, 2, 2, 3, 4, 4, 5, 9];
let uniqueItems = duplicatesArr.filter((num, index, array) => {
    // indexOf returns the FIRST time a number appears. 
    // If the current index doesn't match the first index, it's a duplicate!
    return array.indexOf(num) === index;
});
console.log(uniqueItems); 