class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let arr = [9, 15, 4, 3, 2, 1];
let head = new Node(arr[0]);
let current = head;

for (let i = 1; i < arr.length; i++) {
  current.next = new Node(arr[i]);
  current = current.next;
}

head = head.next;
current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
