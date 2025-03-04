// Flip a coin until either Heads or Tails wins 11 times
let headsCount = 0;
let tailsCount = 0;

// Flip the coin until either Heads or Tails wins 11 times
while (headsCount < 11 && tailsCount < 11) { 

    // 0 for Heads, 1 for Tails
    let flip = Math.floor(Math.random() * 2);  

    // Increment the count of Heads or Tails
    if (flip === 0) {
        headsCount++;
        console.log("Heads! Count:", headsCount);
    } else {
        tailsCount++;
        console.log("Tails! Count:", tailsCount);
    }
}
 
// Print the winner of the game
console.log(headsCount === 11 ? "Heads won 11 times!" : "Tails won 11 times!");
