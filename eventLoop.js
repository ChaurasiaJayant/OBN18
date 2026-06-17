console.log("A");

async function test() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

console.log("D");

// ----------------------------------next ques---------------------

console.log(1);

async function test() {
  console.log(2);

  await Promise.resolve();

  console.log(3);
}

test();

Promise.resolve().then(() => {
  console.log(4);
});

console.log(5);

// ----------------------------------next ques---------------------

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// ----------------------------------next ques---------------------

async function test() {
  console.log("Start");

  await Promise.resolve();

  console.log("Middle");

  await Promise.resolve();

  console.log("End");
}

test();

console.log("Outside");

// ----------------------------------next ques---------------------

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

async function test() {
  console.log("C");

  await Promise.resolve();

  console.log("D");
}

test();

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");

// ----------------------------------next ques---------------------
//
async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);

  setTimeout(() => {
    console.log(3);
  }, 0);
}

test();

Promise.resolve().then(() => {
  console.log(4);
});

console.log(5);

// ----------------------------------next ques---------------------

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// ----------------------------------next ques---------------------

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);

Promise.resolve().then(() => {
  console.log(5);
});

// ----------------------------------next ques---------------------

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

console.log("D");

// ----------------------------------next ques---------------------

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async End");
}

test();

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// ----------------------------------next ques---------------------

console.log(1);

async function test() {
  console.log(2);

  await Promise.resolve();

  console.log(3);
}

setTimeout(() => {
  console.log(4);
}, 0);

test();

Promise.resolve().then(() => {
  console.log(5);
});

console.log(6);

// ----------------------------------next ques---------------------

async function test() {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

  await Promise.resolve();

  console.log("C");
}

test();

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

// ----------------------------------next ques---------------------

console.log("Start");

setTimeout(() => {
  console.log("T1");
}, 0);

Promise.resolve().then(() => {
  console.log("P1");

  setTimeout(() => {
    console.log("T2");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("P2");
});

console.log("End");

// ----------------------------------next ques---------------------

async function foo() {
  console.log("1");

  await Promise.resolve();

  console.log("2");
}

console.log("3");

foo();

console.log("4");

Promise.resolve().then(() => {
  console.log("5");
});

// ----------------------------------next ques---------------------

console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

// ----------------------------------next ques---------------------
async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);
  });

  console.log(4);
}

test();

console.log(5);
// ----------------------------------next ques---------------------
console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
});

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");
// ----------------------------------next ques---------------------
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });

console.log("E");
// ----------------------------------next ques---`------------------
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

Promise.resolve().then(() => {
  console.log("D");
});

test();

console.log("E");
// ----------------------------------next ques---------------------
console.log("Start");

setTimeout(() => {
  console.log("Timer 1");

  Promise.resolve().then(() => {
    console.log("Promise Inside Timer");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");
// ----------------------------------next ques---------------------
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");
// ----------------------------------next ques---------------------
async function foo() {
  console.log(1);

  await Promise.resolve();

  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);
  });

  console.log(4);
}

foo();

console.log(5);
// ----------------------------------next ques---------------------

console.log("A");

async function test() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

Promise.resolve().then(() => {
  console.log("D");
});

setTimeout(() => {
  console.log("E");
}, 0);

console.log("F");
// ----------------------------------next ques---------------------
console.log(1);

Promise.resolve().then(() => {
  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);
  });

  console.log(4);
});

Promise.resolve().then(() => {
  console.log(5);
});

setTimeout(() => {
  console.log(6);
}, 0);

console.log(7);
// ----------------------------------next ques---------------------
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

Promise.resolve().then(() => {
  console.log("D");
});

test();

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");
// ----------------------------------next ques---------------------
