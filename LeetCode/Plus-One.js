// Description

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.



// Solution

// 1st pass (ugly)
const plusOne = function(digits) {
    let count = digits.length - 1;
    
    if (digits[count] < 9) {
        let num = digits[count] + 1;
        digits[count] = num;
    } else {
        while (digits[count] === 9 && count > 0) {
            count--;
        };
        if (count === 0 && digits[count] === 9) {
            digits[0] = 1;
            let length = digits.length;
            for (i = 1; i < length + 1; i++) {
                digits[i] = 0;
            };
        } else {
            let num = digits[count] + 1;
            digits[count] = num;
            for (i = count + 1; i < digits.length; i++) {
                digits[i] = 0;
            };
        };
    };
     
    return digits;
};

// doesn't work with big numbers
const plusOne = function(digits) {
    let num = parseInt(digits.join(""));
    num++
    return num.toString().split("");
};

// final
const plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};