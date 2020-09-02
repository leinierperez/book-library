Book1 = new Book("rambo", "rambot", 325, false);
Book2 = new Book("rbncvn", "ramotnbmbn", 354, true);
Book3 = new Book("ramgfdg", "rboarew", 341, true);

let myLibrary = [];

// myLibrary.push(Book1);
// myLibrary.push(Book2);
// myLibrary.push(Book3);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const btn = document.getElementById("add_book");
const formSection = document.querySelector(".form_section");
const removeBook = document.querySelector(".remove");
const readToggle = document.querySelector(".toggle_read");
const form = document.querySelector(".form_popup");
const submit = document.getElementById("submit");
const formTitle = document.getElementById("form_title");
const formAuthor = document.getElementById("form_author");
const formPages = document.getElementById("form_pages");
const readCheckBox = document.getElementById("isRead");
const cardTitle = document.getElementById("title");
const cardAuthor = document.getElementById("author");
const cardPages = document.getElementById("pages");
const closeBtn = document.querySelector(".close_btn");

btn.addEventListener("click", (e) => {
  formSection.classList.toggle("form_section");
});

closeBtn.addEventListener("click", (e) => {
  formSection.classList.toggle("form_section");
});

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    cardTitle.textContent = myLibrary[i].title;
    cardAuthor.textContent = myLibrary[i].author;
    cardPages.textContent = myLibrary[i].pages;
    if (myLibrary[i].isRead) {
      readToggle.style.color = "black";
    } else {
      readToggle.style.color = "red";
    }
  }
}

form.addEventListener("submit", (e) => {
  let titleValue;
  let authorValue;
  let pagesValue;
  let checkBox;
  formSection.style.display = "none";
  e.preventDefault();
  const formValues = new FormData(e.target);
  [...formValues.entries()].forEach(([key, val]) => {
    if (key === "title") {
      titleValue = val;
    }
    if (key === "author") {
      authorValue = val;
    }
    if (key === "pages") {
      pagesValue = val;
    }
    if (key === "checkbox") {
      if (val === "on") checkBox = true;
    } else checkBox = false;
  });
  let book = new Book(titleValue, authorValue, pagesValue, checkBox);
  myLibrary.push(book);
  displayBook();
});
