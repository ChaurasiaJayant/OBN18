// write a function that takes a string as a input return the count of unique characters

const str = "Hello World";

function uniqueCharacters(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str[i]);
  }
  return set.size;
}

console.log(uniqueCharacters(str));

//  SHORTCUT
console.log(new Set(str).size);

str = -"Hehe";
console.log(new Set(str.toLowerCase()).size);

//   If a array has duplicate or not
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sizee = arr.length;
if (new Set(arr).size == sizee) {
  console.log(true);
} else console.log(false);

// given an unsorted array of integers , find the length of the longest consecutive elements sequence . it should run in O(n) time

let arr = [100, 4, 200, 1, 3, 2];
function longestSeq(nums) {
  let maxLength = 0;
  let newSet = new Set(nums);

  for (let num of nums) {
    if (!newSet.has(num - 1)) {
      let currentNum = num;
      let currLength = 1;

      while (newSet.has(currentNum + 1)) {
        currentNum++;
        currLength++;
      }
      maxLength = Math.max(maxLength, currLength);
    }
  }
  return maxLength;
}

//1. Check if an array has duplicates
let arr = [1, 2, 3, 4, 5];
function checkDup(arr) {
  let len = arr.length;
  let set = new Set(arr);
  if (len == set.size) {
    return "No duplicacy";
  } else {
    return "Duplicate";
  }
}
// console.log(checkDup(arr));

//2. Count the number of unique elements in an array
let arr2 = [1, 2, 3, 4, 1, 7, 8, 9, 1, 2, 3, 4, 10];
function uniqueEl(arr) {
  let set = new Set(arr);
  return set.size;
}
console.log(uniqueEl(arr2));

// 3.  Remove duplicates from an array and return a new array
let arr3 = [1, 2, 3, 4, 1, 7, 8, 9, 5, 1, 6, 2, 3, 4, 10];
function removeDup(arr) {
  let set = new Set(arr);
  return [...set];
}
console.log(removeDup(arr3));

// 4.   Convert an array into a Set and print it
let arr4 = [1, 2, 3, 4, 1, 7, 8, 9, 1, 2, 3, 4, 10];
function convertIntoSet(arr) {
  let set = new Set(arr);
  return set;
}
console.log(convertIntoSet(arr4));

// 5.   Check if a value exists in a Set
function existence(set, val) {
  return set.has(val);
}

// 6.  Extract all unique elements from an array   (elements that appear only once)
let arr6 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

function extract(arr) {
  let set = new Set();
  for (let num of arr) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return set;
}

console.log(extract(arr6));
let arr66 = [1, 2, 3, 4, 5, 1, 2, 3, 9];

function extractUnique(arr) {
  let seen = new Set();
  let repeated = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      repeated.add(num);
    } else {
      seen.add(num);
    }
  }

  let result = [];
  for (let num of seen) {
    if (!repeated.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(extractUnique(arr66)); // [4, 5, 9]

// 7.   Extract all duplicate elements from an array (each duplicate should appear only once in output)
let arr7 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
function removeDup(arr) {
  let seen = new Set();
  let removed = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      removed.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  return removed;
}
console.log(removeDup(arr7));

// 8.  Find the first repeating element
let arr8 = [1, 2, 3, 4, 5, 2, 1, 2, 3];

function firstRepeating(arr) {
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
    } else return arr[i];
  }
}
console.log(firstRepeating(arr8));

// 9.    Find the last repeating element
let arr9 = [1, 2, 3, 4, 5, 2, 1, 2, 3, 6, 5];
function lastRepeating(arr) {
  let seen = new Set();
  let rem = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
    } else {
      rem.add(arr[i]);
    }
  }
  return [...rem].pop();
}
console.log(lastRepeating(arr9));

// 10.   Find all elements that appear more than once
let arr10 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
function moreThan1(arr) {
  let original = new Set();
  let local = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!original.has(arr[i])) {
      original.add(arr[i]);
    } else {
      local.add(arr[i]);
    }
  }
  return [...local];
}
console.log(moreThan1(arr10));

// Level 3: Comparison & Intersection

// 11.    Check if two arrays have any common element → boolean
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 4, 8];
function commonElement(arr1, arr2) {
  let m1 = new Set(arr1);

  for (let vals of arr2) {
    if (m1.has(vals)) {
      return true;
    }
  }
  return false;
}
console.log(commonElement(arr1, arr2));

// 12.    Find the intersection of two arrays → array
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
function intersection(arr1, arr2) {
  let set = new Set(arr2);
  let arr = [];

  for (let num of arr1) {
    if (set.has(num)) {
      arr.push(num);
    }
  }

  return arr;
}
console.log(intersection(arr1, arr2));

// 13.   Find the union of two arrays → array
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
function union(arr1, arr2) {
  let set = new Set(arr1);

  for (let num of arr2) {
    set.add(num);
  }
  return [...set];
}
console.log(union(arr1, arr2));

//  14.  Find elements present in first array but not in second → array
let arr1 = [1, 2, 3, 6, 8, 9];
let arr2 = [2, 3, 4];
function notInSecondArray(arr1, arr2) {
  let arr = [];
  let set = new Set(arr2);
  for (let num of arr1) {
    if (!set.has(num)) {
      arr.push(num);
    }
  }
  return arr;
}
console.log(notInSecondArray(arr1, arr2));

//  15. Check if two arrays contain the same unique elements → boolean
let arr1 = [1, 2, 3];
let arr2 = [1, 3, 4];
function sameUnique(arr, arr2) {
  let set = new Set(arr);
  let set2 = new Set(arr2);
  if (set.size !== set2.size) {
    return false;
  }
  for (let nums of arr2) {
    if (!set.has(nums)) {
      return false;
    }
  }
  return true;
}
console.log(sameUnique(arr1, arr2));

// 🔹 Level 4: Logical Thinking with Set
// 16.   Check if an array has all unique elements → boolean
let arr16 = [1, 2, 3, 4, 5];
function checkUnique(arr) {
  let arrSize = arr.length;
  let set = new Set(arr);
  if (arrSize == set.size) {
    return true;
  } else return false;
}
console.log(checkUnique(arr16));

// 17.    Find the frequency count of elements → object
let arr17 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
function frequencyCounter(arr) {
  let freq = {};

  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  return freq;
}
console.log(frequencyCounter(arr17));

// 18.    Find the element with maximum repetition → number / element
let arr18 = [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5];
function maxRepetition(arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  let max = -Infinity;
  let number;
  for (let [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      number = Number(key);
    }
  }
  return number;
}
console.log(maxRepetition(arr18));

//  19.    Find missing numbers from 1 to N → array
let arr19 = [1, 2, 3, 5, 6, 7, 8];
let n = 10;
function findMissing(arr, n) {
  let set = new Set(arr);
  let ans = [];

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }
  return ans;
}
console.log(findMissing(arr19, n));
