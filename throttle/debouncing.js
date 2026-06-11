// What is debouncing??

//   Debouncing makes sure a function runs only after something has stopped happening for a while
// or a function will run only after the user has stopped triggering it for a certain time

//   1. ensure timer  runs after every call but server is only called when the timer completes.

// let timerId = null;
// function handleInput(value) {
//   if (timerId !== null) {
//     clearInterval(timerId);
//   }

//   timerId = setTimeout(() => {
//     console.log(value);
//   }, 500);
// }

// handleInput("H");
// handleInput("He");
// handleInput("Hel");
// handleInput("Hell");
// handleInput("Hello");

// 2. wrap into the function

function debounce(cb, delay) {
  let timerId = null;

  return function (...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

function sayHi() {
  console.log("Hello");
}

// debounce(sayHi, 100);
