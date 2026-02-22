function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
// primeRange(10, 20);

//   Prime numbers is range using recursion

function isPrime(n, i = 2) {
  if (n < 2) return false;
  if (i * i > n) return true;
  if (n % i === 0) return false;
  return isPrime(n, i + 1);
}

function range(start, end) {
  if (start > end) return;

  if (isPrime(start)) {
    console.log(start);
  }
  return range(start + 1, end);
}
range(10, 20);
