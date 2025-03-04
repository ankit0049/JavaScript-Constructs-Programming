// Magic number game: guess a number between 1 to 100
const prompt = require('prompt-sync')();
let low = 1;
let high = 100;
let found = false;

// Instructions for the user
console.log("Think of a number between 1 to 100!");

// Binary search to find the magic number
while (!found && low <= high) { 
    // Find the middle number
    let mid = Math.floor((low + high) / 2); 

    // Ask the user if the number is the middle number
    let response = prompt(`Is your number ${mid}? (yes/higher/lower): `).toLowerCase();

    // Check the user's response
    if (response === "yes") {
        console.log("Hurray! The magic number is:", mid);
        found = true;
    } else if (response === "higher") {
        low = mid + 1; 
    } else if (response === "lower") {
        high = mid - 1; 
    } else {
        // Invalid response
        console.log("Invalid response. Please type 'yes', 'higher', or 'lower'.");
    }
}
