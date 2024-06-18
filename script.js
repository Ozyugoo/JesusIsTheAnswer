// document.addEventListener("DOMContentLoaded", function () {
//   let iconic = document.getElementById("toggle");
//   let times = document.getElementById("toggleMenu");
//   let menu = document.querySelector(".menu");

//   iconic.addEventListener("click", function () {
//     menu.classList.toggle("active");
//     iconic.classList.toggle("hidden");
//     times.classList.toggle("active");
//   });

//   times.addEventListener("click", function () {
//     menu.classList.toggle("active");
//     iconic.classList.toggle("hidden");
//     times.classList.toggle("active");
//   });
// });

function toggleSideBar() {
  let sidebar = document.getElementById("sideBarModal");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}

let sideBarLinks = document.querySelectorAll(".sideBar-modal a");
sideBarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("sideBarModal").style.display = "none";
  });
});
