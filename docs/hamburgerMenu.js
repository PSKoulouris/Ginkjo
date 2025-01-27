
/*// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
});

// Close the hamburger menu when a link is clicked
const links = document.querySelectorAll('#menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add("-translate-x-full"); // Close the menu when any link is clicked
    });
}); */

const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

// Handle hamburger button click (show menu and show cross)
hamburger.addEventListener("click", () => {
    menu.classList.toggle("-translate-x-full"); // Toggle the sliding menu
    hamburger.classList.add("hidden"); // Hide the hamburger icon
    cross.classList.remove("hidden"); // Show the cross icon
});

// Handle cross button click (hide menu and show hamburger)
cross.addEventListener("click", () => {
    menu.classList.add("-translate-x-full"); // Hide the menu
    cross.classList.add("hidden"); // Hide the cross icon
    hamburger.classList.remove("hidden"); // Show the hamburger icon
});

// Close the menu when any link inside the menu is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("-translate-x-full"); // Close the menu when a link is clicked
        cross.classList.add("hidden"); // Hide the cross icon
        hamburger.classList.remove("hidden"); // Show the hamburger icon
    });
});




