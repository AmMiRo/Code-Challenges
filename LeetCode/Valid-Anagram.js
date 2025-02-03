// Description

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Solution

// First Pass
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sArr = Array.from(s).sort();
  const tArr = Array.from(t).sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }

  return true;
}

// Second Pass (Better)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charObj = {};

  for (let i = 0; i < s.length; i++) {
    if (charObj[s[i]]) {
      charObj[s[i]]++;
    } else {
      charObj[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (charObj[t[i]] === undefined || charObj[t[i]] === 0) {
      return false;
    } else {
      charObj[t[i]]--;
    }
  }

  return true;
}
