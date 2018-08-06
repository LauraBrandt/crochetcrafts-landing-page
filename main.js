//https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js

document.querySelector(".nav-icon").addEventListener("click", function() {
  var navbar = document.getElementById("nav-bar");
  if (navbar.className === "") {
        navbar.className += " responsive";
    } else {
        navbar.className = "";
    }
});