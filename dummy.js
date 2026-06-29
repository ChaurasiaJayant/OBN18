// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mul(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// let calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };
// console.log(calculator(10, 5, mul));

// console.log([1, 2] + [3, 4]);

// console.log([1, 2] == "1,2");
// console.log([1] == 1);
// console.log([1, 2, 3].length == true);
// console.log(1 == true);

// let len = [1, 2, 3, 4, 5].length;
// if (len) {
//   console.log("hii");
// }
// console.log(Boolean == true && false);
// console.log([] == true);

// console.log("hello");

// iife

// (function greet() {
//   console.log("hello from IIFE");
// })();

// (() => {
//   console.log("Hello from arrow iife");
// })();

// const employees = [
//   { name: "Alice", age: 30, salary: 50000 },
//   { name: "Bob", age: 25, salary: 60000 },
//   { name: "Charlie", age: 25, salary: 55000 },
// ];

// const newEmp = employees.sort((a, b) => {
//   if (a.age > b.age) return 1;
//   return b.salary - a.salary;
// });
// console.log(newEmp);

// for (let i = 0; i < 10; ) {
//   console.log(++i);
// }

// for (let i = 1; i < 11; ) {
//   console.log(i++);
// }

// let x = 10;
// x--;
// console.log(--x);

// let a = 5;
// let b = --a;
// console.log(--a);

// console.log(b);

// function createCounter() {
//   var count = 0;

//   return function () {
//     count++;
//     console.log(count);
//     //   return count;÷
//   };
// }

// let myCounter = createCounter;

// // console.log(count)
// const result = myCounter();
// result();
// myCounter();
// myCounter();

// function double(num) {
//   return num * 2;
// }

// console.log(typeof double);
// var double = 22;

// console.log(typeof double);

// let rate = 10;

// function calculate() {
//   console.log(rate);
//   let rate = 20;
// }

// calculate();

// let str = "!@#$%^&*";
// console.log(str.includes("%"));

// function checkPassword(password) {
//   //type check and length check
//   if (password.length < 8) return false;

//   let hasUpper = false;
//   let hasLower = false;
//   let hasDigit = false;
//   let hasSpecial = false;

//   const specials = ["@", "#", "$", "%", "&", "_", "^", "*", "?"];

//   for (let ch of password) {
//     if (ch >= "A" && ch <= "Z") hasUpper = true;
//     else if (ch >= "a" && ch <= "z") hasLower = true;
//     else if (ch >= "0" && ch <= "9") hasDigit = true;
//     else if (specials.includes(ch)) hasSpecial = true;
//   }

//   return hasUpper && hasLower && hasDigit && hasSpecial;
// }

// console.log(checkPassword("Anshu@123"));

// const day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("Today is monday");
//     break;
//   case "Tuesday":
//     console.log("Today is tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is thursday");
//     break;
//   default:
//     console.log("Maze kar bhai");
// }

// let a = 10
// var b = 20
// function hello(){
// //   console.log("1", a)
//   console.log("2", b)
//   let a = 50
//   var b = 100

//   console.log("3", a)
//   console.log("4", b)

// }

// hello()

// function pasStr(str) {
//   let res = new Set();
//   let final = [];
//   for (let i = 0; i < str.length; i++) {
//     let st = "";
//     for (let j = i; j < str.length; j++) {
//       st += str[j];
//     }
//     let rev = st.split("").reverse().join("");
//     if (rev == st) {
//       res.add(st);
//     }
//   }
//   return [...res];
// }

// console.log(pasStr("abccba"));

// let text = "Code";
// console.log(text.charAt(10));
// console.log(text[10]);
// console.log(text.charAt(-1));
// console.log(text[-1]);
// console.log(text["1"]);
// console.log(text.charAt("1"));

let x = "5";
let y = +x;
console.log(typeof y);
console.log(typeof x);
