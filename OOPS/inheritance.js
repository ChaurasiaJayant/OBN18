class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  inStock() {
    if (this.stock < 1) {
      console.log("The item is out of product");
      return;
    } else {
      return true;
    }
  }

  getPrice() {
    if (this.inStock()) {
      console.log(`${this.price}`);
    } else {
      return false;
    }
  }
}

class DigitalProduct extends Product {
  constructor(name, price, stock, link) {
    super(name, price, stock);

    this.link = link;
  }
  getProduct() {
    console.log(`This is the download link : ${this.link}`);
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, stock, weight) {
    super(name, price, stock);
    this.weight = weight;
  }

  deliver() {
    console.log(
      `Your product name is ${this.name} will charge ${this.weight * 5} rupees`,
    );
  }
}
