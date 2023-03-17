/*Get elements from HTML*/
const dropdownBtn = document.getElementById("dropdown-btn");
const navBar = document.getElementById("navbar");
const dropdown = document.querySelector(".dropdown");
const sticky = navBar.offsetTop;
//Offsets when navbar activates
const offset = 50;

dropdownBtn.addEventListener("click", () => {
  //Open dropdown
  dropdown.classList.toggle("dropdown-open");
});

// When the user scrolls the page, execute sticky navbar
window.onscroll = function () {
  sticknavbar();
};

function sticknavbar() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}
