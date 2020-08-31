let myLibrary = [];

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

btn.addEventListener("click", (e) => {
  formSection.classList.toggle("form_section");
});

function addBookToLibrary() {}
