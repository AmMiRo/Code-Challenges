// Description

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Explanation:
// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Explanation:
// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Solution

// First Pass
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const createMap = (str) => {
    let increment = 1;
    const mappedPairs = {};
    let output = '';
    for (let i = 0; i < str.length; i++) {
      if (mappedPairs[str[i]]) {
        output += mappedPairs[str[i]];
      } else {
        mappedPairs[str[i]] = increment;
        output += increment;
        increment++;
      }
    }

    return output;
  };

  const mappedS = createMap(s);
  const mappedT = createMap(t);

  return mappedS === mappedT;
}
