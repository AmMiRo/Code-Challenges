// Description

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

// Solution

const fizzBuzz = function (n) {
  let fizz = "";
  let buzz = "";
  const result = [];

  for (i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      fizz = "Fizz";
    }
    if (i % 5 === 0) {
      buzz = "Buzz";
    }

    let val = fizz + buzz;

    result.push(val === "" ? i + val : val);

    fizz = "";
    buzz = "";
  }

  return result;
};
