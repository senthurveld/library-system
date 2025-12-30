import { User } from "./User.js";

export class Member extends User {
  constructor(name, email) {
    super(name, email);
  }

  borrowBook() {

  }

  returnBook() {

  }
  
  getRole() {
    return "Member";
  }
}
