class Stack {
  #items;
  constructor() {
    this.#items = [];
  }

  push(val) {
    this.#items.push(val);
  }

  pop() {
    let popp = this.#items.pop();
    console.log(popp);
  }

  peek() {
    let top = this.#items[this.#items.length - 1];
    console.log(top);
  }

  clear() {
    this.#items = [];
  }

  print() {
    console.log(this.#items);
  }
}

// let item1 = new Stack();
// console.log(item1);
// item1.push(1);
// item1.push(4);
// console.log(item1);

// // item1.pop();
// item1.push(5);
// item1.push(6);
// item1.push(7);

// item1.peek();
// item1.clear();
// console.log(item1);

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`Speed accelerated by ${this.amount} km/h`);
  }

  brake(amount) {
    this.speed -= amount;
    console.log(`Speed reduced by ${this.amount} km/h`);
  }

  getInfo() {
    console.log(
      `The current speed of the vehicle ${this.brand} is ${this.speed}`,
    );
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, speed, batteryLevel) {
    super(brand, speed);

    this.batteryLevel = batteryLevel;
  }

  charge(amount) {
    this.batteryLevel += amount;
  }

  getInfo() {
    console.log(
      `The current batter level of the vehicle is ${this.batteryLevel}`,
    );
    console.log(`The current speed of vehicle ${this.brand} is ${this.speed}`);
  }
}

let tata = new Vehicle("tata", 40);
console.log(tata);
tata.accelerate(40);
console.log(tata);
tata.brake(20);
console.log(tata);

let ev6 = new ElectricCar("Mahindra", 40, 50);
console.log(ev6);
