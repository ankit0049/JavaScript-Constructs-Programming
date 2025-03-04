// Take a number from the command line to calculate factorial
let n = parseInt(process.argv[2]);
let factorial = 1;

// Calculate factorial of n (n!)
for (let i = 1; i <= n; i++) {
    factorial *= i;
}

// Print the factorial of n
console.log(n + "! =", factorial);
