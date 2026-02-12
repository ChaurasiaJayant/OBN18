// Selection sort is a sorting algorithm that is based on single comparison logic
//where we repeatedly find the smallest element from the unsorted portion os the array
//  and place it in the correct position in the sorted array

//Main Logic
//Divide the array into sorted portion and unsorted portion and repeatedly select the smallest element

// PROS
// very simple to implement , minimal memory usage , fewer swaps as compared to bubble

// For larger dataSet bubble sort is better than selection sort

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// console.log(selectionSort([6, 5, 4, 3, 2, 1]));

function decreaseSelection(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(decreaseSelection([1, 2, 3, 4, 5, 6, 7, 8]));

let swaps = [4, 3, 2, 1];
function countSwaps(arr) {
  let n = arr.length;
  let cnt = 0;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      cnt++;
    }
  }
  return cnt;
}
console.log(countSwaps(swaps));
