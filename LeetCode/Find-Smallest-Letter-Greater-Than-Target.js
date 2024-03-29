// Description

// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.



// Solution

const nextGreatestLetter = function (letters, target) {
  for (const letter of letters) {
    if (letter > target) {
      return letter;
    }
  }

  return letters[0];
};
