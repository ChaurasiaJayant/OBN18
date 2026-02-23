// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }
// let cnt = 0;
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log("hello");
//     cnt++;
//   }
// }
// console.log(cnt);

// Write a function multiplicationTable(n) that uses nested loops to print an n x n multiplication
//  table to the console.

// Expected output for n = 3:

// 1 2 3
// 2 4 6
// 3 6 9

function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += i * j + " ";
    }
    console.log(line);
  }
}
// multiplicationTable(3);

// What does the following code output? Explain why.

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) break outer;
//     console.log(i, j);
//   }
// }
// 0 0

// *
// **
// ***
// ****

function right(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// right(4);

// Write a function invertedTriangle(n) that prints an inverted right triangle.
// Expected output for n = 4:

// ****
// ***
// **
// *
function invertedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n - i + 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// invertedTriangle(4);

// Write a function hollowSquare(n) that prints a hollow square border of stars.

// Expected output for n = 4:

// ****
// *  *
// *  *
// ****

function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (i == 1 || i === n || j === 1 || j === n) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
// hollowSquare(4);

// for (let i = 1; i <= 4; i++) {
//   let spaces = " ".repeat(4 - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// Write a function diamond(n) that prints a diamond shape.

// Expected output for n = 3:

//   *
//  ***
// *****
//  ***
//   *
function diamond(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let line = "";
    let star;
    let space;
    if (i <= n) {
      space = n - i;
      star = 2 * i - 1;
    } else {
      space = i - n;
      star = 2 * (2 * n - i) - 1;
    }

    for (let j = 1; j <= space; j++) {
      line += " ";
    }
    for (let j = 1; j <= star; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// diamond(3);

// Write a function rightAlignedTriangle(n) that prints a right-aligned star triangle.

// Expected output for n = 4:

//    *
//   **
//  ***
// ****

function rightAlignedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }

    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// rightAlignedTriangle(4);

// What does this print? Explain the output.

// for (let i = 1; i <= 4; i++) {
//   let output = "";
//   for (let j = 1; j <= i; j++) {
//     output += j + " ";
//   }
//   console.log(output.trim());
// }

// Write a function zigzag(n) that prints alternating * and O per row.

// Expected output for n = 4:

// *O*O
// O*O*
// *O*O
// O*O*

function zigzag(n) {
  for (let i = 1; i <= n; i++) {
    let num = i % 2 == 0 ? 0 : "*";
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += num;
      num = num == "*" ? 0 : "*";
    }
    console.log(line);
  }
}
// zigzag(4);

// Write a function staircase(n) that produces the following output.

// Expected output for n = 4:

// #
// # #
// # # #
// # # # #

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "# ";
    }
    console.log(line);
  }
}
// staircase(4);

// Write a function butterfly(n) that prints a butterfly pattern.

// Expected output for n = 4:

// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

function butterfly(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars;
    let spaces;
    let line = "";

    if (i <= n) {
      stars = i;
      spaces = 2 * n - 2 * i;
    } else {
      stars = 2 * n - i;
      spaces = 2 * i - 2 * n;
    }

    for (let j = 1; j <= stars; j++) {
      line += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      line += " ";
    }
    for (let j = 1; j <= stars; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// butterfly(4);

// What is the value logged by the following code?

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][2]);

// Write a function transpose(matrix) that returns the transpose of a matrix (rows become columns).

// Input:
let arr = [
  [1, 2, 3],
  [4, 5, 6],
];
//
// Output:
// [[1, 4],
//  [2, 5],
//  [3, 6]]

// Write a function rotate90(matrix) that rotates an n×n matrix 90 degrees clockwise.

// Input:          Output:
// [1, 2, 3]       [7, 4, 1]
// [4, 5, 6]  =>   [8, 5, 2]
// [7, 8, 9]       [9, 6, 3]
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate90(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let res = [];
    for (let j = 0; j < matrix[i].length; j++) {
      res.push(matrix[j][i]);
    }
    result.push(res.reverse());
  }
  return result;
}
// console.log(rotate90(matrix));

// What is logged and why?
// const data = [
//   ["Alice", ["math", "science"]],
//   ["Bob", ["history", "art"]],
// ];

// console.log(data[1][1][0]);

// Write a function wordChars(sentence) that takes a sentence string and returns an array where each element is an array of characters of that word.

// Input:  "hello world"
// Output: [["h","e","l","l","o"], ["w","o","r","l","d"]]

function wordChars(sentence) {
  let res = [];
  let words = sentence.split(" ");
  for (let word of words) {
    res.push(word.split(""));
  }
  console.log(res);
}
// wordChars("hello world");

// What is the output of the following code? Explain why optional chaining is useful here.

const users = [{ name: "Alice", address: { city: "Delhi" } }, { name: "Bob" }];

// console.log(users[0]?.address?.city);
// console.log(users[1]?.address?.city);

// write a function to extract all the elements of nested arrays

