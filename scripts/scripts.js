document.addEventListener("DOMContentLoaded", function () {
  loadBooksFromStorage();
});

function displayBook(book) {
  const categoryElement = document.querySelector(`#${book.category}List`);

  if (categoryElement) {
    const bookElement = document.createElement("li");
    bookElement.innerHTML = `
            <div class="book">
                <img src="${book.imageUrl}" alt="${book.title}" />
                <div>
                    <h3>${book.title}</h3>
                    <p>${book.description}</p>
                </div>
            </div>
        `;
    categoryElement.appendChild(bookElement);
  }
}

function loadBooksFromStorage() {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  books.forEach(displayBook);
}
function addBook(category, title, description, imageUrl) {
  const bookData = { category, title, description, imageUrl };

  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(bookData);
  localStorage.setItem("books", JSON.stringify(books));

  displayBook(bookData); //
}
document.querySelector("main").addEventListener("dblclick", function () {
  addBook("UpcomingList", "New Book", "A great new book!", "images/sample.jpg");
});

// Event Listener to clear all books from storage (Press "Delete" Key)
document.addEventListener("keydown", function (event) {
  if (event.key === "Delete") {
    localStorage.removeItem("books");
    alert("All saved books have been cleared!");
    location.reload();
  }
});
