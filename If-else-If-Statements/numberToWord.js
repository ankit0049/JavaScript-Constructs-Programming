// Take a single-digit number (0-9) as input from the command line
let number = parseInt(process.argv[2]);

// Convert number to word using if-else statements
let word;
if (number === 0) word = "Zero";
else if (number === 1) word = "One";
else if (number === 2) word = "Two";
else if (number === 3) word = "Three";
else if (number === 4) word = "Four";
else if (number === 5) word = "Five";
else if (number === 6) word = "Six";
else if (number === 7) word = "Seven";
else if (number === 8) word = "Eight";
else if (number === 9) word = "Nine";
else word = "Invalid input";

// Print the word representation
console.log("Number in words:", word);