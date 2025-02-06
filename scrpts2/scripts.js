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
