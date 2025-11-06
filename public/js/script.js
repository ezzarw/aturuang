const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    // scroll ke bawah 🐧
    navbar.classList.replace("top-0", "-top-20");
} else {
    // scroll ke atas 🐧
    navbar.classList.replace("-top-20", "top-0");
  }

  lastScroll = currentScroll
});
