// Description

// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.



// Solution

const countAndSay = function(n) {
    let result = "1"
    
    if (n === 1) {
        return result;
    };
    
    let count = 0;
    let char = 0;
    let str = "";
    
    while (n > 1) {
        while (count < result.length) {
            while (result[count] === result[char]) {
                count ++          
            };
            
            str += (count - char).toString();
            str += result[char];
            char = count;
        };
        
        result = str;
        str = "";
        n--;
        count = 0;
        char = 0;
    };
    
    return result;
};