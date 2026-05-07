class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  // Methods
  rentOut() {
    if (this.isAvailable == true) {
      this.isAvailable = false;
    } else {
      console.log(`${this.title} is already to someone else.`);
    }

    console.log(`${this.title} is rented out successfully`);
  }

  returnBook() {
    if (this.isAvailable == false) {
      this.isAvailable = true;
    } else {
      console.log(`${this.title} is already returned`);
    }
    console.log(`${this.title} returned successfully`);
  }

  checkAvailability() {
    if (this.isAvailable == true) {
      console.log(`${this.title} is available to be rented`);
    } else {
      console.log(`${this.title} is not availabe`);
    }
  }
}

let book1 = new Book("Atomic Habits", "Cilian Murphy", "001");
// console.log(book1);
// book1.rentOut();
// book1.checkAvailability();
// book1.returnBook();
// book1.checkAvailability();

let book2 = new Book("Dictionary", "idk", "002");
// console.log(book2);
book2.checkAvailability();
// book2.rentOut();
