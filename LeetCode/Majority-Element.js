// Description

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.



// Solution

const majorityElement = function(nums) {
    const cache = {};
    
    let max = 1
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] in cache) {
            if (cache[nums[i]] === max) {
                max++;
            };
            
            cache[nums[i]]++;
        } else {
            cache[nums[i]] = 1;
        };
    };
    
    for (let key in cache) {
        if (cache[key] === max) {
            return key;
        };
    };
    
};