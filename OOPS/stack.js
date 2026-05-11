class Stack {
  #items;
  constructor() {
    this.#items = [];
  }

  push(val) {
    this.#items.push(val);
  }

  pop() {
    let popp = this.#items.pop();
    console.log(popp);
  }

  peek() {
    let top = this.#items[this.#items.length - 1];
    console.log(top);
  }

  clear() {
    this.#items = [];
  }

  print() {
    console.log(this.#items);
  }
}

let item1 = new Stack();
console.log(item1);
item1.push(1);
item1.push(4);
console.log(item1);

// item1.pop();
item1.push(5);
item1.push(6);
item1.push(7);

item1.peek();
item1.clear();
console.log(item1);
