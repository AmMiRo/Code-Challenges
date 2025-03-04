// Description

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"
// Output: "AceCreIm"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Solution

// First Pass
var reverseVowels = function (s) {
  if (s.length <= 1) return s;

  const isVowel = (char) => {
    return 'aeiouAEIOU'.indexOf(char) != -1;
  };

  const strArray = s.split('');

  const vowelIndex = [];

  for (let i = 0; i < strArray.length; i++) {
    if (isVowel(strArray[i])) {
      vowelIndex.push(i);
    }
  }

  while (vowelIndex.length > 1) {
    const index1 = vowelIndex[0];
    const index2 = vowelIndex[vowelIndex.length - 1];
    const temp = strArray[index1];
    strArray[index1] = strArray[index2];
    strArray[index2] = temp;

    vowelIndex.shift();
    vowelIndex.pop();
  }

  return strArray.join('');
};
