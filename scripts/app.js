let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

const btn = document.getElementById("add_book");
const formSection = document.querySelector(".form_section");
const form = document.querySelector(".form_popup");
const closeBtn = document.querySelector(".close_btn");
const bookCards = document.querySelector(".book_cards");
const formTitle = document.getElementById("form_title");
const formAuthor = document.getElementById("form_author");
const formPages = document.getElementById("form_pages");
const readCheckBox = document.getElementById("isRead");

btn.addEventListener("click", (e) => {
  formSection.classList.toggle("form_section");
});

closeBtn.addEventListener("click", (e) => {
  formSection.classList.toggle("form_section");
});

function displayBook() {
  let cardSection = document.createElement("section");
  cardSection.className = "card";
  let options = document.createElement("div");
  options.className = "options";
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "x";
  removeBtn.className = "remove";
  let readToggleBtn = document.createElement("button");
  readToggleBtn.textContent = "Read";
  readToggleBtn.className = "toggle_read";
  let cardTitle = document.createElement("h1");
  cardTitle.id = "title";
  let cardAuthor = document.createElement("h3");
  cardAuthor.id = "author";
  let cardPages = document.createElement("h4");
  cardPages.id = "pages";

  for (let i = 0; i < myLibrary.length; i++) {
    cardSection.appendChild(options);
    options.appendChild(removeBtn);
    options.appendChild(readToggleBtn);
    cardSection.appendChild(cardTitle);
    cardSection.appendChild(cardAuthor);
    cardSection.appendChild(cardPages);
    bookCards.appendChild(cardSection);

    cardTitle.textContent = myLibrary[i].title;
    cardAuthor.textContent = myLibrary[i].author;
    cardPages.textContent = myLibrary[i].pages;
    removeBtn.setAttribute("btnBookIndex", i);
    readToggleBtn.setAttribute("readBookIndex", i);
    if (myLibrary[i].isRead) {
      readToggleBtn.style.color = "black";
    } else {
      readToggleBtn.style.color = "red";
    }
  }
  removeBtn.addEventListener("click", (e) => {
    let index = e.target.getAttribute("btnBookIndex");
    myLibrary.splice(index, 1);
    cardSection.remove();
  });

  readToggleBtn.addEventListener("click", (e) => {
    let index = e.target.getAttribute("readBookIndex");

    myLibrary[index].isRead = !myLibrary[index].isRead;
    readToggleBtn.style.color = myLibrary[index].isRead ? "black" : "red";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let titleVal = formTitle.value;
  let authorVal = formAuthor.value;
  let pagesVal = formPages.value;
  let isChecked;
  readCheckBox.checked ? (isChecked = true) : (isChecked = false);

  let book = new Book(titleVal, authorVal, pagesVal, isChecked);
  formSection.classList.toggle("form_section");
  myLibrary.push(book);
  console.log(book);
  displayBook();
  form.reset();
});
