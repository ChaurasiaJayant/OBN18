function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}

function throttle(func, delay) {
  let last = 0;
  return function (...args) {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      func.apply(this, args);
    }
  };
}

let cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 },
  { name: "Shoes", price: 1200, quantity: 1 },
];

function bill(arr) {
  let total = 0;
  for (let item of arr) {
    total += item.price;
  }

  if (total > 2000) {
    total = total * 0.9;
  }

  return total + total * 0.18;
}
console.log(bill(cart));
