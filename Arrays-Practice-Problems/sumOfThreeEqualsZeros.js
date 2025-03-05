// Function to find all triplets in array whose sum is zero
function findTriplets(arr) {

    // Array to store triplets
    let triplets = []; 
  
    // Iterate through each element
    for (let i = 0; i < arr.length - 2; i++) { 
      for (let j = i + 1; j < arr.length - 1; j++) { 
        for (let k = j + 1; k < arr.length; k++) { 
  
          // Check if sum of three elements is zero
          if (arr[i] + arr[j] + arr[k] === 0) {
            // Add triplet to result
            triplets.push([arr[i], arr[j], arr[k]]); 
          }
        }
      }
    }
    // Return all found triplets 
    return triplets; 
  }
  
  // Test array to check whether triplets sum to zero present or not
  let array = [0, -1, 2, -3, 1, -2, 3]; 
  console.log("Triplets with sum zero:", findTriplets(array)); 