//BUbble sorting
// bubble metophor : like bubbles in a coke can
// the largest bubbles 'bubble up' to the top (or the end of the array)
// we have multiple passes in an array so that at each pass we can bring the largest element to its correct position

// characteristics
// 1. adjacent comparision : we always compary neighbouring or adjacent elements
// 2. swapping : we swap the elements to bring the larget element to the right
// 3. multiple passes: thia takes care of all elements untill there is not need of more swaps
// 4. in place sorting: we consider a part of the array as sorted and we focus on growing its size

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //First method
        // let temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp

        // Second Method
        [([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]])];
      }
    }
  }
  return arr;
}

let arr = [5, 2, 8, 9, 1];
// console.log(bubbleSort(arr));

//Optimized Way
function bubbleSortOptimized(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //First method
        // let temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp

        // Second Method
        [([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]])];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

function inverseBubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return arr;
}
let arr2 = [5, 1, 4, 2, 8];
// console.log(inverseBubbleSort(arr2));

arr = [5, 2, 8, 9, 1];
function recursiveBubbleSort(arr, n = arr.length) {
  if (n == 0) return arr;
  let swapped = false;

  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swapped = true;
    }
  }
  if (!swapped) return arr;

  return recursiveBubbleSort(arr, n - 1);
}
// console.log(recursiveBubbleSort(arr));

let arr22 = [0, 5, 0, 3, 8, 0, 2];
// ans should be [5,3,8,2,0,0,0]

function moveZeroesToEnd(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] == 0 && arr[j + 1] !== 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(moveZeroesToEnd(arr22));

//    QUESTIONS
// 1. Sort an array in ascending order using Bubble Sort → return array
function q1(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(q1([5, 4, 3, 2, 1, 11, 10]));

//   2.   Sort an array in descending order using Bubble Sort → return array
function q2(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(q2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//  3. Count the total number of swaps performed → number

function q3(arr) {
  let n = arr.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        cnt++;
      }
    }
  }
  return cnt;
}
// console.log(q3([1, 2, 3, 4, 5, 6]));

//  4. Stop early if array becomes sorted (optimized bubble) → return array
function q4(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// console.log(q4([5, 4, 7, 3, 21, 1]));

//  5.  Sort only the first N elements of an array → return array

function q5(arr, N) {
  for (let i = 0; i < N - 1; i++) {
    let swapped = false;
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// console.log(q5([6, 5, 4, 3, 2, 1], 3));

//   6. Find the largest element using Bubble logic (1 pass only) → number

function q6(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped == true) {
      break;
    }
  }
  return arr;
}
// console.log(q6([16, 9, 6, 15, 4, 2, 3, 1, 8]));

//   7.. Sort an array of objects by a property (like score) → array
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Aman", score: 66 },
];

function sorting(arr) {
  arr.sort((a, b) => {
    return a.score - b.score;
  });
  return arr;
}
// console.log(sorting(students));

//   8.  Count how many passes Bubble Sort took → number
function q8(arr) {
  let pass = 0;
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
    if (swap) pass++;
  }
  return pass;
}
// console.log(q8([89, 6, 4, 3, 2]));

//  9.  Check if the array was already sorted (no swaps) → boolean

function q9(arr) {
  let cnt = 0;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        cnt++;
      }
    }
  }
  if (cnt == 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(q9([1, 2, 3, 4, 5, 9, 6]));

//   10. Bubble sort and return the k-th largest element → number
function q10(arr, k) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr[n - k];
}
// console.log(q10([5, 4, 3, 2, 1, 6, 7, 9, 8], 3));

//  11. Bubble sort and return the second smallest element → number
function q11(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr[1];
}
// console.log(q11([8, 4, 6, 7, 2, 3, 1, -44, -11, 5]));

// 12.  Sort even numbers first, then odd using bubble logic → array
function q12(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if ((arr[j] % 2 == 0) > arr[j + 1] % 2 == 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else if ((arr[j] % 2 !== 0) > arr[j + 1] % 2 !== 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(q12([6, 5, 4, 3, 21]));
