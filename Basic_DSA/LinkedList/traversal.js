class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//   Array to LL
let arr = [1, 2, 3, 4, 5];
const header = new Node(arr[0]);
let current = header;

for (let i = 1; i < arr.length; i++) {
  current.next = new Node(arr[i]);
  current = current.next;
}

// traversal

current = header;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
