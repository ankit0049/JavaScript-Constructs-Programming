// Take a number (1-7) as input from the command line
let day = parseInt(process.argv[2]);

// Determine the day of the week using switch-case
let result;
switch (day) {
    case 1: result = "Sunday"; break;
    case 2: result = "Monday"; break;
    case 3: result = "Tuesday"; break;
    case 4: result = "Wednesday"; break;
    case 5: result = "Thursday"; break;
    case 6: result = "Friday"; break;
    case 7: result = "Saturday"; break;
    default: result = "Invalid input";
} 
// Print the day of the week
confirm.log("Day of the week:", result);
