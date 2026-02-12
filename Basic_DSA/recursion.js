//  Q1
// Write a recursive function to print numbers from 1 to N

// function nums(n) {
//   if (n == 1) {
//     console.log(1);
//     return;
//   }
//   nums(n - 1);
//   console.log(n);
// }
// // nums(5)
// // IN a single line
// function nums2(n) {
//   if (n < 1) {
//     return;
//   }
//   nums2(n - 1);
//   process.stdout.write(n + " ");
// }
// // nums2(5);

// //  Q2
// // Write a recursive function to print numbers from N down to 1
// function Nto1(n) {
//   if (n == 1) {
//     console.log(1);
//     return;
//   }
//   console.log(n);
//   return Nto1(n - 1);
// }
// Nto1(5);

// function Nto1SingleLine(n) {
//   if (n < 1) {
//     return;
//   }
//   process.stdout.write(n + " ");
//   return Nto1SingleLine(n - 1);
// }
// Nto1SingleLine(5);

// //  Q3
// // Write a recursive function to return the sum of first N natural numbers

// function sum(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }
// // console.log(sum(5));

// //  Q4
// // Write a recursive function to find factorial of N

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// // console.log(factorial(5));

// //  Q5
// // Write a recursive function to find the Nth Fibonacci number

// function fibonacci(n) {
//   if (n == 1) return 1;
//   if (n == 0) return 0;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// // console.log(fibonacci(25));

// //  Q6
// // Write a recursive function to count digits in a number
// // Example:12345 → Output: 5

// function count(n) {
//   if (n == 0) {
//     return 0;
//   }
//   return 1 + count(Math.floor(n / 10));
// }
// console.log(count(12345));

// function cnt(n) {
//   if (n === 0) {
//     console.log("Over !!");
//     return;
//   }
//   console.log(n);
//   return cnt(n - 1);
// }
// console.log(cnt(5));

// function counting(n) {
//   if (n == 1) {
//     console.log(1);
//     return;
//   }
//   counting(n - 1);
//   console.log(n);
// }
// counting(5);

let str = "abc";
function final(str) {
  let line = "";
  reverse(str);
  function reverse(str, i = 0) {
    if (i == str.length) return "";
    reverse(str, i + 1);
    line += str[i];
  }
  return line;
}
// console.log(final(str));

function tribonacciSeq(n, memo = {}) {
  if (n in memo) return memo;

  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;

  memo =
    tribonacciSeq(n - 1, memo) +
    tribonacciSeq(n - 2, memo) +
    tribonacciSeq(n - 3, memo);
  return memo[n];
}

// A pirate finds a treasure chest containing coins stacked in a triangular way.
// Top row has 1 coin, next has 2, then 3, and so on.
// Problem Statement
// Given n rows, find the total number of coins using recursion.
// Constraints
// 1 ≤ n ≤ 1000
// Examples
// Input: n = 4
// Output: 10
// Explanation:
// 1 + 2 + 3 + 4 = 10
function pirate(n) {
  if (n < 1) return 0;
  return n + pirate(n - 1);
}
// console.log(pirate(4));

// A robot is placed at position 0 and wants to reach position n.
// It can move either 1 step or 3 steps at a time.
// Problem Statement
// Find total number of ways the robot can reach exactly n using recursion.
// Constraints
// 1 ≤ n ≤ 25

function robot(n, memo = {}) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (memo[n]) return memo[n];

  memo[n] = robot(n - 1, memo) + robot(n - 3, memo);
  return memo[n];
}
// console.log(robot(5));

// A magical book has pages numbered from 1 to n.
// You must read all pages forward and then backward using recursion.
// Problem Statement
// Print numbers from 1 to n and then back to 1 using recursion.
// Constraints
// 1 ≤ n ≤ 50
// Example
// Input: n = 3
// Output:
// 1 2 3 2 1

function readPages(n) {
  if (n === 0) return 0;
  readPages(n - 1);
  console.log(n);
  helper(n);
  function helper(n) {}
}
// readPages(4);

// A child collects candies every day.
// On day n, the child gets n candies more than the previous day.
// Problem Statement
// Find total candies collected after n days using recursion.
// Constraints
// 1 ≤ n ≤ 1000
// Examples
// Input: n = 5
// Output: 15
// Explanation:
// 1+2+3+4+5

function totalCandies(n) {
  if (n === 0) return 0;
  return n + totalCandies(n - 1);
}
// console.log(totalCandies(5));

// A wizard checks if a word reads the same forward and backward to unlock a door.
// Problem Statement
// Use recursion to check if a string is a palindrome.
// Constraints
// String length ≤ 1000
// Case-sensitive comparison
// Examples
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(str) {
  let line = "";
  helper(str);
  function helper(str, i = 0) {
    if (i == str.length) return;
    helper(str, i + 1);
    line += str[i];
  }
  if (line === str) {
    console.log("PALINDROME");
  } else {
    console.log("NOT PALINDROME");
  }
}
// isPalindrome("hello");

// The Family Tree Problem
// Each person has two children. Count total people in n generations.
// Problem Statement
// Return total number of people using recursion:
// f(n) = 2*f(n-1) + 1
// Constraints
// 1 ≤ n ≤ 20
// Example
// Input: n = 3

function familyTree(n) {
  if (n === 1) return 1;
  return 2 * familyTree(n - 1) + 1;
}
console.log(familyTree(3));
