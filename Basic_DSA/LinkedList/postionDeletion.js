class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let arr = [1, 2, 3, 4, 5, 6];

let head = new Node(arr[0]);
let current = head;

// Array to Linked List

for (let i = 1; i < arr.length; i++) {
  current.next = new Node(arr[i]);
  current = current.next;
}

function deleteAtPosition(head, position) {
  // if Linked List is empty
  if (head == null) {
    return null;
  }

  // If need to delete First element
  if (position == 0) {
    return head.next;
  }

  let current = head;

  // Go from starting to position -1 Element
  for (let i = 0; i < position - 1 && current !== null; i++) {
    current = current.next;
  }

  // Delete Logic
  current.next = current.next.next;

  return head;
}

head = deleteAtPosition(head, 2);

// print logic

current = head;

while (current !== null) {
  console.log(current.data);
  current = current.next;
}
