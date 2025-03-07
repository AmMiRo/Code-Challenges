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
    return "aeiouAEIOU".indexOf(char) != -1;
  };

  const strArray = s.split("");

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

  return strArray.join("");
};

// Second Pass
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const strArray = s.split("");

  let i = 0;
  let j = strArray.length - 1;

  const swapElements = (index1, index2) => {
    const temp = strArray[index1];
    strArray[index1] = strArray[index2];
    strArray[index2] = temp;
  };

  while (i < j) {
    const iIsVowel = vowels.has(strArray[i]);
    const jIsVowel = vowels.has(strArray[j]);

    if (iIsVowel && jIsVowel) {
      swapElements(i, j);
      i++;
      j--;
    } else {
      if (!iIsVowel) {
        i++;
      }
      if (!jIsVowel) {
        j--;
      }
    }
  }

  return strArray.join("");
};
