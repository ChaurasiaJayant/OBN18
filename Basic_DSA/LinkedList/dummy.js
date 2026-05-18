// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// let head = new Node(arr[0]);
// let current = head;

// // Arrray to LL
// for (let i = 1; i < arr.length; i++) {
//   current.next = new Node(arr[i]);
//   current = current.next;
// }

// function deleteAtNode(head, position) {
//   // If LL is empty
//   if (head == null) {
//     return null;
//   }

//   // If first position is to be deleted
//   if (position == 0) {
//     return head.next;
//   }

//   let current = head;

//   for (let i = 0; i < position - 1 && current !== null; i++) {
//     current = current.next;
//   }

//   current.next = current.next.next;

//   return head;
// }

// head = deleteAtNode(head, 4);

// current = head;

// while (current !== null) {
//   console.log(current.data);
//   current = current.next;
// }

// console.log("Start");
// setTimeout(() => {
//   console.log("Hello");
// }, 5000);
// console.log("End");

function calculator(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

console.log(calculator(20, 4, add));
