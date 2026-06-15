// Promise.resolve(10)
//   .then((x) => x + 5)
//   .then(console.log);

// Promise.reject("Error")
//   .catch(console.log)
//   .finally(() => console.log("Done"));

// Promise.reject("Oops").then(console.log).catch(console.log);

// let p1 = Promise.resolve("Done");
// let p2 = Promise.reject("Nhi hua");
// let p3 = Promise.resolve("Last one");

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// const p1 = Promise.resolve("Done");
// const p2 = Promise.reject("API failure");
// const p3 = Promise.resolve("payments");

// Promise.all([p1, p2, p3]).then(console.log).catch(console.log);

// -----------Promise.allSettled------------

// const p1 = Promise.resolve("User");
// const p2 = Promise.reject("Failed");
// const p3 = Promise.resolve("payments");

// Promise.allSettled([p1, p2, p3]).then(console.log);

// ------------------Promise.any()--------------
// const p1 = Promise.reject("err");
// const p2 = Promise.reject("error");
// const p3 = Promise.reject("err");

// Promise.any([p1, p2, p3]).catch(console.log);

async function greet() {
  return "Hello";
}
let fn = greet();
console.log(fn);
