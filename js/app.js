/* Author Mahmoud Ajeeb <mahmoud.ajeeb@outlook.com> */

const navMobile = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkShow 0.5s ease forwards ${
          index / 7 + 0.9
        }s`;
      }
    });
  });
};

navMobile();
