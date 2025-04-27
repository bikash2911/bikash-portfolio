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

