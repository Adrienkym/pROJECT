document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to the About Us page of Book Tracker!");
});
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(0);
    if (document.querySelector(targetId)) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
