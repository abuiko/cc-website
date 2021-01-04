const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-items");

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
};

navSlide();
