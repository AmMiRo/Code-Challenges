// Description

// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.



// Solution

const twoSum = function(numbers, target) {
    const cache = {};
    
    const solution = [];
    
    for (i = 0; i < numbers.length; i++) {
        let subtracted = target - numbers[i];
        
        if (subtracted in cache && cache[subtracted] < i) {
            solution[0] = cache[subtracted] + 1;
            solution[1] = i + 1;
        } else {
            cache[numbers[i]] = i;
        };
    };
    
    return solution;
};