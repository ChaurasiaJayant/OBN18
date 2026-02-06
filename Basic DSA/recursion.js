// 🟢 Q1
// Write a recursive function to print numbers from 1 to N

function nums(n) {
  if (n == 1) {
    console.log(1);
    return;
  }
  nums(n - 1);
  console.log(n);
}
// nums(5)
// IN a single line
function nums2(n) {
  if (n < 1) {
    return;
  }
  nums2(n - 1);
  process.stdout.write(n + " ");
}
// nums2(5);

// 🟢 Q2
// Write a recursive function to print numbers from N down to 1
function Nto1(n) {
  if (n == 1) {
    console.log(1);
    return;
  }
  console.log(n);
  return Nto1(n - 1);
}
// Nto1(5);

function Nto1SingleLine(n) {
  if (n < 1) {
    return;
  }
  process.stdout.write(n + " ");
  return Nto1SingleLine(n - 1);
}
// Nto1SingleLine(5);

// 🟡 Q3
// Write a recursive function to return the sum of first N natural numbers

function sum(n) {
  if (n == 1) {
    return 1;
  }
  return n + sum(n - 1);
}
// console.log(sum(5));

// 🟡 Q4
// Write a recursive function to find factorial of N

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));

// 🟠 Q5
// Write a recursive function to find the Nth Fibonacci number

function fibonacci(n) {
  if (n == 1) return 1;
  if (n == 0) return 0;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(25));

// 🟠 Q6
// Write a recursive function to count digits in a number
// Example:12345 → Output: 5

function count(n) {
  if (n == 0) {
    return 0;
  }
  return 1 + count(Math.floor(n / 10));
}
// console.log(count(12345));

function cnt(n) {
  if (n === 0) {
    console.log("Over !!");
    return;
  }
  console.log(n);
  return cnt(n - 1);
}
// console.log(cnt(5));

function counting(n) {
  if (n == 1) {
    console.log(1);
    return;
  }
  counting(n - 1);
  console.log(n);
}
// counting(5);

// const myset = new Set([1, 2, 3, 4, 5]);
// const third = myset[3];
// console.log(third);
// const arr = [...myset];
// console.log(arr[3]);

const objectset = new Set([
  {
    id: 1,
  },
  {
    id: 1,
  },
]);

console.log(objectset.size);
