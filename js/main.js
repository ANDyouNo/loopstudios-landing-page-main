const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  window.scrollTo(scrollX, 0);
  document.querySelector(".menu").classList.toggle("closed");
  document.querySelector("body").classList.toggle("scroll-lock");
  document.querySelectorAll(".menu__link").forEach((link, index) => {
    console.log(index);
    if ((index + 1) % 2 === 0) {
      //even
      link.classList.toggle("animation-even");
    } else {
      //odd
      link.classList.toggle("animation-odd");
    }
  });
});
