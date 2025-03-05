// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; 
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Input from user (command-line arguments)
const conversionType = process.argv[2];  

// Check if the conversion type is valid and convert the temperature
const temperature = parseFloat(process.argv[3]); 
if (conversionType === "CtoF") { 
    // Convert Celsius to Fahrenheit
    console.log(`${temperature}°C is ${celsiusToFahrenheit(temperature).toFixed(2)}°F`);
} else if (conversionType === "FtoC") { 
    // Convert Fahrenheit to Celsius
    console.log(`${temperature}°F is ${fahrenheitToCelsius(temperature).toFixed(2)}°C`);
} else { 
    // If the conversion type is invalid
    console.log("Invalid conversion type. Use 'CtoF' or 'FtoC'.");
}
