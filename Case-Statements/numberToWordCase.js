// Take a single-digit number (0-9) as input from the command line
let number = parseInt(process.argv[2]);

// Convert number to word using switch-case statements
switch (number) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
    default: console.log("Invalid input");
}
