function throttle(func, interval) {
  return function () {
    let fun = setInterval(() => {
      func();
    }, interval);
    clearInterval(fun);
  };
}

function throttle(func, interval) {
  let time = 0;
  return function () {
    if (Date.now() - time >= interval) {
      time = Date.now();
      func();
    }
  };
}

// variations

// 1.   simplest

// let canRun = true;

// function log() {
//   if (!canRun) {
//     return;
//   }

//   console.log("Hello There!!");
//   canRun = false;
// }

// log();
// log();
// log();

// 2.    Allow repeated runs
// (  after running once,block further calls)
// (  after some time , it should allow running again   )

// let canRun = true;
// function log() {
//   if (!canRun) {
//     return;
//   }

//   console.log("Hello");
//   canRun = false;

//   setTimeout(() => {
//     canRun = true;
//   }, 500);
// }

// log();
// log();
// log();

// setTimeout(() => {
//   log();
// }, 501);

function throttle(callback) {
  let canRun = true;

  return function () {
    if (!canRun) {
      return;
    }
    callback();
    canRun = false;

    setTimeout(() => {
      canRun = true;
    }, 500);
  };
}

function logSomething() {
  console.log("hello");
}

let throttled = throttle(logSomething);
// throttled();

// 4. using timestamp instead of flags

function throttledTimeStamp(func, delay) {
  let lastTime = 0;

  return function () {
    if (Date.now() - lastTime >= delay) {
      lastTime = Date.now();
      func();
    }
  };
}
function greet() {
  console.log("kaise ho");
}

let th = throttledTimeStamp(greet, 1000);
// th();

//  5. Final Boss

function finalBoss(cb, delay) {
  let last = 0;

  return function (...args) {
    if (Date.now() - last >= delay) {
      last = Date.now();
      cb.apply(this, args);
    }
  };
}

function sayHi(name) {
  console.log(`Aur bhai ${name},kaise ho`);
}

const finalll = finalBoss(sayHi, 100);
finalll("Anshu");
