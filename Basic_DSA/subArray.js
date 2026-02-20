function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sub = [];
    for (let j = i; j < arr.length; j++) {
      sub.push(arr[j]);
      console.log(sub);
    }
  }
}
// console.log(subArray([1, 2, 3]));
function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      console.log(arr.slice(i, j));
    }
  }
}
// subArray([1, 2, 3]);

// Maximum subArray problem

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function subArray(arr) {
  const n = arr.length;
  let maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
// console.log(subArray(arr));

// OPTIMAL way    KADANE`s Algorithm

function subArraySumOptimal(arr) {
  let maxSum = arr[0];
  let currSum = 0;

  for (let num of arr) {
    currSum += num;

    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}
// console.log(subArraySumOptimal(arr));

// Print the Maximum Subarray (Not Just the Sum)

function printSubArray(arr) {
  const n = arr.length;

  let maxSum = -Infinity;
  let maxArray = [];

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];

      if (sum >= maxSum) {
        maxSum = sum;
        maxArray.push(arr.slice(i, j + 1));
      }
    }
  }
  return maxArray[maxArray.length - 1];
}
// console.log(printSubArray(arr));

function printSubArrOpt(arr) {
  let maxSum = -Infinity;
  let start = 0;
  let end = 0;
  let tempStart = 0;
  let currSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }

    if (currSum < 0) {
      currSum = 0;
      tempStart = i + 1;
    }
  }
  return arr.slice(start, end + 1);
}
// console.log(printSubArrOpt(arr));

// Given an array, find all leaders.
// Leader = An element that is greater than all elements to its right.

function findLeaders(arr) {
  let leaders = [];
  let maxRight = arr[arr.length - 1];

  leaders.push(maxRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    {
      if (arr[i] > maxRight) {
        maxRight = arr[i];
        leaders.push(maxRight);
      }
    }
  }
  return leaders.reverse();
}

// console.log(findLeaders([10]));

// Question: Count Subarrays with Sum = K
// Problem
// Given an array and a number K, find the number of subarrays whose sum is exactly K.

function countSubarr(arr, k) {
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum == k) {
        cnt++;
      }
    }
  }
  return cnt;
}
// console.log(countSubarr([1, 1, 1], 2));

// Question: Longest Subarray With Sum = K
// Problem
// Given an array and a number K, return the length of the longest subarray whose sum is exactly K.

function longestSubArr(arr, k) {
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum == k) {
        let len = j - i + 1;
        if (len > maxLen) {
          maxLen = len;
        }
      }
    }
  }
  return maxLen;
}
// console.log(longestSubArr([1, -1, 5, -2, 3], 3));

// Question: Longest Subarray with Sum ≤ K (Positive Numbers Only)
// Problem

// Given an array of positive numbers and a number K, find the length of the longest subarray whose sum is ≤ K.

// Example
// arr = [1, 2, 1, 0, 1, 1, 0]
// k = 4
// ans = 5

function longestSubarray(arr, k) {
  let left = 0;
  let sum = 0;
  let maxLen = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];

      if (sum <= k) {
        let len = j - i + 1;
        if (len > maxLen) {
          maxLen = len;
        }
      }
    }
  }

  return maxLen;
}

console.log(longestSubarray([1, 2, 1, 0, 1, 1, 0], 4));
