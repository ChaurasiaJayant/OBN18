// 1. *** Frequency count using object
// Example: [1,2,2,3]

function frequency(arr) {
  let obj = {};

  for (let el of arr) {
    if (obj[el]) {
      obj[el] = obj[el] + 1;
    } else {
      obj[el] = 1;
    }
  }
  return obj;
}
// console.log(frequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

function groupAnagrams(arr) {
  let obj = {};

  for (let el of arr) {
    let key = el.split("").sort().join("");

    if (obj[key]) {
      obj[key].push(el);
    } else {
      obj[key] = [el];
    }
  }
  return Object.values(obj);
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Deep clone object	{a:{b:1}}	{a:{b:1}}
//  (separate memory)

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// better approach

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let keys in obj) {
    copy[keys] = deepClone(obj[keys]);
  }

  return copy;
}

console.log(deepClone());
console.log(typeof [1, 2, 3]);
