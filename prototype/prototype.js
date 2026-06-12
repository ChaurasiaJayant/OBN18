const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.takeAverage) {
  Array.prototype.takeAverage = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }

    return sum / this.length;
  };
}

//
// Polyfill for doesn`t exist`

if (!Array.prototype.exclude) {
  Array.prototype.exclude = function (el) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] == el) {
        return false;
      }
    }
    return true;
  };
}

console.log(arr.exclude(2));
