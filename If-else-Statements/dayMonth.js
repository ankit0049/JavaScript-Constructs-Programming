m// Take day and month as input from command line
let day = parseInt(process.argv[2]); // first argument (day)
let month = parseInt(process.argv[3]); // second argument (month)

// Check if the date is between March 20 and June 20
let isWithinRange = (month === 3 && day >= 20) ||
                    (month > 3 && month < 6) ||
                    (month === 6 && day <= 20);

// Print true if within range, false otherwise
console.log("Is the date within range (March 20 - June 20)?", isWithinRange);
