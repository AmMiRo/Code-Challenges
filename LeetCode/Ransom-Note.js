// Description

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Solution

const canConstruct = function (ransomNote, magazine) {
  for (let char of ransomNote) {
    magChar = magazine.indexOf(char);

    if (magChar === -1) {
      return false;
    } else {
      magazine = magazine.slice(0, magChar) + magazine.slice(magChar + 1);
    }
  }

  return true;
};
