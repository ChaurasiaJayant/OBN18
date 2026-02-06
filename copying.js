// let a = 10;
// b = a;
// b = 90;
// // console.log(a);
// console.log(b);

// let obj = { name: "Jayant" };
// let obj2 = obj;

// obj2.name = "Sam";

// console.log(obj);
// console.log(obj2);

//                            SHALLOW COPY

// let user1 = {
//   name: "Jayant",
//   address: {
//     city: "Lucknow",
//   },
// };

// let user2 = { ...user1 };
// user2.name = "Anshu";
// user2.address.city = "Gorakhpur";
// console.log(user1);
// console.log(user2);

//               DEEP CLONE
// let user1 = {
//   name: "Jayant",
//   address: {
//     city: {
//       town: {
//         area: {
//           village: "Mangalpur",
//         },
//       },
//     },
//   },
// };
// let user2 = { ...user1 };
// console.log(user2);

// let user2 = structuredClone(user1);
// user1.address.city = "Lucknow";
// console.log(user1);
// console.log(user2);

// const original = {
//   name: "police",
//   age: 0,
//   address: {
//     city: "nyc",
//     state: {
//       mayor: "mamdani",
//       song: {
//         name: "dhoom",
//         movie: "dhoom",
//       },
//     },
//   },
// };

// const spreadClone = { ...original };
// console.log(spreadClone);

// let arr1 = [{ a: 1 }, { b: 2 }];
// let arr2 = [...arr1];

// arr2[0].a = 99;
// console.log(arr1);
// console.log(arr2);

// let a = { x: 20 };
// let b = { ...a };
// b.x = 10;
// console.log(a);
// console.log(b);

// let a = {
//   user: {
//     name: "Jay",
//   },
// };
// let b = { ...a };

// b.user.name = "Anshu";
// console.log(a);
// console.log(b);

// let a = [1, 2, 3];
// let b = a.slice();
// b[0] = 10;
// console.log(a);
// console.log(b);

// let a = [{ score: 10 }, { score: 20 }];
// let b = { ...a };
// b[0].score = 100;
// console.log(a);
// console.log(b);

// let a = { x: 10 };
// let b = a;
// b.x = 99;
// console.log(a);
// console.log(b);

// let a = {
//   user: { name: "Jay" },
// };

// let b = { ...a };
// let c = { ...b };

// c.user.name = "Sam";
// console.log(a);
// console.log(b);
// console.log(c);

// let a = {
//   list: [{ id: 1 }, { id: 2 }],
// };

// let b = structuredClone(a);
// let c = { ...b };

// c.list[0].id = 99;

// console.log(a);
// console.log(b);
// console.log(c);

// let a = [{ val: 1 }];
// let b = [...a];
// let c = [...b];

// c[0].val = 500;
// console.log(a);
// console.log(c);

// let a = { arr: [1, 2, 3] };
// let b = { ...a };

// b.arr = [9, 9, 9];
// b.arr[0] = 100;
// console.log(a);
// console.log(b);

// let a = {
//   info: { score: 10 },
// };

// let b = { ...a };
// let c = structuredClone(b);
// c.info.score = 50;

// let a = [{ data: [1, 2] }];
// let b = [...a];
// let c = structuredClone(b);

// b[0].data[0] = 99;

// const arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr);
// console.log(b);
// console.log(c);

// function for deep copy
function deepCloneFunc(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let clone = Array.isArray(obj) ? [] : {};

  let keys = Object.keys(obj);

  keys.forEach((key) => {
    clone[key] = deepCloneFunc(obj[key]);
  });
  return clone;
}
const obj = {
  a: "string",
  b: 2,
  c: {
    d: 1,
    e: 5,
    f: {
      g: 85686,
      h: {
        i: 11,
        j: {
          k: 12,
        },
      },
    },
  },
};

console.log("running", JSON.stringify(deepCloneFunc(obj), null, 2));
