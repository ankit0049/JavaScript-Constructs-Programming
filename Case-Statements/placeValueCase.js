// Take a number (1, 10, 100, etc.) as input from the command line
let number = parseInt(process.argv[2]);

// Determine the place value
let result;

// Determine the place value using switch-case
switch (number) {
    case 1: result = "Unit"; break;
    case 10: result = "Ten"; break;
    case 100: result = "Hundred"; break;
    case 1000: result = "Thousand"; break;
    default: result = "Invalid input";
} 

// Print the place value
console.log("Place value:", result);