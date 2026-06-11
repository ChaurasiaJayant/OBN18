class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  area() {
    return 3.14 * 5 * 5;
  }
}

class Rectangle extends Shape {
  area() {
    return 10 * 20;
  }
}

function printArea(shape) {
  console.log(shape.area());
}

printArea(new Circle());
printArea(new Rectangle());
