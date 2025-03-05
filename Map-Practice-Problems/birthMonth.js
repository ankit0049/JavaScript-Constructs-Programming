// Initialize a map to store month frequencies (1-12)
let birthMonthMap = new Map();

// Populate map with month keys (1 to 12) and set count to 0
for (let month = 1; month <= 12; month++) {
  // Each month will store a list of individuals
  birthMonthMap.set(month, []); 
}

// Generate random birth months for 50 individuals
for (let person = 1; person <= 50; person++) {
  // Random month (1 to 12)
  let birthMonth = Math.floor(Math.random() * 12) + 1; 
  birthMonthMap.get(birthMonth).push(person); 
}

// Display individuals for each month
for (let [month, people] of birthMonthMap.entries()) {
  console.log(`Month ${month}: Individuals ->`, people);
}