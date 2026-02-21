// *
// *
// *
// *

function one(n) {
  for (let i = 0; i < n; i++) {
    console.log("*");
  }
}
// one(4);
function oneRec(n) {
  if (n == 0) return;
  console.log("*");
  oneRec(n - 1);
}
// oneRec(4);

// *
// * *
// * * *
// * * * *

function two(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// two(4);

function twoRec(n) {
  if (n == 0) return;
  let line = "";
  twoRec(n - 1);

  helper(n);
  function helper(n) {
    if (n < 1) {
      console.log(line);
      return;
    }

    line += "* ";
    helper(n - 1);
  }
}
// twoRec(4);

// * * * *
// * * *
// * *
// *

function recThree(n) {
  if (n < 1) return;
  let line = "";

  helper(n);
  recThree(n - 1);

  function helper(n) {
    if (n < 1) {
      console.log(line);
      return;
    }
    line += "*";
    helper(n - 1);
  }
}
// recThree(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4

function fourRec(n) {
  if (n < 1) return;

  fourRec(n - 1);
  console.log("");
  helper(n);

  function helper(n) {
    if (n < 1) {
      return;
    }
    helper(n - 1);
    process.stdout.write(n.toString() + " ");
  }
}
// fourRec(6);

// 1
// 2 2
// 3 3 3
// 4 4 4 4

function fiveRec(n) {
  if (n < 1) return;

  fiveRec(n - 1);
  console.log();
  helper(n);

  function helper(n, i = 1) {
    if (i > n) return;
    process.stdout.write(n.toString() + " ");
    helper(n, i + 1);
  }
}
// fiveRec(7);

// 1
// 2 3
// 4 5 6
// 7 8 9 10

function six(n) {
  let s = 1;
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += s + " ";
      s++;
    }
    console.log(line);
  }
}
// six(4);

let i = "1";
function sixRec(n, i) {
  if (n < 1) return i;
  i = sixRec(n - 1, i);
  if (n > 1) console.log();

  i = helper(n, i);
  return i;

  function helper(n, i) {
    if (n < 1) return i;

    process.stdout.write(i + " ");
    i++;
    return helper(n - 1, i);
  }
}
// sixRec(4, i);

// Q9

// * * * *
// *     *
// *     *
// * * * *
function nine(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (i == 1 || i == n || j == 1 || j == n) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
// nine(4);
// Level 3 – Right-Aligned
// Q10

//       *
//     * *
//   * * *
// * * * *

function eleven(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }

    //  Stars
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// eleven(4);
// Q11

// * * * *
//   * * *
//     * *
//       *
function twelve(n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j <= i; j++) {
      line += " ";
    }

    for (let j = 1; j <= n - i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// twelve(4);
// Level 4 – Pyramid
// Q12

//    *
//   * *
//  * * *
// * * * *
function oneTwo(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }

    // star
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
// oneTwo(4);

// Q13

// * * * *
//  * * *
//   * *
//    *

function oneThree(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j < i; j++) {
      line += " ";
    }

    for (let j = 1; j <= n - i + 1; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
// oneThree(4);
// Q14 (Full Pyramid)

//    *
//   ***
//  *****
// *******
function oneFour(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// oneFour(5);
// Q15 (Inverted Pyramid)

// *******
//  *****
//   ***
//    *
function oneFive(n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j <= i; j++) {
      line += " ";
    }

    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// oneFive(5);
// Level 5 – Advanced (Interview Favorites)
// Q16 – Diamond

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
function oneSix(n) {
  for (let i = 0; i <= 2 * n - 1; i++) {
    let line = "";
    let spaces = n - i;
    let stars = 2 * i - 1;

    if (i > n) {
      spaces = i - n;
      stars = 2 * (2 * n - i) - 1;
    }

    for (let j = 0; j < spaces; j++) {
      line += " ";
    }

    //star
    for (let j = 0; j < stars; j++) {
      line += "*";
    }
    for (let j = 0; j < spaces; j++) {
      line += " ";
    }

    console.log(line);
  }
}
// oneSix(4);
// Q17 – Number Pyramid
//    1
//   121
//  12321
// 1234321

function oneSeven(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }

    // increasing number
    for (let j = 1; j <= i; j++) {
      line += j;
    }

    // decreasing number
    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }
    console.log(line);
  }
}
// oneSeven(4);
// Q18 – Floyd’s Triangle

// 1
// 2 3
// 4 5 6
// 7 8 9 10
function oneEight(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += num;
      num++;
    }
    console.log(line);
  }
}
// oneEight(4);
// Q19 – Binary Pattern

// 1
// 0 1
// 1 0 1
// 0 1 0 1

function oneNine(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    let num = i % 2 == 0 ? 0 : 1;

    for (let j = 1; j <= i; j++) {
      line += num;
      num = num == 0 ? 1 : 0;
    }
    console.log(line);
  }
}
// oneNine(4);
// Q20 – Hollow Pyramid

//    *
//   * *
//  *   *
// *******
function twoZero(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    // last row
    if (i == n) {
      for (let i = 1; i <= 2 * n - 1; i++) {
        line += "*";
      }
    }

    // spaces
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }
    // FIRST  star
    line += "*";

    // Between space
    for (let j = 1; j <= 2 * i - 3; j++) {
      line += " ";
    }

    // last star
    if (i !== 1 && i !== n) {
      line += "*";
    }

    console.log(line);
  }
}
// twoZero(4);

//   21.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
function twoOne(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let line = "";
    let stars = i;

    if (i > n) {
      stars = 2 * n - i;
    }
    for (let j = 1; j <= stars; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
// twoOne(5);

//  22.
// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

function twoTwo(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let space = 2 * n - 2 * i;
    let star = i;
    let line = "";

    if (i > n) {
      star = 2 * n - i;
      space = 2 * i - 2 * n;
    }

    for (let j = 1; j <= star; j++) {
      line += "* ";
    }
    for (let j = 1; j <= space; j++) {
      line += "  ";
    }
    for (let j = 1; j <= star; j++) {
      line += "* ";
    }

    console.log(line);
  }
}
// twoTwo(4);

// 23.
//   *
//  ***
// *****
//  ***
//   *

function twoThree(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let line = "";
    let star, space;

    if (i <= n) {
      star = 2 * i - 1;
      space = n - i;
    } else {
      star = 2 * (2 * n - i) - 1;
      space = i - n;
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
// twoThree(3);

//   24.
// 1
// 21
// 321
// 4321
// 54321

function twoFour(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = i; j >= 1; j--) {
      line += j + " ";
    }
    console.log(line);
  }
}
// twoFour(5);

// 25.
// 1      1
// 12    21
// 123  321
// 12344321

function twoFive(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    //left side
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    for (let j = 1; j < 2 * n - 2 * i; j++) {
      line += " ";
    }

    for (let j = i; j >= 1; j--) {
      line += j;
    }
    console.log(line);
  }
}
twoFive(4);
