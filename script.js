const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_bar = document.querySelector(".navbar");
const humburger = document.querySelector(".humburger");
const navLinks = document.querySelector(".navbar-link");

//menu open/close toggle
const toggleNavbar = () => {
  nav_bar.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// menu close on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav_bar.classList.remove("active");
  });
});
// contact form ko lagi

document.getElementById("form").addEventListener("submit", function (e) {
  const name = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Full name should contain only letters and spaces.");
    e.preventDefault();
  }

  if (!/^\d{7,15}$/.test(phone)) {
    alert("Phone number should contain only digits (7–15 characters).");
    e.preventDefault();
  }
});
