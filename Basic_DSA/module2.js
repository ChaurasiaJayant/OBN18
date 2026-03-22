function star(n) {
  if (n < 1) return;

  star(n - 1);
  helper(n);
}

function helper(n, line = "") {
  if (n < 1) {
    console.log(line);
    return;
  }
  line += n + " ";
  helper(n - 1, line);
  line += n;
}
// star(5);

function HOF(arr) {
  let odds = arr.filter((x) => x % 2 !== 0);
  let square = odds.map((x) => x * x);
  let sum = square.reduce((acc, sum) => acc + sum, 0);

  //   return {
  //     odds,
  //     square,
  //     sum,
  //   };

  console.log(odds);
}
// console.log(HOF([1, 2, 3, 4, 5]));
// HOF([1, 2, 3, 4, 5]);

function palStr(str) {
  let ans = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subString = str.slice(i, j);
      let reversed = subString.split("").reverse().join("");
      if (reversed === subString && reversed.length > 1) {
        ans.push(subString);
      }
    }
  }
  console.log(ans);
}
// palStr("abaab");

function freqSort(arr) {
  let obj = {};

  // Count frequency
  for (let el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }

  // Sort entries
  let entries = Object.entries(obj).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0]; // larger value first if same freq
    }
    return a[1] - b[1]; // smaller freq first
  });

  // Expand to array (simplified)
  let result = [];
  for (let [num, count] of entries) {
    for (let i = 0; i < count; i++) {
      result.push(Number(num));
    }
  }

  return result;
}

// console.log(freqSort([1, 2, 2, 4, 4, 4, 4, 3, 3, 3, 5, 5, 5]));

function freq(arr) {
  let map = new Map();
  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let entries = Array.from(map.entries()).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });
  let res = [];
  for (let [num, cnt] of entries) {
    for (let i = 0; i < cnt; i++) {
      res.push(Number(num));
    }
  }
  return res;
}
// console.log(freq([1, 2, 2, 3, 3, 4]));

function areAnagrams(str1, str2) {
  let map = new Map();
  let map2 = new Map();
  if (str1.length !== str2.length) {
    return false;
  }

  for (let el of str1) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  }
  for (let el of str2) {
    if (map2.has(el)) {
      map2.set(el, map2.get(el) + 1);
    } else {
      map2.set(el, 1);
    }
  }
  for (let ch of str1) {
    if (map.get(ch) !== map2.get(ch)) {
      return false;
    }
    return true;
  }
}
// console.log(areAnagrams("cat", "tact"));

function deepCopy(obj) {
  let res = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      res.push(...deepCopy(el));
    } else {
      res.push(el);
    }
  }
  return res;
}
// console.log(deepCopy([1, [2, [3, [4]], 5]]));

function recStr(str, res = "") {
  if (str.length === 0) return res;

  res += str[str.length - 1];
  return recStr(str.slice(0, str.length - 1), res);
}
// console.log(recStr("hi"));

function matrix(row, col) {
  let mat = [];
  let num = 1;

  for (let i = 0; i < row; i++) {
    mat[i] = [];
    for (let j = 0; j < col; j++) {
      mat[i][j] = num;

      num++;
    }
  }
  return mat;
}
// console.log(matrix(3, 4));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// console.log([...arr1, ...arr2]);

const myMap = new Map();

myMap.set("name", "John");
//set method is used for creating as well as updating (because of overriding)
myMap.set("name", "jack");
// console.log(myMap);

const a = {
  prop: "abc",
  inner: {
    innerProp: "mno",
  },
};

const b = { ...a };
b.prop = "hello";
b.inner.innerProp = "xyz";
console.log(a);
console.log(b);
