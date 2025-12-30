import { Book } from "../modules/Book.js";

export class LibrarySystem {
  #books;

  constructor() {
    this.#books = [];
  }

  addBook(book) {
    this.#books.push(book);
  }

  getAvailableBook() {
    return this.#books.filter((book) => book.isAvailable);
  }

  getAllBooks() {
    return this.#books;
  }

  getBookById(id) {
    return this.#books.find(b => b.id === id)
  }
}
