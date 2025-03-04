// Take year as input from command line
let year = parseInt(process.argv[2]);

// Check if the year is a leap year
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Print whether it's a leap year or not
console.log(year, "is a leap year?", isLeapYear);