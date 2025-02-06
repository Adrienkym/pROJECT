document.addEventListener("DOMContentLoaded", function () {
  loadProfileData();
});
function loadProfileData() {
  const username = localStorage.getItem("username") || "Reader";
  const booksRead = localStorage.getItem("booksRead") || "35";
  const currentlyReading = localStorage.getItem("currentlyReading") || "2";
  const wishlist = localStorage.getItem("wishlist") || "10";

  document.querySelector(".profile-header h2").textContent = username;
  document.querySelector(".profile-info ul").innerHTML = `
        <li><strong>Books Read:</strong> ${booksRead}</li>
        <li><strong>Currently Reading:</strong> ${currentlyReading}</li>
        <li><strong>Wishlist:</strong> ${wishlist}</li>
    `;
}
function updateProfile() {
  const newUsername = prompt("Enter your new username:");
  if (newUsername && newUsername.trim() !== "") {
    localStorage.setItem("username", newUsername);
    document.querySelector(".profile-header h2").textContent = newUsername;
  }
}
function addBookToHistory(title, description, imageUrl) {
  const bookHistorySection = document.querySelector(".book-history");

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.innerHTML = `
        <img src="${imageUrl}" alt="${title}" />
        <div>
            <h4>${title}</h4>
            <p>${description}</p>
        </div>
    `;

  bookHistorySection.appendChild(bookDiv);
}
document
  .querySelector(".profile-header")
  .addEventListener("click", function () {
    const title = prompt("Enter book title:");
    const description = prompt("Enter book description:");
    const imageUrl = prompt("Enter book image URL:");

    if (title && description && imageUrl) {
      addBookToHistory(title, description, imageUrl);
    } else {
      alert("All fields must be filled!");
    }
  });
