// Array to store numbers with repeated digits 
let repeatedDigits = [];

// Iterate numbers from 10 to 100
for (let i = 10; i <= 100; i++) {

  // Convert number to string to check digits  
  let numStr = i.toString(); 

  // Check if both digits are the same
  if (numStr[0] === numStr[1]) { 
    repeatedDigits.push(i); 
  }
}

// Display repeated digits
console.log("Repeated Digit Numbers (0-100):", repeatedDigits); 