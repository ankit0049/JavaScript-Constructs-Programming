// Take a number (1, 10, 100, etc.) as input from the command line
let number = parseInt(process.argv[2]);

// Determine the place value
let placeValue;
if (number === 1) placeValue = "Unit";
else if (number === 10) placeValue = "Ten";
else if (number === 100) placeValue = "Hundred";
else if (number === 1000) placeValue = "Thousand";
else placeValue = "Invalid input";

// Print the place value
console.log("Place value:", placeValue);
