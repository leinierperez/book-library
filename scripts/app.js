let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const btn = document.getElementById("add_book");
const formSection = document.querySelector(".form_section");
const form = document.querySelector(".form_popup");
const closeBtn = document.querySelector(".close_btn");
const bookCards = document.querySelector(".book_cards");

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
    cardSection.setAttribute("bookIndex", i);
    if (myLibrary[i].isRead) {
      readToggleBtn.style.color = "black";
    } else {
      readToggleBtn.style.color = "red";
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let titleValue;
  let authorValue;
  let pagesValue;
  let checkBox;
  formSection.classList.toggle("form_section");
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
    form.reset();
  });
  let book = new Book(titleValue, authorValue, pagesValue, checkBox);
  myLibrary.push(book);
  displayBook();
});
