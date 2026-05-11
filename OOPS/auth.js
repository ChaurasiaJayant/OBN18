class User {
  #password;
  #isLoggedIn;
  constructor() {
    this.#isLoggedIn = false;
  }

  signUp(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if (this.email === email && this.#password === password) {
      this.#isLoggedIn = true;
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  }
  changePassword(oldPassword, newPassword, confirm) {
    if (oldPassword !== this.#password) {
      console.log("Invalid password");
      return;
    }
    if (newPassword !== confirm) {
      console.log("Confirm password again");
      return;
    }

    this.#password = newPassword;
  }

  logout() {
    if (this.#isLoggedIn == true) {
      this.#isLoggedIn = false;
      console.log("Logout successful");
    } else {
      console.log("User not logged in");
    }
  }

  #getStatus() {
    if (this.#isLoggedIn) {
      console.log("User is logged in already");
    } else {
      console.log("please login");
    }
  }

  isAdmin() {
    if (this.role == "admin") {
      console.log("The user is admin");
    } else {
      console.log("This user is not an admin");
    }
  }
}

class Admin extends User {
  constructor() {
    super();
    this.role = "admin";
  }
}

class Customer extends User {
  constructor() {
    super();
    this.role = "customer";
  }

  getStatus() {
    console.log(`This user is a verified ${this.role}`);
  }
}

class Seller extends User {
  constructor() {
    super();
    this.role = "seller";
  }

  getStatus() {
    console.log(`This user is a verified ${this.role}`);
  }
}

let anshu = new User("anshu", "anshu@gmail.com");

// console.log(anshu);
// anshu.login("anshu@gmail.com", "ABCDEF");
// console.log(anshu);
// anshu.logout();

const customer = new Customer();
customer.signUp("Jayant", "jayantmail.com", "jayant@gmail.com");
