// Description

// Given a string s, find the length of the longest substring without repeating characters.



const lengthOfLongestSubstring = function(s) {
    let result = 0;
    
    let testStr = "";
    
    for (i = 0; i < s.length; i++) {
        let double = testStr.indexOf(s[i]);
        
        if (double >= 0 && double < testStr.length) {
            testStr = testStr.slice(double + 1, testStr.length) + s[i];
        } else {
            testStr = testStr + s[i];
        };
        
        result = Math.max(testStr.length, result);
    };
    
    return result;
};