// Description

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Solution

// First Pass
function isPalindrome(s) {
    const formattedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reverseFormattedStr = formattedStr.split("").reverse().join("");
    if (formattedStr == reverseFormattedStr) {
        return true;
    }
    return false;
}

// Second Pass (fastest)
function isPalindrome(s) {
    str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    for (i = 0; i < Math.ceil(str.length / 2); i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Third Pass (similar time to 1st pass, but using less memory)
function isPalindrome(s) {
    str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}
