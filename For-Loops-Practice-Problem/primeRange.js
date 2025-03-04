// Take two numbers from the command line to define the range
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

// Function to check if a number is prime
function isPrime(num) { 
    // Prime number check (divisible only by 1 and itself)
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        // If the number is divisible by any number other than 1 and itself
        if (num % i === 0) return false;
    } 
    // If the number is not divisible by any number other than 1 and itself
    return true;
}

// Print prime numbers in the given range
console.log("Prime numbers from", start, "to", end, ":");
for (let i = start; i <= end; i++) { 
    // If the number is prime displaying it
    if (isPrime(i)) console.log(i);
}
