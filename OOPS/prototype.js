function User(name) {
  this.name = name;
  this.greetInfo = `Hello i'm ${this.name}`;
  this.greet = function () {
    return `Hello I am ${this.name}`;
  };
}

User.prototype.farewell = function () {
  console.log(`Goodbye, ${this.name}`);
};

const anshu = new User("anshu");
// anshu.farewell();
// console.log(anshu);

// animal function name dog, breed, age -> this.sound -> {name} makes bark sound
// attack prototype -> {name} bites!!!!!

function Animal(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;

  this.sound = function () {
    console.log(`${this.name} barks!!!`);
  };
}

Animal.prototype.attack = function () {
  console.log(`${this.name} bites!!!`);
};

let rocky = new Animal("Rocky", "German", 8);
// console.log(rocky);
// rocky.sound();

rocky.attack();
