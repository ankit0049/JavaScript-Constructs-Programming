// Take a number N from the command line to find its prime factors
let n = parseInt(process.argv[2]);

// Print prime factors of N
console.log("Prime factors of", n, ":");
for (let i = 2; i * i <= n; i++) { 
    // Divide N by i until i is no longer a factor
    while (n % i === 0) { 
        // Print the prime factor
        console.log(i);
        n /= i;
    }
}

// If N is a prime number itself
if (n > 1) console.log(n); 
