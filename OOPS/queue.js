class Queue {
  constructor() {
    this.arr = [];
  }

  isEmpty() {
    if (this.arr.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  enqueue(val) {
    this.arr.push(val);
    console.log(this.arr);
  }

  dequeue() {
    if (this.isEmpty) {
      this.arr.pop();
      console.log(this.arr);
    }
  }

  front() {
    console.log(this.arr[0]);
  }

  size() {
    console.log(this.arr.length);
  }

  print() {
    console.log(this.arr);
  }
}

let one = new Queue();

one.enqueue(5);
console.log(one);
one.enqueue(6);
one.enqueue(7);
one.enqueue(8);
one.enqueue(9);
console.log(one);

// one.dequeue();

one.front();
one.size();
one.enqueue(10);
one.print();
