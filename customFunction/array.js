class myArray {
  constructor(data) {
    this.data = data;
  }

  myMap(fun) {
    let res = [];
    for (let i = 0; i < this.data.length; i++) {
      res.push(fun(this.data[i]));
    }
    return res;
  }

  myFilter(fun) {
    let res = [];

    for (let i = 0; i < this.data.length; i++) {
      if (fun(this.data[i])) {
        res.push(this.data[i]);
      }
    }
    return res;
  }

  reduce(fun, val) {
    let sum = val !== undefined ? val : 0;

    for (let i = 0; i < this.data.length; i++) {
      sum = fun(sum, this.data[i]);
    }
    return sum;
  }
}

let arr = new myArray([1, 2, 3, 4, 5, 6, 8, 10, 21]);
// console.log(arr.myMap((el) => el * 2));
// console.log(arr.myFilter((el) => el % 2 == 0));
// console.log(arr.reduce((acc, sum) => acc + sum, 0));

Array.prototype.myMap = function (fun) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fun(this[i]));
  }
  return res;
};

Array.prototype.myFilter = function (fun) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};
console.log([1, 2, 3, 4, 5].myMap((el) => el * el));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].myFilter((el) => el % 2 == 0));
