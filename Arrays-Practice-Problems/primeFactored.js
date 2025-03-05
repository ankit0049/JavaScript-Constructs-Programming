// Function to find prime factors of a given number n
function primeFactors(n) {

    // Array to store prime factors
    let factors = []; 
    
    // Get number of 2s that divide n
    while (n % 2 === 0) { 
      factors.push(2); 
      n = n / 2; 
    }
  
    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
        factors.push(i); 
        n = n / i;
      }
    }
  
    // If n is prime and > 2, add it
    if (n > 2) {
      // Add remaining prime factor
      factors.push(n); 
    }
  
    // Return prime factors
    return factors; 
  }
  
  let number = 315; 
  // Display prime factors
  console.log(`Prime Factors of ${number}:`, primeFactors(number)); 