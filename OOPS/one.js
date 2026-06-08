// let phone = {
//   brand: "Apple",
//   model: "iPhone",

//   showDetails() {
//     console.log(`${this.brand} ${this.model}`);
//   },
// };

// phone.price = 70000;
// console.log(phone);

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Anmol" });
    }, 2000);
  });
}

function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, status: "pending" });
    }, 2000);
  });
}

function fetchNotifications() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Welcome", "New orders to be fulfilled"]);
    }, 2000);
  });
}

async function loadDashboard() {
  //   const user = await fetchUser();
  //   // pause
  //   const orders = await fetchOrders();
  //   // pause
  //   const notifications = await fetchNotifications();
  // // pause

  // all promises must succeed before continuing i.e. before loading the dashboard
  const [user, orders, notifications] = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);

  console.log(user, orders, notifications);
}

// loadDashboard();

// class User {
//   greet() {
//     console.log("hello");
//   }

//   static hi() {
//     console.log("hi");
//   }
// }
// const u1 = new User();
// u1.greet();
// User.hi();

class User {
  constructor(name, role) {
    this.name = name;
    this._role = role;
  }

  set role(data) {
    const { newRole, changedBy } = data;

    if (changedBy !== "admin") {
      console.log("Access denied");
      return;
    }

    this._role = newRole;
  }
}

const u1 = new User("abc", "user");
u1.role = {
  newRole: "manager",
  changedBy: "user",
};
console.log(u1);
