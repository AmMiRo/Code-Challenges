// Description

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.



// Solution

const lengthOfLastWord = function (s) {
  const arr = s.split(" ");
  let count = arr.length - 1;
  let lastWord = arr[count];

  while (lastWord === "" && count > 0) {
    count -= 1;
    lastWord = arr[count];
  }

  if (lastWord === "") {
    return 0;
  } else {
    return lastWord.length;
  }
};
