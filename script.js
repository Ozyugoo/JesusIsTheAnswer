document.addEventListener("DOMContentLoaded", function () {
  let iconic = document.getElementById("toggle");

  iconic.addEventListener("click", function () {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  });
});
