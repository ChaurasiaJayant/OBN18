// 1.    Create a Map from key–value pairs → Map

let inp = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

function arrayToMap(arr) {
  return new Map(arr);
}
console.log(arrayToMap(inp));

//   2.   Add/update elements using set() → Map
let inp = { a: 1, b: 2 };
function update(inp) {
  let ans = new Map(Object.entries(inp));
  ans.set("c", 3);
  ans.set("a", 5);
  return ans;
}
console.log(update(inp));

// 3.    Get value by key using get() → value / undefined
let inp = { x: 10, y: 20 };
function getVal(inp) {
  let map = new Map(Object.entries(inp));
  return map.get("y");
}
console.log(getVal(inp));

//  4.    Check key existence using has() → boolean
let inp = { p: 100, q: 200 };
let key = "p";
function checkKeys(inp, key) {
  let keys = key.toString();
  let map = new Map(Object.entries(inp));
  if (map.has(keys)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkKeys(inp, key));

// 5.   Delete a key using delete() → boolean
let inp = { a: 1, b: 2, c: 3 };
let delKey = "d";
function deleteKey(obj, del) {
  let map = new Map(Object.entries(obj));
  if (map.has(del)) {
    map.delete(del);
  } else {
    return "Nothing to delete";
  }
  return map;
}
console.log(deleteKey(inp, delKey));

//  6.  Clear all entries using clear() → empty Map
let inp = { a: 1, b: 2, c: 3 };
function deleteAllEntries(inp) {
  let map = new Map(Object.entries(inp));
  let deleted = map.clear();
  return map;
}
console.log(deleteAllEntries(inp));

// 7.   Convert Map keys to array → array
let inp = { name: "Jayant", age: 22, city: "Lucknow" };
function keysToArray(inp) {
  let map1 = new Map(Object.entries(inp));
  return map1.size;
}
console.log(keysToArray(inp));

// 8.   Convert Map values to array → array
let inp = { name: "Jayant", age: 22, city: "Lucknow" };
function mapToArray(inp) {
  let map = new Map(Object.entries(inp));
  return [...map.keys()];
}
console.log(mapToArray(inp));

//  9.    Convert Map to [key, value] array → 2D array
let inp = { a: 5, b: 10, c: 15 };
function mapArray(inp) {
  let arr = [];
  let map = new Map(Object.entries(inp));
  for (let [key, value] of map) {
    arr.push([key, value]);
  }
  return arr;
}
console.log(mapArray(inp));

// 10.  Count frequency of array elements using Map → Map (element → count)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function frequencyCounter(arr) {
  let map = new Map();
  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  return map;
}
console.log(frequencyCounter(arr));
