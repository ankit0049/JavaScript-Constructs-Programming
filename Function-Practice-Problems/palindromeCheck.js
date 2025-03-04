// Function to check if a number is a palindrome
function isPalindrome(num) { 
    // Convert number to string and reverse it
    const strNum = num.toString(); 
    const reversedStr = strNum.split('').reverse().join('');  
    // Check if the number is equal to its reverse
    return strNum === reversedStr; 
}

// Input from user (command-line argument) and check if it's a palindrome
const number = parseInt(process.argv[2]);

// Check if the number is a palindrome and print the result
console.log(`${number} is ${isPalindrome(number) ? "" : "not "}a palindrome.`);
