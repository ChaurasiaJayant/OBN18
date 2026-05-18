class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let arr = [1, 2, 3, 4, 5];
let header = new Node(arr[0]);
let current = header;

for (let i = 1; i < arr.length; i++) {
  current.next = new Node(arr[i]);
  current = current.next;
}

function deleteByValue(header, value) {
  // If empty Linked List
  if (header == null) {
    return null;
  }

  // If first value
  if (header.data === value) {
    return head.next;
  }
  let current = header;

  // Iterate
  for (let i = 0; current.next !== null; i++) {
    if (current.next.data == value) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }

  return header;
}

header = deleteByValue(header, 3);

// print
current = header;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
