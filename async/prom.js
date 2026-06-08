function getUser(userId) {
  return new Promise((resolve, reject) => {
    if (userId) {
      resolve(user);
    } else {
      reject(err);
    }
  });
}

// getUser(userId)
//   .then((user) => {
//     return user.id;
//   })
//   .then((userId) => {
//     return orders[0];
//   })
//   .then((data) => {
//     console.log(`${data.shipmentId}`);
//   })
//   .catch((err) => {
//     console.error("Error is :", err);
//   });

getUser(userId)
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0].id))
  .then((details) => getShipment(details.shipmentId))
  .then((shipment) => console.log(shipment))
  .catch((err) => console.log(err));
