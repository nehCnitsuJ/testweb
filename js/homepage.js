/*Get elements from HTML*/
const dropdownBtn = document.getElementById("dropdown-btn");
const navBar = document.getElementById("navbar");
const dropdown = document.querySelector(".dropdown");
//Offsets when navbar activates
const offset = 50;

dropdownBtn.addEventListener("click", () => {
  //Open dropdown
  dropdown.classList.toggle("dropdown-open");
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickynav();
};

// Get the navbar
var navbar = document.getElementById("navbaractual");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
