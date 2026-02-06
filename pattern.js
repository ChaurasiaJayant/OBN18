function diagonal(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let spaces = n - i;

    for (let j = 0; j < spaces; j++) {
      row += " ";
    }
    row += i;

    if (i > 1) {
      for (let k = 1; k <= 2 * i - 3; k++) {
        row += " ";
      }
      row += i;
    }
    console.log(row);
  }
}

diagonal(5);
