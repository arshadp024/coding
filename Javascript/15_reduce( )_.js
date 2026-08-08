 let arr = [1, 2, 3, 4];

/**
 * The reduce() method runs a loop and boils the array down to a single value.
 * It takes two main things inside its callback:
 * 1. accumulator -> The running total that collects the results.
 * 2. value       -> The current number in the loop.
 * * Note: The 0 at the end is the starting number for the accumulator.
 */
let totalSum = arr.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(totalSum); 