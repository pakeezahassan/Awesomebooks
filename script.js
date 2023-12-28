const bookEntryArea = document.getElementById("book-entry");
const collectionDisplay = document.getElementById("book-collection");

function createBookEntry(bookTitle, bookAuthor) {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-item";

    const titleElement = document.createElement("p");
    titleElement.innerText = `Title: ${bookTitle}`;

    const authorElement = document.createElement("p");
    authorElement.innerText = `Author: ${bookAuthor}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.onclick = () => bookDiv.remove();
    bookDiv.append(titleElement, authorElement, deleteButton);
    return bookDiv;
}

function addNewBook() {
    const titleInput = document.getElementById("book-title").value.trim();
    const authorInput = document.getElementById("book-author").value.trim();

    if (titleInput && authorInput) {
    const newBook = createBookEntry(titleInput, authorInput);
    collectionDisplay.appendChild(newBook);
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    } else {
    window.alert("Both title and author details are required.");
    }
}
document
    .getElementById("add-book-button")
    .addEventListener("click", addNewBook);
