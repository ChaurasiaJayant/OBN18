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

// console.log(duplicates([1, 1, 2]));

// . *** First missing positive
// Example: [3,4,-1,1] → 2

function missing(arr) {
  //   arr.sort((a, b) => {
  //     return a - b;
  //   });

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 0) continue;
  //     if (arr[i + 1] !== arr[i] + 1) {
  //       return arr[i] + 1;
  //     }
  //   }
  // better approach
  let set = new Set(arr);

  for (let i = 1; i <= arr.length; i++) {
    if (!set.has(i)) return i;
  }
}
// console.log(missing([3, 4, -1, 1]));

//  Check sorted
// Example: [1,2,3,4] → true

function checkSorted(arr) {
  //   for (let i = 1; i < arr.length - 1; i++) {
  //     if (!(arr[i - 1] < arr[i]) || !(arr[i + 1] > arr[i])) {
  //       return false;
  //     }
  //   }
  //   return true;

  // better approach

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
// console.log(checkSorted([1, 2, 3, 1]));
// console.log(checkSorted([1, 2, 3, 4])); // true
// console.log(checkSorted([1, 2, 3, 1]));

function majorityElement(arr) {
  let ans = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (count == 0) {
      ans = arr[i];
      count = 1;
    }

    if (arr[i] == ans) count++;
    else count--;
  }
  return ans;
}
// console.log(majorityElement([3, 3, 4]));

// *** Frequency count
// Example: [1,1,2,2,2,3]

function frequencyCount(arr) {
  let obj = {};

  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return obj;
}
// console.log(frequencyCount([1, 1, 2, 3, 1, 1, 2, 3]));

function intervals(arr) {
  arr.sort((a, b) => {
    return a[0] - b[0];
  });
  return arr;
}
console.log(
  intervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
