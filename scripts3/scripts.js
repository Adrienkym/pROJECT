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
const contactLink = document.querySelector(".contact a");
if (contactLink) {
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    const userConfirmation = confirm(
      "Would you like to send an email to our support team?"
    );
    if (userConfirmation) {
      window.location.href = contactLink.href;
    }
  });
}
