document.addEventListener("DOMContentLoaded", function () {
  let iconic = document.getElementById("toggle");
  let times = document.getElementById("toggleMenu");
  let menu = document.querySelector(".menu");

  iconic.addEventListener("click", function () {
    menu.classList.toggle("active");
    iconic.classList.toggle("hidden");
    times.classList.toggle("active");
  });

  times.addEventListener("click", function () {
    menu.classList.toggle("active");
    iconic.classList.toggle("hidden");
    times.classList.toggle("active");
  });
});
