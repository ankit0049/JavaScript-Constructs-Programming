// Take three numbers (a, b, c) from the command line
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

// Perform the 4 arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Find the maximum and minimum results
let max = Math.max(result1, result2, result3, result4);
let min = Math.min(result1, result2, result3, result4);

// Print all results
console.log("Results of arithmetic operations:");
console.log("a + b * c =", result1);
console.log("a % b + c =", result2);
console.log("c + a / b =", result3);
console.log("a * b + c =", result4);

// Print max and min values
console.log("Maximum result:", max);
console.log("Minimum result:", min);
