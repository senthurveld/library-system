import { Admin } from "./modules/Admin.js";
import { Member } from "./modules/Member.js";
import { Book } from "./modules/Book.js";
import { LibrarySystem } from "./services/LibraryService.js";

const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection");
const borrowedSection = document.getElementById("borrowedBooks");

const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const library = new LibrarySystem();

let currentUser = new Member("Samantha", "samantha@email.com");

userSwitcher.addEventListener("change", (e) => {
  const selected = e.target.value;

  currentUser =
    selected === "admin"
      ? new Admin("Senthur", "senthur@email.com")
      : new Member("Samantha", "samantha@email.com");

  bookSection.style.display = selected === "admin" ? "block" : "none";
  borrowedSection.style.display = selected === "admin" ? "none" : "block";

  renderBooks();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, genre);

  library.addBook(book);

  renderBooks();

  bookForm.reset();
});

function renderBooks() {
  bookList.innerHTML = "";
  library.getAllBooks().forEach((book) => {
    const li = document.createElement("li");
    li.className = 'bg-white p-4 rounded shodow flex justify-between items-center';
    
    let controls = '';

    if (currentUser.getRole() === "Member" && book.isAvailable) {
      controls = `<button class = "bg-green-600 text-white px-3 py-1 rounded cursor-pointer " data-id = "${book.id}"> Borrow </button>`;
    } else if (currentUser.getRole() === "Admin") {
      controls = `<span class='text-em text-gray-500'>${book.isAvailable ? "Available" : "Borrowed"}</
      span>`;
    }

    li.innerHTML = `
            <div>
            <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>
            </div>
            ${controls}
        `;

    bookList.appendChild(li);
  });
}

bookList.addEventListener('click', (e) => {
    if(e.target.tagName = 'Button') {
        const id = e.target.getAttribute('data-id');
        const action = e.target.getAttribute('data-action');
        const book = library.getBookById(id);

        if(action === 'borrow' && currentUser.getRole() === 'Member' && book) {
            currentUser.borrowBook(book);
            renderBooks();
        }
    }
})

// Initial render for bookEntry
bookSection.style.display = "none";
