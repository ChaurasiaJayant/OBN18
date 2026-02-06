// function matrix(m, n) {
//   for (let i = 0; i < m; i++) {
//     let curr = [];
//     for (let j = 0; j < n; j++) {
//       curr.push(1);
//     }
//     console.log(curr);
//   }
// }

// matrix(4, 4);

//Second Approach

// function matrix(m, n) {
//   let arr = [];
//   for (let i = 0; i < m; i++) {
//     let curr = [];
//     for (let j = 0; j < n; j++) {
//       curr.push(1);
//     }
//     arr.push(curr);
//   }
//   console.log(arr);
// }
// matrix(4, 5);

function primeMatrix(m, n) {
  let arr = [];
  for (let i = 1; i <= m; i++) {
    let curr = [];
    for (let j = 1; j <= n; j++) {
      let product = i * j;
      let value = isPrime(product) ? product : 0;
      curr.push(value);
    }
    arr.push(curr);
  }
  console.log(arr);
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

primeMatrix(4, 5);
