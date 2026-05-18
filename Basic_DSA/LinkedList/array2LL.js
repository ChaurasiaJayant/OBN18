class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let n1 = new Node(arr[7]);
console.log(n1.data);
