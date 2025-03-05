// Generate 10 random 3-digit numbers (between 100 and 999)
let numbers = [];

// Generate 10 random numbers between 100 and 999
for (let i = 0; i < 10; i++) { 
  // Add 100 to random number between 0-899
  numbers.push(Math.floor(Math.random() * 900) + 100); 
}

// Display unsorted numbers 
console.log("Generated Numbers:", numbers); 

// Sort the array in ascending order 
numbers.sort((a, b) => a - b); 
console.log("Sorted Numbers:", numbers); 

// Step c: Get the 2nd smallest and 2nd largest numbers
let secondSmallest = numbers[1]; 
let secondLargest = numbers[numbers.length - 2]; 

// Print 2nd largest number
console.log("2nd Largest:", secondLargest);

// Print 2nd smallest number
console.log("2nd Smallest:", secondSmallest); 