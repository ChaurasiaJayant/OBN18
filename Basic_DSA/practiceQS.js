// 1. Given an array of users with ages, group them into age categories: "child" (<18), "adult" (18-60),
//  "senior" (>60). Return an object with counts for each category.

const users = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 65 },
  { name: "Diana", age: 30 },
  { name: "Eve", age: 70 },
];

function category(arr) {
  let child = arr.filter((el) => el.age < 18);
  let adult = arr.filter((x) => x.age > 17 && x.age < 61);
  let senior = arr.filter((x) => x.age > 60);

  return {
    Child: child.length,
    Adult: adult.length,
    Senior: senior.length,
  };
}
console.log(category(users));

// 2. Given an array of orders where each order contains multiple items, find all items that cost
//  more than $50, calculate the total revenue from these items, and return the result grouped by category.

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
function getRevenue(orders) {
  let result = {};

  for (let order of orders) {
    for (let item of order.items) {
      if (item.price > 50) {
        if (!result[item.category]) {
          result[item.category] = 0;
        }
        result[item.category] += result[item.category] + item.price;
      }
    }
  }
  return result;
}
// console.log(getRevenue(orders));

// 3. You have an array of transactions. Calculate the total balance after applying a 2% fee on withdrawals only.

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 100 },
  { type: "deposit", amount: 300 },
];

function balance(arr) {
  let remain = 0;

  for (let i = 0; i < arr.length; i++) {
    if (transactions[i].type == "deposit") {
      remain += transactions[i].amount;
    }
    if (transactions[i].type == "withdrawal") {
      remain -= transactions[i].amount + transactions[i].amount * 0.02;
    }
  }
  console.log(remain);
}
// balance(transactions);

// 4. Filter products that are in stock, priced between ₹4,000-₹40,000, and have a rating of 4 or higher. Return only their names
//  and final prices after applying a 10% discount.

const products = [
  { name: "Laptop", price: 95000, rating: 4.5, inStock: true },
  { name: "Mouse", price: 2000, rating: 4.2, inStock: true },
  { name: "Keyboard", price: 6000, rating: 4.8, inStock: true },
  { name: "Monitor", price: 24000, rating: 4.6, inStock: false },
  { name: "Webcam", price: 9500, rating: 3.9, inStock: true },
  { name: "Headphones", price: 16000, rating: 4.7, inStock: true },
];

function find(arr) {
  let filter = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      products[i].inStock == true &&
      products[i].price >= 4000 &&
      products[i].price <= 40000 &&
      products[i].rating > 4
    ) {
      filter.push(
        products[i].name,
        (products[i].price = products[i].price - products[i].price * 0.1),
      );
    }
  }
  let obj = {};
  for (let i = 0; i < filter.length; i++) {
    if (i % 2 == 0) {
      obj[filter[i]] = filter[i + 1];
    }
  }

  console.log(obj);
}
// find(products);

// 6. You're building an analytics feature for a cryptocurrency trading platform. Traders want to identify "breakout days" where
//  the price moved significantly. Your product manager defines a breakout as any day with a
// return (percentage change from previous day) exceeding 5%. The analytics team also wants the average return for these
// breakout days to understand typical strong movement patterns.

// Calculate the daily return (percentage change) for each day compared to the previous day
// Identify all breakout days where the return exceeds 5%

// Calculate the average return across all breakout days

// Return an object containing the breakout days array and the average breakout return

// Input Format

const prices = [
  { date: "2026-02-10", price: 4000000 },
  { date: "2026-02-11", price: 4160000 },
  { date: "2026-02-12", price: 4280000 },
  { date: "2026-02-13", price: 4080000 },
  { date: "2026-02-14", price: 4320000 },
  { date: "2026-02-15", price: 4440000 },
  { date: "2026-02-16", price: 4384000 },
];
// Expected Output Format
// {
//  breakoutDays: [
//    { date: '2026-02-14', price: 4320000, return: 5.88 }
//  ],
//  averageBreakoutReturn: 5.88
// }
// Formula:  ((currentDayPrice - previousDayPrice) / previousDayPrice) × 100

function brkDays(arr) {
  let parr = [];
  let rtn = [];
  for (let i = 1; i < arr.length; i++) {
    let tp = prices[i - 1].price + prices[i - 1].price * 0.05;
    if (prices[i].price > tp) {
      parr.push(prices[i]);
      rtn
        .push(
          ((prices[i].price - prices[i - 1].price) / prices[i - 1].price) * 100,
        )
        .toFixed(2);
    }
  }
  let avg = rtn.reduce((acc, sum) => acc + sum, 0);
  return {
    breakOutDays: parr,
    averageBreakOutReturn: (avg / rtn.length).toFixed(2),
  };
}
// console.log(brkDays(prices));

// 5. You're building a content moderation tool for a social media platform. The system needs to extract meaningful keywords
//  from user posts for better search indexing. Your team decides that only unique words with 4 or more characters
//  should be indexed, and they should be case-insensitive and alphabetically sorted.

const sentences = [
  "The quick brown fox",
  "jumps over the lazy dog",
  "The dog was really lazy",
];

function wordss(sentences) {
  let set = new Set();
  let temp = sentences.join(" ").split(" ");

  for (let ch of temp) {
    if (ch.length >= 4) {
      set.add(ch);
    }
  }
  let tempArr = [...set];
  console.log(tempArr.sort());
}
// wordss(sentences);
