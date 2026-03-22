function primeFactors(nums) {
  let factors = [];

  // Check for 2 separately
  if (nums % 2 === 0) {
    factors.push(2);
    while (nums % 2 !== 0) {
      nums = nums / 2;
    }
  }

  // Rest of prime numbers
  for (let i = 3; i < Math.sqrt(nums); i += 2) {
    if (nums % i === 0) {
      factors.push(i);
      while (nums % i === 0) {
        nums = nums / i;
      }
    }
  }

  if (nums > 0) {
    factors.push(nums);
  }
  return factors;
}

console.log(primeFactors(30));
