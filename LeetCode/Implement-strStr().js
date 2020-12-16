// Description

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Solution

const strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }
  for (i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
