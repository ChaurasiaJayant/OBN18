// console.log(x);
// console.log(y);
// var x = 10;
// let y = 20;

// function test() {
//   console.log(x);
//   console.log(y);
//   var x = 10;
//   let y = 20;
// }
// test();

// let x = 10;
// function outer() {
//   let x = 20;
//   function inner() {
//     let x = 30;
//     console.log(x);
//   }
//   inner();
//   console.log(x);
// }
// outer();
// console.log(x);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1.push(4);
// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);

// let nums = [5, 2, 8, 1, 9];
// console.log(nums.sort());
// console.log(nums);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.slice(1, 4);
// console.log(result);
// console.log(arr);

// let str = "   Hello World     ";
// console.log(str.trim().length);
// console.log(str.length);

// let text = "Apple,banana,mango";
// let fruits = text.split(",");
// console.log(fruits[1]);
// console.log(fruits.join("-"));

// let name = "javascript";
// console.log(name.slice(0, 4));
// console.log(name.slice(-6));
// console.log(name.substring(4, 10));

// let obj1 = { name: "Ram", age: 20 };
// let obj2 = obj1;
// obj2.age = 25;
// console.log(obj1.age);
// console.log(obj2.age);

let person = {
  name: "Sita",
  marks: {
    math: 90,
    science: 85,
  },
};
// console.log(person.marks.math);
// console.log(person["maths"]["science"]);

// console.log(person["marks"]["science"]);

// let user = { name: "Krishna" };
// delete user.name;
// console.log(user.name);
// console.log(user);

// function multiply(a, b) {
//   return a * b;
//   console.log("After Return");
// }

// let result = multiply(2, 5);
// console.log(result);

// function greet(name) {
//   if (!name) {
//     return "Hello Guest";
//   }
//   return "Hello " + name;
// }

// console.log(greet());
// console.log(greet("Ram"));

// let count = 0;
// function increment() {
//   count++;
// }
// increment();
// increment();
// console.log(count);

// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }

// console.log(factorial(1));

// function removee(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr1.includes(arr[i])) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }

// let arr = [];
// console.log(removee(arr));

// function capital(str) {
//   return str
//     .split(" ")
//     .map((el) => el[0].toUpperCase() + el.slice(1))
//     .join(" ");
// }

// let str = "hello world";
// console.log(capital(str));

// function secondMax(arr) {
//   let max = Math.max(arr[0], arr[1]);
//   let sMax = Math.min(arr[0], arr[1]);

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//       sMax = max;
//       max = arr[i];
//     }
//     if (arr[i] !== max && arr[i] > sMax) {
//       sMax = arr[i];
//     }
//   }
//   return sMax;
// }

// let arr = [10, 5, 20, 8, 15];
// console.log(secondMax(arr));

function anagrams(str1, str2) {
  str1.toLowerCase().trim();
  //   let s1 = str1.sort((a, b) => {
  //     return a - b;
  //   });

  //   let s2 = str2.sort((a, b) => {
  //     return a - b;
  //   });
  //   if (s1 == s2) {
  //     return true;
  //   } else return false;

  let aa = str1.toLowerCase().split("").sort().join("");
  let bb = str2.toLowerCase().split("").sort().join("");
  if (aa == bb) {
    return true;
  } else return false;
}

let str1 = "A gentleman";
let str2 = "Elegant man";
console.log(anagrams(str1, str2));
