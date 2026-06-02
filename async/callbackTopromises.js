let promise = new Promise((resolve, reject) => {
  let val = 1;
  if (val) {
    resolve(val);
  } else {
    reject("Error hai bhai");
  }
});

promise
  .then((data) => {
    console.log(data);
    return data + 1;
  })
  .then((data) => {
    console.log(data);
    return data + 1;
  })
  .then((data) => {
    console.log(`The final data is ${data}`);
  })
  .catch((err) => {
    console.log("The error is ", err);
  });
