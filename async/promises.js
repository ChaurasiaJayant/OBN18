// let payment = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     function idFind() {
//       return true;
//     }

const { error } = require("node:console");
const { url } = require("node:inspector");

//     if (idFind()) {
//       resolve({
//         amount: 500,
//         pin: 123,
//         initiatePayment: "Make payment",
//         success: "Ho gya bhai",
//       });
//     } else {
//       reject(new Error("ID not found"));
//     }
//   }, 2000);
// });

// payment
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((amt) => {
//     console.log(amt.amount);
//     return amt.amount;
//   })
//   .then((len) => {
//     if (len < 1000) {
//       console.log("The amount is less than 1000");
//     }
//   });

function outer() {
  let name = "Vivek Namdev";

  function inner() {
    console.log(`My name is ${name}`);
  }
  return inner;
}

let out = outer();
// out();

let start = new Promise((resolve, reject) => {
  if (mobileInput()) {
    //here mobileInput will check whether the number is 10 digit or not if yes return true
    resolve();
  } else {
    reject(error);
  }
});

start
  .then((data) => {
    if (connectionSpeed()) return true;
  })
  .then(() => {
    if (webCamAccess() == "success") return true;
  })
  .then(() => {
    if (shareScreen() == "granted") return true;
  })
  .then(() => {
    if (testStarted()) {
      showQuestions();
    }
  })
  .catch((err) => console.error(err));

fetch("a")
  .then((a) => fetch(url))
  .then((b) => fetch(url))
  .then((c) => console.log(c));

async function getData() {
  const a = await fetch(url);
  const b = await fetch(url);
  const c = await fetch(url);
  console.log(c);
}
