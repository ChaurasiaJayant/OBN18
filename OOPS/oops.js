function student(name, roll) {
  this.name = name;
  this.rollNo = roll;

  this.greet = function (name) {
    return `Hello , my name is ${this.name}`;
  };
}

const jayant = new student("Jayant", 20);
console.log(jayant.greet());

class Car {
  constructor(color, car) {
    ((this.color = color), (this.car = car), (this.speed = 40));
  }

  running() {
    console.log(
      `${this.color} ${this.car} car is running at ${this.speed} km/h`,
    );
  }
}

let bmw = new Car("Blue", "bmw");
let audi = new Car("Red", "Audi");
audi.running();
bmw.running();
