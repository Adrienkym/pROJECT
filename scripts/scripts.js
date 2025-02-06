document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentUrl = window.location.href;

  navLinks.forEach((link) => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    }
  });
});
