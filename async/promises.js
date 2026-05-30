let payment = new Promise((resolve, reject) => {
  setTimeout(() => {
    function idFind() {
      return true;
    }

    if (idFind) {
      resolve({
        amount: 500,
        pin: 123,
        initiatePayment: "Make payment",
        success: "Ho gya bhai",
      });
    } else {
      reject(new Error("ID not found"));
    }
  }, 2000);
});

payment
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((amt) => {
    console.log(amt.amount);
    return amt.amount;
  })
  .then((len) => {
    if (len.length < 4) {
      console.log("The amount is less than 1000");
    }
  });
