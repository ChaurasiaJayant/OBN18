function alternatePattern(n) {
  if (n < 3 && n > 50) {
    return "Invalid Input";
  }

  for (let i = 1; i <= n; i++) {
    let line = "";

    //spaces
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }

    //pattern
    for (let j = 0; j < 2 * i - 1; j++) {
      if (i % 2 === 0) {
        line += "#";
      } else line += "*";
    }
    console.log(line);
  }
}

// console.log(alternatePattern(5));
alternatePattern(5);
