// Description

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.



// Solution

const guessNumber = function(n) {
    let low = 1;
    let high = n;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        let check = guess(mid);
        
        if (check === 0) {
            return mid;
        } else if (check === -1) {
            high = mid - 1;
        } else if (check === 1) {
            low = mid + 1;
        };
    };
};