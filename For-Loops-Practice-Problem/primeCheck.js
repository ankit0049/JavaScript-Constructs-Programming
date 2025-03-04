// Take a number from the command line to check if it's prime
let number = parseInt(process.argv[2]);
let isPrime = true;

// Prime number check (divisible only by 1 and itself)
if (number < 2) isPrime = false;
else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Print whether the number is prime
console.log(number, isPrime ? "is a Prime number" : "is NOT a Prime number");
