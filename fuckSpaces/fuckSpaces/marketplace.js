//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal("div", {
  delay: 500,
  origin: "top",
});

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
