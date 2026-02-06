// // write a function that takes a string as a input return the count of unique characters

// const str = "Hello World";

// // function uniqueCharacters(str) {
// //   let set = new Set();
// //   for (let i = 0; i < str.length; i++) {
// //     set.add(str[i]);
// //   }
// //   return set.size;
// // }

// // console.log(uniqueCharacters(str));

// //                  SHORTCUT
// // console.log(new Set(str).size);

// // str =- "Hehe"
// // console.log(new Set(str.toLowerCase()).size);

// // If a array has duplicate or not
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // let sizee = arr.length;
// // if (new Set(arr).size == sizee) {
// //   console.log(true);
// // } else console.log(false);

// //     given an unsorted array of integers , find the length of the longest consecutive elements sequence . it should run in O(n) time

// // let arr = [100, 4, 200, 1, 3, 2];
// // function longestSeq(nums) {
// //   let maxLength = 0;
// //   let newSet = new Set(nums);

// //   for (let num of nums) {
// //     if (!newSet.has(num - 1)) {
// //       let currentNum = num;
// //       let currLength = 1;

// //       while (newSet.has(currentNum + 1)) {
// //         currentNum++;
// //         currLength++;
// //       }
// //       maxLength = Math.max(maxLength, currLength);
// //     }
// //   }
// //   return maxLength;
// // }

// //1. Check if an array has duplicates
// let arr = [1, 2, 3, 4, 5];
// function checkDup(arr) {
//   let len = arr.length;
//   let set = new Set(arr);
//   if (len == set.size) {
//     return "No duplicacy";
//   } else {
//     return "Duplicate";
//   }
// }
// // console.log(checkDup(arr));

// //2. Count the number of unique elements in an array
// let arr2 = [1, 2, 3, 4, 1, 7, 8, 9, 1, 2, 3, 4, 10];
// function uniqueEl(arr) {
//   let set = new Set(arr);
//   return set.size;
// }
// // console.log(uniqueEl(arr2));

// // 3.  Remove duplicates from an array and return a new array
// let arr3 = [1, 2, 3, 4, 1, 7, 8, 9, 5, 1, 6, 2, 3, 4, 10];
// function removeDup(arr) {
//   let set = new Set(arr);
//   return [...set];
// }
// // console.log(removeDup(arr3));

// // 4.   Convert an array into a Set and print it
// let arr4 = [1, 2, 3, 4, 1, 7, 8, 9, 1, 2, 3, 4, 10];
// function convertIntoSet(arr) {
//   let set = new Set(arr);
//   return set;
// }
// // console.log(convertIntoSet(arr4));

// // 5.   Check if a value exists in a Set
// function existence(set, val) {
//   return set.has(val);
// }

// // 6.  Extract all unique elements from an array   (elements that appear only once)
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

// // 7.   Extract all duplicate elements from an array (each duplicate should appear only once in output)
// let arr7 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
// function removeDup(arr) {
//   let seen = new Set();
//   let removed = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (seen.has(arr[i])) {
//       removed.add(arr[i]);
//     } else {
//       seen.add(arr[i]);
//     }
//   }
//   return removed;
// }
// // console.log(removeDup(arr7));

// // 8.  Find the first repeating element
// let arr8 = [1, 2, 3, 4, 5, 2, 1, 2, 3];

// function firstRepeating(arr) {
//   let seen = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (!seen.has(arr[i])) {
//       seen.add(arr[i]);
//     } else return arr[i];
//   }
// }
// // console.log(firstRepeating(arr8));

// // 9.    Find the last repeating element
// let arr9 = [1, 2, 3, 4, 5, 2, 1, 2, 3, 6, 5];
// function lastRepeating(arr) {
//   let seen = new Set();
//   let rem = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (!seen.has(arr[i])) {
//       seen.add(arr[i]);
//     } else {
//       rem.add(arr[i]);
//     }
//   }
//   return [...rem].pop();
// }
// // console.log(lastRepeating(arr9));

// // 10.   Find all elements that appear more than once
// let arr10 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// function moreThan1(arr) {
//   let original = new Set();
//   let local = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (!original.has(arr[i])) {
//       original.add(arr[i]);
//     } else {
//       local.add(arr[i]);
//     }
//   }
//   return [...local];
// }
// // console.log(moreThan1(arr10));
