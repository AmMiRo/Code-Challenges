// Description

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Solution

const longestCommonPrefix = function(strs) {
    let result = ""
    if (!strs.length) {
        return result;
    };
    
    const base = strs[0];
    let charIndex = 0;
    
    for (const baseChar of base) {
        for (i = 1; i < strs.length; i++) {
            let compare = strs[i];
            let compareChar = compare[charIndex];
            
            if (charIndex > compare.length || baseChar != compareChar) {
                return result;
            };
        };
        
        result += baseChar;
        charIndex++;
    };
    
    return result;
};