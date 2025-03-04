// Generate 5 random 3-digit numbers (100-999)
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}

// Find the minimum and maximum values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Print the generated numbers
console.log("Random 3-digit numbers:", numbers);

// Print the minimum and maximum values
console.log("Minimum value:", min);
console.log("Maximum value:", max);
