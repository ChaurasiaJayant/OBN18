// function quickSort(arr) {
//   if (arr.length < 1) {
//     return arr;
//   }

//   let left = [];
//   let right = [];
//   let pivot = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort([5, 4, 3, 2, 1, 9, 8, 7, 6]));

function quickSortRandom(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let random = Math.floor(Math.random() * arr.length);
  let pivot = arr[random];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == pivot) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSortRandom(left), pivot, ...quickSortRandom(right)];
}
console.log(quickSortRandom([5, 4, 3, 2, 1, 9, 8, 7, 6]));
