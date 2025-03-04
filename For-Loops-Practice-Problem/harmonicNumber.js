// Take a command-line argument 'n' to calculate the nth harmonic number
let n = parseInt(process.argv[2]);
let harmonic = 0;

// Calculate the harmonic number
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

// Print the nth harmonic number
console.log(n + "th Harmonic Number:", harmonic.toFixed(2));
