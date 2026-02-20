function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] == target) return mid + 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 40));

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapp = false;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapp = true;
      }
    }
    if (!swapp) {
      break;
    }
  }
  return arr;
}
// console.log(bubbleSort([8, 4, 2, 3, 4, 1, 9, 5]));

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
// console.log(selectionSort([8, 5, 1, 3, 2, 4, 9, 6, 7]));

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// console.log(insertionSort([8, 7, 9, 3, 1, 4, 5, 2, 6]));

function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort([8, 5, 6, 7, 9, 1, 3, 2, 4]));

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function inRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
// console.log(inRange(10, 33));

function primeRec(n, i = 2) {
  if (n < 2) return false;

  if (i * i > n) {
    return true;
  }
  if (n % i == 0) return false;

  return primeRec(n, i + 1);
}
// console.log(primeRec(5));

function range(start, end) {
  if (start > end) return;

  if (primeRec(start)) {
    console.log(start);
  }
  return range(start + 1, end);
}
// range(10, 33);

// 1. Given an array of users with ages, group them into age categories: "child" (<18),
// "adult" (18-60), "senior" (>60). Return an object with counts for each category.

// const users = [
//  { name: "Alice", age: 15 },
//  { name: "Bob", age: 45 },
//  { name: "Charlie", age: 65 },
//  { name: "Diana", age: 30 },
//  { name: "Eve", age: 70 }
// ];

// 2. Given an array of orders where each order contains multiple items, find all items that
// cost more than $50, calculate the total revenue from these items, and return the result
//  grouped by category.

const orders = [
  {
    orderId: 1,
    items: [
      { name: "Laptop", price: 1000, category: "Electronics" },
      { name: "Mouse", price: 25, category: "Electronics" },
    ],
  },
  {
    orderId: 2,
    items: [
      { name: "Desk", price: 200, category: "Furniture" },
      { name: "Chair", price: 150, category: "Furniture" },
      { name: "Lamp", price: 30, category: "Furniture" },
    ],
  },
];
// Expected output: { Electronics: 1000, Furniture: 350 }
function ordermgmt(arr) {
  let obj = {};
  for (let outer of arr) {
    for (let item of outer.items)
      if (item.price > 50) {
        if (!obj[item.category]) {
          obj[item.category] = 0;
        }
        obj[item.category] += item.price;
      }
  }
  return obj;
}
// console.log(ordermgmt(orders));

// 3. You have an array of transactions. Calculate the total balance after applying a 2% fee
//  on withdrawals only.

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 100 },
  { type: "deposit", amount: 300 },
];
// output= 1494

function txn(arr) {
  let total = 0;
  for (let t of arr) {
    if (t.type == "deposit") {
      total += t.amount;
    } else if (t.type == "withdrawal") {
      let fee = t.amount + t.amount * 0.02;
      total -= fee;
    }
  }
  return total;
}
// console.log(txn(transactions));

// 4. Filter products that are in stock, priced between ₹4,000-₹40,000, and have a rating of 4 or
//  higher. Return only their names and final prices after applying a 10% discount.

const products = [
  { name: "Laptop", price: 95000, rating: 4.5, inStock: true },
  { name: "Mouse", price: 2000, rating: 4.2, inStock: true },
  { name: "Keyboard", price: 6000, rating: 4.8, inStock: true },
  { name: "Monitor", price: 24000, rating: 4.6, inStock: false },
  { name: "Webcam", price: 9500, rating: 3.9, inStock: true },
  { name: "Headphones", price: 16000, rating: 4.7, inStock: true },
];

function cart(arr) {
  let filtered = arr
    .filter((x) => {
      return (
        x.inStock == true && x.rating > 4 && x.price >= 4000 && x.price <= 40000
      );
    })
    .map((el) => {
      return { Name: el.name, Price: el.price - el.price * 0.1 };
    });

  return filtered;
}
// console.log(cart(products));

// 5. You're building a content moderation tool for a social media platform. The system needs to
// extract meaningful keywords from user posts for better search indexing. Your team decides that
//  only unique words with 4 or more characters should be indexed, and they should be
//  case-insensitive and alphabetically sorted.

const sentences = [
  "The quick brown fox",
  "jumps over the lazy dog",
  "The dog was really lazy",
];

function wording(arr) {
  let set = new Set();

  let arrayy = arr.join(" ").split(" ").sort();
  for (let el of arrayy) {
    if (el.length >= 4) {
      set.add(el);
    }
  }
  return set;
}
console.log(wording(sentences));

// 6. You're building an analytics feature for a cryptocurrency trading platform. Traders want to identify "breakout days" where the price moved significantly. Your product manager defines a breakout as any day with a return (percentage change from previous day) exceeding 5%. The analytics team also wants the average return for these breakout days to understand typical strong movement patterns.

// Calculate the daily return (percentage change) for each day compared to the previous day
// Identify all breakout days where the return exceeds 5%

// Calculate the average return across all breakout days

// Return an object containing the breakout days array and the average breakout return

// Input Format

// const prices = [
//  { date: '2026-02-10', price: 4000000 },
//  { date: '2026-02-11', price: 4160000 },
//  { date: '2026-02-12', price: 4280000 },
//  { date: '2026-02-13', price: 4080000 },
//  { date: '2026-02-14', price: 4320000 },
//  { date: '2026-02-15', price: 4440000 },
//  { date: '2026-02-16', price: 4384000 }
// ];

// Expected Output Format

// {
//  breakoutDays: [
//    { date: '2026-02-14', price: 4320000, return: 5.88 }
//  ],
//  averageBreakoutReturn: 5.88
// }

// Formula:  ((currentDayPrice - previousDayPrice) / previousDayPrice) × 100

// Example Calculation:
// Feb 14: ((4320000 - 4080000) / 4080000) × 100 = 5.88%

function fib(n) {
  let series = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return series;
}
console.log(fib(5));
