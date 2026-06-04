// reverse a string

function reverseString(str) {
  let rev = str.split("").reverse().join("");
  return str == rev;
}
// console.log(reverseString("nitin"));

// checkPalindrome

function checkPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }

    return true;
  }
}

// console.log(checkPalindrome("jayant"));

// First non-repeating character
// Example: aabbccddeefg → f

function nonRepeating(str) {
  let obj = {};

  for (let ch of str) {
    if (obj[ch]) {
      obj[ch]++;
    } else {
      obj[ch] = 1;
    }
  }

  for (let [key, val] of Object.entries(obj)) {
    if (val === 1) {
      return key;
    }
  }
}
// console.log(nonRepeating("aabbccjddeefg"));

//  Count vowels
// Example: beautiful → 5

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels("beautifulei"));

//  Longest substring without repeating characters
// Example: abcabcbb → abc

function longestSubstring(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      arr.push(str.slice(i, j));
    }
  }
  return arr;
}

//  Check anagram
// Example: listen,silent → true

function anagram(str, str2) {
  let rev = str.split("").sort().join("");
  let strr = str2.split("").sort().join("");

  return rev === strr;
}
// console.log(anagram("naman", "manan"));

// Convert string to integer
// Example: 1234 → 1234

function stringInteger(str) {
  return Number(str);
}
// console.log(stringInteger("1234"));

// console.log(Number("123abc"));
// console.log(parseInt("123abc"));

// Capitalize first letter each word
// Example: hello world → Hello World

function capitalize(str) {
  //   let arr = str.split(" ");

  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  //   }

  //   return arr.join(" ");

  // second approach
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(capitalize("hello world"));

//  Reverse words in sentence
// Example: hello world → world hello

function reverseWords(str) {
  let rev = str.split(" ").reverse().join(" ");
  return rev;
}
// console.log(reverseWords("hello world"));

// Only digits
// Example: 12345 → true

function onlyDigits(str) {
  return typeof str === "number";
}
// console.log(onlyDigits(12345));

//  * Remove non-alpha chars
// Example: abc123!@# → abc

function nonAlpha(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      res += str[i];
    }
  }
  return res;
}

// console.log(nonAlpha("Aabc123!@#"));

function validPalindrome(str) {
  let ch = "";
  for (let c of str.toLowerCase()) {
    if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
      ch += c;
    }
  }

  let i = 0;
  let j = ch.length - 1;

  while (i <= j) {
    if (ch[i] == ch[j]) {
      i++;
      j--;
    } else {
      return "Not palindrome";
    }
  }
  return "palindrome";
  //   console.log(str);
}
// console.log(validPalindrome("A man, a plan, a canal: Panama"));

//  String compression
// Example: aabcccccaaa → a2b1c5a3

function stringCompression(str) {
  let result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      result.push(str[i]);
      if (count > 1) {
        result.push(count);
      }
      count = 1;
    }
  }
  return result.join("");
}

// console.log(stringCompression("abbbccd"));

//  Implement indexOf
// Example: hello,l → 2

function idxOf(str, wordd) {
  let idx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == wordd) {
      idx = i;
      return idx;
    }
  }
  return idx;
}
// console.log(idxOf("hello", "o"));

// ---------------------Important------------------------
// . *** Max product of two integers
// Example: [1,20,3,4] → 80

// function maxProduct(arr) {
//   arr.sort((a, b) => {
//     return b - a;
//   });

//   return arr[0] * arr[1];
// }

function maxProduct(arr) {
  let max = -Infinity;
  let sMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax && arr[i] !== max) {
      sMax = arr[i];
    }
  }

  return max * sMax;
}

// console.log(maxProduct([1, 20, 3, 4]));

// Two Sum
// Example: [2,7,11,15],9 → [2,7]

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return [];
// }

function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [arr[i], complement];
    }

    map.set(arr[i], i);
  }
  return [];
}
// console.log(twoSum([2, 7, 11, 15], 9));

//  Contains duplicates
// Example: [1,2,3,1] → true

// function containsDuplicate(arr) {
//   let map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       return true;
//     } else {
//       map.set(arr[i], i);
//     }
//   }
//   return false;
// }

// using set
function containsDuplicate(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(arr[i]);
    }
  }
  return false;
}
// console.log(containsDuplicate([1, 2, 3, 1, 7]));

function moveZeroes(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}
//console.log(moveZeroes([0, 1, 0, 3, 12]));

function intersection(arr1, arr2) {
  let count = 0;
  let set = new Set(arr2);

  for (let el of new Set(arr1)) {
    if (set.has(el)) count++;
  }

  return count;
}

// console.log(intersection([1, 2, 2, 1], [2, 2]));

//  Union of arrays
// Example: [1,2,3],[2,3,4] → [1,2,3,4]

function union(arr1, arr2) {
  let set = new Set(arr1);

  for (let num of arr2) {
    set.add(num);
  }

  return [...set];
}

// console.log(union([1, 2, 3], [1, 2, 3, 4]));

//  Missing number
// Example: [3,0,1] → 2
function missingNumber(arr) {
  //   let set = new Set(arr);
  //   let n = arr.length;

  //   for (let i = 0; i <= n; i++) {
  //     if (!set.has(i)) {
  //       return i;
  //     }
  //   }

  // second approach =-------------

  let n = arr.length;

  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, sum) => {
    return acc + sum;
  }, 0);

  return expectedSum - actualSum;
}

// console.log(missingNumber([3, 4, 5, 2, 7, 9, 6, 1, 0]));

// *** Longest increasing subsequence
// Example: [10,9,2,5,3,7,101,18] → 4

function LIS(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i] && arr[j] > arr[j - 1]) temp++;
    }

    if (temp > count) {
      count = temp;
    }
  }
  return count;
}

// console.log(LIS([10, 9, 2, 5, 3, 7, 101, 18])) ;

function reverseArrayRight(arr, k) {
  reverse(0, arr.length - 1, arr);
  reverse(0, k - 1, arr);
  reverse(k, arr.length - 1, arr);

  return arr;
}
function reverse(left, right, arr) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7], 3));

function reverseLeft(arr, k) {
  let n = arr.length - 1;
  reverse(0, n, arr);
  reverse(0, k, arr);
  reverse(k + 1, n, arr);

  return arr;
}

// console.log(reverseLeft([1, 2, 3, 4, 5, 6, 7], 3));

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
// console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));

function findMedian(arr1, arr2) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  let mid = result.length;
  if (mid % 2 == 1) {
    return result[Math.floor(mid / 2)];
  } else {
    return (result[mid / 2 - 1] + result[mid / 2]) / 2;
  }
}

// console.log(findMedian([1, 2], [3, 4]));
// console.log(findMedian([1, 3], [2]));

function duplicates(arr) {
  //   let res = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (!res.includes(arr[i])) {
  //       res.push(arr[i]);
  //     }
  //   }
  //   return res;

  // second approach-----------
  return [...new Set(arr)];
}

console.log(duplicates([1, 1, 2]));
