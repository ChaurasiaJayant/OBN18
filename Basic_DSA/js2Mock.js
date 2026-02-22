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

console.log(users[0]?.address?.city);
console.log(users[1]?.address?.city);
