// Description

// You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described above.

// Example 1:
// Input: S = "5F3Z-2e-9-w", K = 4

// Output: "5F3Z-2E9W"

// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.
// Example 2:
// Input: S = "2-5g-3-J", K = 2

// Output: "2-5G-3J"

// Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.



// Solution

// First Pass

const licenseKeyFormatting = function (S, K) {
  // split S into array
  const licenseArr = S.toUpperCase().split("-");

  let result = "";
  let KLengthStr = "";

  // loop through array backwards adding characters to result
  for (i = licenseArr.length - 1; i >= 0; i--) {
    let curr = licenseArr[i];

    while (curr.length > 0) {
      KLengthStr = curr[curr.length - 1] + KLengthStr;
      curr = curr.slice(0, curr.length - 1);

      if (KLengthStr.length === K) {
        result = KLengthStr + "-" + result;
        KLengthStr = "";
      }
    }
  }

  result = KLengthStr + "-" + result.slice(0, result.length - 1);

  if (result[0] === "-") {
    result = result.slice(1, result.length);
  }

  if (result[result.length - 1] === "-") {
    result = result.slice(0, result.length - 1);
  }

  return result;
};

// Second Pass !!!Slower!!!

const licenseKeyFormatting = function (S, K) {
  let license = S.toUpperCase().replace(/-/g, "");

  let count = 1;

  for (i = license.length - 1; i > 0; i--) {
    if (count === K) {
      license = license.slice(0, i) + "-" + license.slice(i, license.length);
      count = 1;
    } else {
      count++;
    }
  }

  return license;
};
