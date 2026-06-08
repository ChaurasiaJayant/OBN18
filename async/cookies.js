// document.cookie = "userName=Ajay;theme=dark;lang=english";

// function getValue(key) {
//   let ans =
//     string
//       .split(";")
//       .find((row) => row.startsWith(key + "="))
//       .split("=")[1] ?? null;

//   return ans;
// }

setTimeout(() => {
  console.log("first");
  setTimeout(() => {
    console.log("second");
    setTimeout(() => {
      console.log("Third");
    }, 1000);
  }, 1000);
}, 1000);
