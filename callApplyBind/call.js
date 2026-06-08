const person = {
  name: "Anshu",

  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

const person2 = {
  name: "Ajay",
};

// person.greet();
// person2.greet();  This will  ot work because .this is not defined for person2

let personn = {
  name: "Babban",
};

function greet() {
  console.log(`My name is ${this.name} the DON`);
}

// greet.call(personn);

function greet(city, country) {
  console.log(
    `Hi! my name is ${this.name} and I live in ${city} which is located in the beatiful country of ${country}`,
  );
}

// greet.call(personn, "Gorakhpur", "India");

// In Apply everthing is same , the only difference is that the arguments are passed in ARRAY

function greet(city, country) {
  console.log(`${this.name} lives in ${city} which is in ${country}`);
}

// greet.apply(personn, ["LKO", "IND"]);

// bind
const obj = {
  name: "Jayant",
};

function show() {
  console.log(this.name);
}

const fn = show.bind(obj);

fn();
