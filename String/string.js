// let samples = "This is a saple string for javascript";

// console.log(samples);

// const text = "Hello world,weclome to the world of world where world is a world";

// console.log(text.indexOf("is"));
// console.log(text.lastIndexOf("world"));

// const email = "abc@gmail.com";

// if (email.includes("@") && email.includes(".")) {
//   console.log("Valid email");
// } else {
//   console.log("Invalid email");
// }

// const userName = "best.player"

//starts with

// const url = "http://localhost:3000";
// console.log(url.startsWith("http"));

// function checkSecurity(url){

// }

// const filee = "document.jpeg";

// function extensionCheck(filee) {
//   if (filee.endsWith("pdf") || filee.endsWith("docx")) {
//     console.log("Document");
//   } else if (filee.endsWith("png") || filee.endsWith("jpeg")) {
//     console.log("Images");
//   } else console.log("Invalid format");
// }

// extensionCheck(filee);

// const mailAdd = "jayant@example.com";

// const AA = mailAdd.indexOf("@");

// const userName = mailAdd.slice(0, AA);
// const domain = mailAdd.slice(AA + 1);

// console.log(userName);
// console.log(domain);

// const details = mailAdd.split("@");
// console.log(details[0]);
// console.log(details[1]);

// const car = {
//   brand: "Tata",
//   model: "BS6",
//   info: "The best car",

//   start() {
//     console.log(`${this.brand}  ${this.model} is starting....`);
//   },
//   carInfo() {
//     return `Brand is ${this.brand} and model is ${this.model}`;
//   },
// };

// car.start();
// console.log(car.carInfo());

// const user = {
//   firstName: "Brock",
//   lastName: "Lesnar",

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },

//   set fullName(name) {
//     let fName = name.split(" ");
//     this.firstName = fName[0];
//     this.lastName = fName[1];
//   },
// };

// console.log(user.fullName);
// user.fullName = "John Cena";
// console.log(user.fullName);

// const bankAccount = {
//   balance: 10000,

//   set deposit(amount) {
//     this.balance = this.balance + amount;
//   },

//   set withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Insuffficient balance");
//       return;
//     } else {
//       this.balance = this.balance - amount;
//     }
//   },
// };

// console.log(bankAccount.balance);
// bankAccount.deposit = 8000;
// console.log(bankAccount.balance);

// console.log(text.length);
// console.log(text.charAt(1));

// console.log(text.charCodeAt(1));

// console.log(codePointAt(0));

// console.log(text.at(1));

// const text1 = "Hello";
// const text2 = "World";
// console.log(text1.concat(" " + text2));

// console.log(text.slice(0, 5));
// console.log(text.slice(-5));

// let text = "hello world";

// console.log(text.substring(6));

// console.log(text.toUpperCase());

// console.log(text.trimStart());
// console.log(text.trimStart() + "World");
// console.log(text.trimEnd());

let text = "5Xojl";
// let padded = text.padStart(4, "0");
// console.log(padded);

let num = 8;
let txt = num.toString();
// console.log(txt.padStart(5, "X"));
// console.log(txt.padEnd(5, "X"));

// let textt = "Hello World";
// console.log(textt.repeat(2))
//

// let txtt = "cat,dog,cat,cat,donkey,cat,cat,monkey,dog";
// console.log(txtt.replaceAll("cat", "meow"));

function calculateTicketPrice(age, isWeekend) {
  let price = 0;
  if (age <= 0) return "Invalid input";

  if (age <= 12) {
    //child
    price = 100;
    if (isWeekend) {
      price += price * 0.2;
    }
  } else if (age >= 13 && age <= 17) {
    //teen
    price = 150;
    if (isWeekend) {
      price += price * 0.2;
    }
  } else if (age >= 18 && age <= 59) {
    //adult
    price = 200;
    if (isWeekend) {
      price += price * 0.2;
    }
  } else if (age >= 60) {
    //Senior
    price = 120;
    if (isWeekend) {
      price += price * 0.2;
    }
  }
  return price;
}

// console.log(calculateTicketPrice(25, true));

function checkPassword(password) {
  let obj = {
    passLength: password.length,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
    strength: "",
  };

  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      obj.hasUpper = true;
    } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      obj.hasLower = true;
    } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      obj.hasNumber = true;
    } else if ("!@#$%^&*".includes(password[i])) {
      obj.hasSpecial = true;
    }
  }

  let types = 0;
  if (obj.hasUpper) types++;
  if (obj.hasLower) types++;
  if (obj.hasNumber) types++;
  if (obj.hasSpecial) types++;

  if (obj.passLength >= 8 && types >= 4) {
    obj.strength += "Strong";
  } else if (obj.passLength >= 6 && types >= 2) {
    obj.strength += "Medium";
  } else {
    obj.strength += "Weak";
  }

  return obj;
}

