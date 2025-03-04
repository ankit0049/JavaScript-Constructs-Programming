// Take two inputs: value and conversion type (1 = ft to in, 2 = ft to m, 3 = in to ft, 4 = m to ft)
let value = parseFloat(process.argv[2]);
let conversionType = parseInt(process.argv[3]);

// Perform the unit conversion
switch (conversionType) { 
    // Feet to Inches conversion
    case 1: 
        console.log(value + " ft = " + (value * 12) + " in");
        break; 
    // Feet to Meters
    case 2: 
        console.log(value + " ft = " + (value * 0.3048) + " m");
        break; 
    // Inches to Feet conversion    
    case 3: 
        console.log(value + " in = " + (value / 12) + " ft");
        break; 
    // Meters to Feet conversion   
    case 4: 
        console.log(value + " m = " + (value / 0.3048) + " ft");
        break; 
    // Invalid conversion type    
    default:
        console.log("Invalid conversion type");
}
