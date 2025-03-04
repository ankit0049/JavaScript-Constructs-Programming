// Take a number (1-7) as input from the command line
let day = parseInt(process.argv[2]);

// Determine the day of the week
let weekday;
if (day === 1) weekday = "Sunday";
else if (day === 2) weekday = "Monday";
else if (day === 3) weekday = "Tuesday";
else if (day === 4) weekday = "Wednesday";
else if (day === 5) weekday = "Thursday";
else if (day === 6) weekday = "Friday";
else if (day === 7) weekday = "Saturday";
else weekday = "Invalid input (Day not exists)";

// Print the week day
console.log("Day of the week:", weekday);
