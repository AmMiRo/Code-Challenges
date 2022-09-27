// Description

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0. 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105



// Solution

// First Pass
function threeSum(nums) {
    if (nums.length < 3) return []; 

    const resultSet = new Set()
    const result = []
    
    nums.sort((a, b) =>  a-b);
    console.log(nums)
    
    let i = 0
    while (nums[i] <= 0) {
        const target = 0 - nums[i];
        const visited = new Set();
        
        for (let j = i + 1; j < nums.length; j++) {
            const subtracted = target - nums[j];
            if (visited.has(subtracted)) {
                const triplet = [nums[i], nums[j], subtracted];
                if (!resultSet.has(triplet.toString())) {
                    result.push(triplet);
                    resultSet.add(triplet.toString());
                }
            } else {
                visited.add(nums[j]);
            };
        };
        while (nums[i] === nums[i + 1]) i++
        i++
    }
    return Array.from(result);
};

// Second Pass
function threeSum(nums) {
    if (nums.length < 3) return []; 

    const result = []
    
    nums.sort((a, b) =>  a-b);
    
	for(i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue
        
		let left = i + 1
		let right = nums.length - 1
		
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right]

			if(sum === 0){
				result.push([nums[i], nums[left], nums[right]])
				left++
				while(nums[left] === nums[left-1] && left < right) left++
			}else if(sum > 0){
				right--
			}else{
				left++
			}
		}
	}
    return result;
};