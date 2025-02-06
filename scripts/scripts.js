document.addEventListener("DOMContentLoaded", function () {
  loadBooksFromStorage(); // ✅ Ensuring function exists before calling it
});

// ✅ Define displayBook FIRST before calling it
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

// ✅ Define loadBooksFromStorage AFTER displayBook exists
function loadBooksFromStorage() {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  books.forEach(displayBook); // Now this function is correctly defined before calling it
}
