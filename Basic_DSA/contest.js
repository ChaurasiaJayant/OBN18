function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let random = Math.floor(Math.random() * arr.length);
  let pivot = arr[random];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([6, 5, 4, 3, 2, 1]));
