import { Admin } from "./modules/Admin.js";
import { Member } from "./modules/Member.js";
import { User } from "./modules/User.js";

const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection");
const borrowedSection = document.getElementById("borrowedBooks");

let currentUser = new Member("Samantha", "samantha@email.com");;
userSwitcher.addEventListener("change", (e) => {
  const selected = e.target.value;

  currentUser = selected === "admin"
      ? new Admin("Senthur", "senthur@email.com")
      : new Member("Samantha", "samantha@email.com");

      bookSection.style.display = (selected === "admin" ? "block" : "none");
      borrowedSection.style.display = selected === "admin" ? "none" : "block";
    }
);

// Initial render for bookEntry
bookSection.style.display = 'none';
