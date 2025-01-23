// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
});

// Close the hamburger menu when a link is clicked
const links = document.querySelectorAll('#menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden'); // Close the menu when any link is clicked
    });
});