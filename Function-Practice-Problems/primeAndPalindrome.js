// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        // If the number is divisible by any number other than 1 and itself
        if (num % i === 0) return false;  
    } 
    // Prime number if not divisible by any number other than 1 and itself
    return true; 
}

// Function to get palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join('')); 
}

// Input from user (command-line argument)
const number = parseInt(process.argv[2]);
 
// Check if the number is prime
if (isPrime(number)) { 
    // Get the palindrome of the number
    const palindrome = getPalindrome(number); 
    // Print the result
    console.log(`${number} is a prime number.`);
    if (isPrime(palindrome)) { 
        // Check if the palindrome is also a prime number
        console.log(`Its palindrome ${palindrome} is also a prime number.`);
    } else { 
        // If the palindrome is not a prime number
        console.log(`However, its palindrome ${palindrome} is not a prime number.`);
    }
} else { 
    // If the number is not a prime number
    console.log(`${number} is not a prime number.`);
}
