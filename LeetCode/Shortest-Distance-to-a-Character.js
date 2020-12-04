// Desctription

// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]



// Solution

const shortestToChar = function(S, C) {
    const indexArr = [];
    const solution = [];
    
    for (i = 0; i < S.length; i++) {
        if (S[i] === C) {
            indexArr.push(i);
        };
    };
    
    let pointer = 0;
    
    for (i = 0; i < S.length; i++) {
        if (i - indexArr[pointer] >= indexArr[pointer + 1] - i) {
            pointer++;
        };
        
        solution.push(Math.abs(indexArr[pointer] - i))
    };
    
    return solution;
};