// console.log(checkPassword("hello1"));

function generateReport() {
  const employees = [
    { name: "Amit", department: "IT", salary: 50000, yearsWorked: 3 },
    { name: "Priya", department: "HR", salary: 45000, yearsWorked: 5 },
    { name: "Rahul", department: "IT", salary: 60000, yearsWorked: 2 },
    { name: "Sneha", department: "FInance", salary: 55000, yearsWorked: 4 },
  ];

  //   console.log(employees[0].salary);
}

function findPairs(array1, array2, x) {
  let arr = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j <= array2.length; j++) {
      if (array1[i] + array2[j] == x) {
        arr.push([array1[i], array2[j]]);
      }
    }
  }
  //   arr = arr.flat();
  return arr;
}

let array1 = [1, 2, 4, 5, 7];
let array2 = [5, 6, 3, 4, 8];
let x = 9;

// console.log(findPairs(array1, array2, x));

let str = "stole now noch ";
str = str.trim().split(" ");
// console.log(str);

function Alphabets(str) {
  let line = "";
  for (let i = 97; i <= 122; i++) {
    line += 0;
  }

  for (let j = 0; j < str.length; j++) {}
  console.log(line);
}

function getStrings(arr) {
  let first = "qwertyuiop";
  let second = "asdfghjkl";
  let third = "zxcvbnm";

  for (let i = 0; i < arr.length; i++) {
    if (first.includes(arr[i])) {
      console.log(arr[i]);
    } else if (second.includes(arr[i])) {
      console.log(arr[i]);
    } else if (third.includes(arr[i])) {
      console.log(arr[i]);
    } else return -1;
  }
}

let arr1 = ["monkey", "glad"];
// getStrings(arr1);

function bubbleSort(arr, n) {
  //Write your code here
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  arr.map((el) => console.log(el));
}

let arr = [9, 5, 3, 6, 1, 2, 10];
// bubbleSort(arr, 7);

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minElem = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minElem] > arr[j]) minElem = j;
    }
    if (minElem != i) {
      let temp = arr[minElem];
      arr[minElem] = arr[i];
      arr[i] = temp;
    }
  }
  console.log(arr);
}

// selectionSort(arr);

let gfg = "Jayant";
// console.log(gfg.split("").join("-").toLocaleUpperCase());

// let a = ["HTML", "CSS", "JS"];
// let b = ["Node.js", "Express.js"];
// let b = a[a.length - 1];
// a[2] = "Bootstrap";
// a.push("Node.js");
// a.unshift("React.js");
// let lst = a.pop();
// let lst = a.shift();

// let slicee = a.splice(1, 1);
// console.log(slicee);

// a.length = 8;
// a.length = 2;

// console.log(a.length);
// console.log(a);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// a.forEach((x) => console.log(x));

// let c = a.concat(b);
// console.log(c.toString());

// console.log(Array.isArray(c));

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = a.slice(2, a.length);

// console.log(a.slice(5, 7));
// console.log(a.reverse());
// console.log(b);

// strings

let s = "Javascript";
let b = "ES6";

// console.log(s.length);
// console.log(b + " : " + s);

let ss = "My name is 'jayant'";
let s2 = 'My name is "jayant"';
let s3 = "My name is \\jayant\\";

// console.log(ss);
// console.log(s2);
// console.log(s3);

// let longString = "My name is jayant And i am an aspiring software developer";
// console.log(longString);

let s5 = "Jayant Chaurasia";
// let sss = s5.substring(6);
// console.log(sss);

let name = "AnshU";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

let a = "def abc abc";
// console.log(a.indexOf("abc"));

let sen =
  "A tree is not a tree when it is planted , a tree  becomes tree after some time";
// console.log(sen.replace(/tree/g, "plant"));

let h = "      Hello World   ";
// console.log(h.trim());
// console.log(h.trimStart() + "Anshu");
// console.log(h.trimEnd() + " Jayant");

s = "Learn javascript";
// console.log(s.charAt(6));

s = "Anshu";
s1 = "Anshu";

// console.log(s == s1);
// console.log(s === s1);

str = new String("JayantChaurasia");
console.log(str);
