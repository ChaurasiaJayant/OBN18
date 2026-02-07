const arr = [-2, -1, 0, 3, 5, 9, 12];

//9
//2

// function binarySearch(arr, target) {
//   let left = 0,
//     right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (target === arr[mid]) {
//       return mid;
//     } else if (target < arr[mid]) {
//       right = mid - 1;
//     } else left = mid + 1;
//   }
//   return -1;
// }
// console.log(binarySearch(arr, 2));

// function binarySearchFirstOccurence(arr1, target) {
//   let low = 0,
//     high = arr1.length - 1;
//   let result = -1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr1[mid] === target) {
//       result = mid;
//       high = mid - 1;
//     } else if (arr1[mid] > target) {
//       high = mid - 1;
//     } else low = mid + 1;
//   }
//   return result;
// }

// console.log(binarySearch(arr1, 2));

const arr1 = [1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 7, 8, 9];

// function binarySearchLastOccurence(arr, target) {
//   let left = 0,
//     right = arr.length - 1;
//   let res = -1;

//   while (left <= right) {
//     let mid = Math.floor((right + left) / 2);

//     if (arr[mid] === target) {
//       res = mid;
//       left = mid + 1;
//     } else if (target < arr[mid]) {
//       right = mid - 1;
//     } else left = mid + 1;
//   }
//   return res;
// }

// console.log(binarySearch(arr1, 2));

// let arr2 = [1,2,3,5,6,7,8,9]

// functionInsertionIndex(arr,target){
//     let left = 0,right = arr.length-1

//     while(left <= right){
//         let mid = Math.floor((left+right)/2)

//         if(arr[mid] === target){
//             return mid
//         }
//     }
// }

// Search in a rotated sorted array (Solution should be done in O(logn))

let arr3 = [4, 5, 6, 7, 0, 1, 2, 3];
