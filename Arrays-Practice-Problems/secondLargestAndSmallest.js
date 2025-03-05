// Generate 10 random 3-digit numbers (between 100 and 999)
let numbers = []; 

// Loop 10 times to generate 10 numbers
for (let i = 0; i < 10; i++) { 
  // Generate random number and add to array  
  numbers.push(Math.floor(Math.random() * 900) + 100); 
}

// Print the generated numbers
console.log("Generated Numbers:", numbers); 

// Find the 2nd largest and 2nd smallest without sorting
let largest = -Infinity;
let secondLargest = -Infinity; 
let smallest = Infinity; 
let secondSmallest = Infinity; 

// Iterate through each number in the array
for (let num of numbers) {
  // Check for largest and second largest
  if (num > largest) { 
    secondLargest = largest; 
    largest = num;
  } else if (num > secondLargest && num !== largest) { 
    secondLargest = num; 
  }

  // Check for smallest and second smallest
  if (num < smallest) { 
    secondSmallest = smallest; 
    smallest = num;
  } else if (num < secondSmallest && num !== smallest) { 
    secondSmallest = num; 
  }
}

// Print 2nd largest 
console.log("2nd Largest:", secondLargest); 

// Print 2nd smallest
console.log("2nd Smallest:", secondSmallest); 