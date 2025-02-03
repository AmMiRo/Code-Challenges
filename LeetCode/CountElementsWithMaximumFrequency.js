// Description

// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.

// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.



// Solution

// First Pass
function maxFrequencyElements(nums) {
    const counts = {};

    for (let i = 0; i < nums.length; i++) {
        if (counts[nums[i]]) {
            counts[nums[i]]++;
        } else {
            counts[nums[i]] = 1;
        }
    };

    const countsArr = Object.values(counts).sort(function(a, b){return b-a});

    let pointer = 1;
    const value = countsArr[0];
    let sum = countsArr[0];

    while (countsArr[pointer] === value) {
        sum += value;
        pointer++;
    };

    return sum;
};

// Second Pass
function maxFrequencyElements(nums) {
    const frequencyMap = new Map;
    let maxFrequency = 0;
    let result = 0;

    for (const num of nums) {
        const count = (frequencyMap.get(num) || 0) + 1;

        frequencyMap.set(num, count);

        if (maxFrequency < count) {
            maxFrequency = count;
        }
    }
    
    frequencyMap.forEach((value, key, map) => {
        if (value === maxFrequency) {
            result += value;
        }
    });

    return result;
};

// Third Pass
function maxFrequencyElements(nums) {
    const freq = {};
    let max = 1;

    for (const num of nums) {
        if (!freq[num]) freq[num] = 0

        freq[num]++;

        if (max < freq[num]) max = freq[num];
    }

    return Object.values(freq).filter(el => el === max).reduce((a,b) => a+b, 0);
};