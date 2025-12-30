import { User } from "./User.js";

const borrowedMap = new WeakMap();

export class Member extends User {
  constructor(name, email) {
    super(name, email);
    const borrowedFromStorage =
      JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    borrowedMap.set(this, borrowedFromStorage);
  }

  borrowBook(book) {
    const borrowed = borrowedMap.get(this);
    borrowed.push(book);
    book.isAvailable = false;
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowed));
  }

  returnBook(book) {
      const returnBook = borrowedMap.get(this);
      returnBook.pop(book);
     //  borrowed.push(book);
     //  book.isAvailable = true;
      localStorage.setItem("returnedBooks", JSON.stringify(returnBook));
  }

  getBorrowedBooks() {
    return borrowedMap.get(this);
  }

  getRole() {
    return "Member";
  }
}