let arrr = [1, [2, 3, [4, 5, 6, [7, 8, 9]], 10]];
// console.log(arr.flat());
function flat(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item));
    } else {
      res.push(item);
    }
  }
  return res;
}
// console.log(flat(arrr));

const obj1 = {
  name: "Jayant",
  address: {
    city: "Delhi",
  },
};

let copy = { ...obj1 };
// copy.address.city = "Gorakhpur";
// console.log(copy);
let deepCopy = structuredClone(obj1);
deepCopy.address.city = "Gorakhpur";
// console.log(deepCopy);

let ar = [1, 2, 3, 8, 9, 4, 5, 6, 7, 8];
function frequencyMap(arr) {
  let map = new Map();
  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  return map;
}
// console.log(frequencyMap(ar));

// Trace through a binary search for target 7 in the
// array [1, 3, 5, 7, 9, 11, 13]. Show each step with
// left, right, and mid values.

let arr1 = [1, 3, 5, 7, 9, 11, 13];
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) return mid;
    if (target < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
// console.log(binarySearch(arr1, 9));

function firstOccurence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      ans = mid;
      right = mid - 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
arr = [1, 2, 2, 2, 3, 4];
// console.log(firstOccurence(arr, 2));

const s = new Set([1, 2, 2, 3, 3, 3, 4]);
// console.log(s.size);
// console.log([...s]);

// Write a function wordCount(str) that uses a Map to
//  count occurrences of each word.

// Input:  "the cat sat on the mat the cat"
// Output: Map { 'the' => 3, 'cat' => 2, 'sat' => 1, 'on' => 1, 'mat' => 1 }

function wordCount(str) {
  let words = str.split(" ");
  let map = new Map();
  for (let ch of words) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }
  return map;
}
// console.log(wordCount("the cat sat on the mat the cat"));

// Using Set, write a function intersection(a, b) that
//  returns an array of elements present in both arrays.

// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function intersection(a, b) {
  let ans = [];
  let set = new Set();

  for (let num of a) {
    if (!set.has(num)) {
      set.add(num);
    }
  }
  for (let num of b) {
    if (set.has(num)) {
      ans.push(num);
    }
  }
  return ans;
}
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];
// console.log(intersection(a, b));

const map = new Map();
const key = { id: 1 };

map.set(key, "Alice");
// console.log(map.get({ id: 1 })); // Line A
// console.log(map.get(key)); // Line B

// Write a recursive function factorial(n) that returns n!.

// // factorial(5) => 120
// // factorial(0) => 1

function fact(n) {
  if (n < 1) {
    return 1;
  }

  return n * fact(n - 1);
}
// console.log(fact(5));

// Write a recursive function fibonacci(n) that returns the nth Fibonacci number.

// // fibonacci(6) => 8
// // Sequence: 0, 1, 1, 2, 3, 5, 8,

function fibonacci(n) {
  if (n == 1) return 1;
  if (n === 2) return 1;
  if (n === 0) return;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(6));

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
// console.log(sumArray([1, 2, 3, 4]));

function flattenDeep(arr) {
  let res = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      res.push(...flattenDeep(el));
    } else {
      res.push(el);
    }
  }
  return res;
}
// console.log(flattenDeep([1, [2, [3, [4]], 5]]));

// Implement the bubbleSort(arr) function.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([6, 5, 4, 3, 2, 1]));

// Implement selectionSort(arr). How does it differ from Bubble Sort?
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(selectionSort([5, 4, 3, 2, 1]));

// Implement insertionSort(arr) and explain when it performs best.
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}
// console.log(insertionSort([7, 8, 6, 5, 4, 3, 2, 1, 9]));

const nums = [10, 9, 2, 21, 3];
nums.sort();
// console.log(nums);

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

const add5 = outer(5);
// console.log(add5(3));
// console.log(add5(10));

let numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((n) => n * n);
// console.log(squared);
// console.log(numbers);

const words = ["apple", "banana", "kiwi", "mango", "fig"];
const longWords = words.filter((w) => w.length > 4);
// console.log(longWords);

const numsss = [1, 2, 3, 4, 5];
const sum = numsss.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Given the following array, use filter + map chaining to get the names of students who scored above 70.
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Carol", score: 92 },
  { name: "Dave", score: 70 },
];

function fltr(students) {
  students
    .filter((student) => {
      return student.score > 70;
    })
    .map((el) => {
      console.log(el.name);
    });
}
// fltr(students);

const orders = [
  { id: 1, category: "food" },
  { id: 2, category: "tech" },
  { id: 3, category: "food" },
  { id: 4, category: "clothes" },
  { id: 5, category: "tech" },
  { id: 6, category: "tech" },
];
function rdc(arr) {
  let freq = arr.reduce((acc, word) => {
    acc[word.category] = (acc[word.category] || 0) + 1;
    return acc;
  }, {});
  console.log(freq);
}
rdc(orders);
