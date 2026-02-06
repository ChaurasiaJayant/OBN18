// let a = "10";
// let b = 10;
// let c = a + b;
// console.log(c, typeof c);

// let x = 5;
// let y = "5";
// console.log(x == y);
// console.log(x === y);

// let 1name = "Ram"
// let first-name = "Sita"
// let _age = 25
// let $price = 100
// let my name = "Krishna"

// let n = 17;
// console.log(n % 5); //2
// console.log(parseInt(n / 5)); // 3.102922
// console.log(n / 5); // 3.2345

// let a = 10;
// let b = 20;
// let result = a + (b * 2) / 4 - 5;
// console.log(result);

// let x = 5;
// x = x + 10;
// x = x * 2;
// console.log(x);

// let marks = 75;
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 75) {
//   console.log("B");
// } else if (marks >= 60) {
//   console.log("C");
// }

// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//   case 4:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Invalid");
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// let n = 1234;
// let count = 0;
// while (n > 0) {
//   count++;
//   n = parseInt(n / 10);
// }
// console.log(count);

// let sum = 0;
// for (let i = 1; i <= 4; i++) {
//   sum += i;
// }
// console.log(sum);

// let arr = [10, 20, 30, 40];
// console.log(arr[2]);
// console.log(arr.length);
// arr.push(50);
// console.log(arr.length);

// let str = "Hello";
// console.log(str.length);
// console.log(str[0]);
// console.log(str.toUpperCase());

// let student = {
//   name: "Ram",
//   age: 20,
//   marks: 85,
// };
// console.log(student.name);
// console.log(student["age"]);
// student.marks = 90;
// console.log(student.marks);

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let five = arr[1][2];
// console.log(five);

function findMax(array) {
  let max = array[0][0];
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] > max) {
        max = array[i][j];
      }
    }
  }
  return max;
}

// let array = [
//   [
//     360, 58731, 14335, -337, 83848, 80036, 53988, 53941, 75281, 13753, 85976,
//     50108, -9744, -5224, 60198, 28602, 75660, 91618, 12980, 5746, 85829, -1995,
//     -846, 38553, 45200, 54840, 53601, 78618, 18886, 19273, 3427, 19320, 31942,
//   ],
//   [
//     69588, 78226, 37718, 41220, 49771, 2951, -6306, 15825, 387, 91469, 73104,
//     46565, 71540, 58646, 30058, 68186, 39042, 84480, 44254, 38471, 68768, 98512,
//     -5902, 4692, 63, 87336, 88947, 1095, 7326, 83987, 65852, 59305, 17132,
//   ],
//   [
//     38367, 47877, 83027, 88672, 17335, 27593, 15065, 49506, 90147, 29302, 53771,
//     76056, 59577, 9951, 34774, 47036, 52776, 44128, 26495, 19801, 24036, 34750,
//     -1979, 77921, 38923, 60485, 9470, 67488, 8239, 66010, 63426, 13708, 59037,
//   ],
//   [
//     77020, 52900, 18835, 63274, -8916, 16959, 56899, 94118, 16142, 23603, 90095,
//     29620, 46977, 49336, 10607, 68483, 7224, 44544, 95147, 61049, 2708, 11658,
//     69082, 57538, 80515, 52539, 100173, 88827, 44305, 13408, 68395, 48903,
//     68781,
//   ],
//   [
//     54893, -2685, -8289, 69358, 27271, 65832, 20510, 50163, 32754, -4293, 34627,
//     22696, 19878, 34715, 77072, 59115, 13113, 100511, 22028, -9520, 29371,
//     90334, 20334, 44078, 81694, 92180, 16810, 19096, 33855, 50274, 87795, 232,
//     89116,
//   ],
// ];

let array = [[-1]];
// console.log(findMax(array));

let MathScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

MathScore.push(["Jayant Chaurasia", 90, 99, "A+"]);
// console.log(MathScore);

// let sum = 0;
// MathScore.forEach((rows) => {
//   let totalScore = rows[1] + rows[2];
//   rows.push(totalScore);
// });

// console.log(MathScore);

// MathScore.forEach((row) => {
//   let marks = row[2];
//   row.splice(2, 1);
// });
// console.log(MathScore);

let array1 = [];
let row = 3;
let cols = 4;
let value = 0;

for (let i = 0; i < row; i++) {
  array1[i] = [];
  for (let j = 0; j < cols; j++) {
    array1[i][j] = value++;
  }
}
// console.log(array1);

let cnt = 0;
let vowels = ["a", "e", "i", "o", "u"];
function adjacentVowels(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (vowels.includes(str[i]) && vowels.includes(str[i + 1])) {
      cnt++;
    }
  }
  return cnt;
}

let str = "audio";
// console.log(adjacentVowels(str));

// console.log(Math.floor(5 / 2));

// console.log(Math.ceil(9.0000001));

let obj = {
  name: "Jayant",
  age: 22,
};
// console.log(obj["name"]);

let weights = [3, 2, 2, 4, 1, 4];
let min = 0;
for (let i = 0; i < weights.length; i++) {
  if (weights[i] > min) {
    min = weights[i];
  }
}
let max = weights.reduce((acc, current) => {
  return acc + current;
}, 0);

while (min < max) {
  let mid = Math.floor((min + max) / 2);
}

let min = Math.max(...weights);
console.log(min);
