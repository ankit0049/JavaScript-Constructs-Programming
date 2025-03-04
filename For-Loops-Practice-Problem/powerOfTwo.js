// Take a command-line argument 'n' to print powers of 2 up to 2^n
let n = parseInt(process.argv[2]);

// Print powers of 2 from 0 to n using for loop
console.log("Powers of 2:");
for (let i = 0; i <= n; i++) { 
    
    console.log("2^" + i + " = " + Math.pow(2, i));
}
