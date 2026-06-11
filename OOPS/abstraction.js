class CreditCard {
  #cardNumber;
  #cvv;

  constructor(name, cardNumber, CVV) {
    this.name = name;
    this.#cardNumber = cardNumber;
    this.#cvv = CVV;
  }

  // private: validateCard -> cardNumber
  #validateDetails() {
    if (this.#cardNumber.length == 10 && this.#cvv.length == 3) {
      return true;
    } else {
      return false;
    }
  }
}

const ajay = new CreditCard("ajay", "1234567890", "123");
// console.log(ajay);

// product
// name,price,stock
//

class Products {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  orderProduct(name, stock) {
    if (this.stock > 1) {
      this.stock--;
      console.log(`${this.name} ordered`);
    } else {
      console.log("Out of stock");
    }
  }

  applyCoupon(coupon) {
    if (this.#validateCoupon(coupon)) {
      let newPrice = this.price * 0.9;
      console.log(`New price is ${newPrice}`);
    } else {
      console.log("Invalid coupon code");
    }
  }

  #validateCoupon(coupon) {
    const liveCodes = ["CYRIL10", "JAYANT20", "AMAN30"];

    if (liveCodes.includes(coupon)) {
      return true;
    } else {
      return false;
    }
  }
}

const apple = new Products("apple", "90", 2);
// console.log(apple);
// apple.orderProduct();
// apple.applyCoupon("JAYANT20");

class CoffeeMachine {
  makeCoffee() {
    this.boilWater();
    this.addCoffee();
    this.pourIntoCup();
  }

  boilWater() {
    console.log("Boiling water");
  }

  addCoffee() {
    console.log("Adding coffee");
  }

  pourIntoCup() {
    console.log("Pouring coffee");
  }
}
let c1 = new CoffeeMachine();
// c1.makeCoffee();
// c1.addCoffee();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }

// const dog = new Dog("Tommy");

// console.log(dog.name);

class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  eat() {
    super.eat();
    console.log("Dog eating");
  }
}
let d = new Dog();
d.eat();
