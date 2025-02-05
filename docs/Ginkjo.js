/*window.addEventListener("load", () => {
  // Only activate the carousel for screens 1024px and above (lg breakpoint)
  if (window.innerWidth >= 1024) {
    console.log('Activating Desktop Carousel');
    autoSlide(); // Call the autoSlide function to start the carousel
  }
});

function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 3000); // Increase interval for better visibility
}

function slide(toIndex) {
  const items = document.querySelectorAll(".carousel_item");
  const currentItem = document.querySelector(".carousel_item_active");

  if (toIndex >= items.length) {
    toIndex = 0;
  }

  const nextItem = items[toIndex];

  // Fade out the current item and fade in the next item smoothly
  currentItem.style.opacity = "0"; // Start fading out the current item
  nextItem.style.opacity = "1"; // Start fading in the next item

  // Once the fade in is complete, update class names
  nextItem.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      currentItem.classList.remove("carousel_item_active");
      nextItem.classList.add("carousel_item_active");
      this.removeEventListener("transitionend", handleTransitionEnd);
    },
    { once: true }
  );
}

function getItemActiveIndex() {
  const items = document.querySelectorAll(".carousel_item");
  return Array.from(items).indexOf(
    document.querySelector(".carousel_item_active")
  );
} */

// Function to handle the carousel for a given class (desktop or smartphone)
function switchCarouselItems(carouselClass) {
  const items = document.querySelectorAll(carouselClass);
  let currentIndex = 0;
  let nextIndex = 1;

  setInterval(function () {
    const currentItem = items[currentIndex];
    const nextItem = items[nextIndex];

    // Fade out the current item
    currentItem.classList.remove('opacity-100', 'z-10');
currentItem.classList.add('opacity-0', 'z-0', 'absolute'); // Add 'absolute'

nextItem.classList.remove('opacity-0', 'z-0', 'absolute'); // Remove 'absolute'
nextItem.classList.add('opacity-100', 'z-10');

    // Update the indices
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % items.length; // Loop to the first item after the last one
  }, 3000); // Adjust the interval (3 seconds)
}

document.addEventListener('DOMContentLoaded', function () {
  // Trigger carousel switching for both desktop and smartphone versions
  switchCarouselItems('.carousel_item'); // Desktop version
  switchCarouselItems('.smartphone_carousel_item'); // Smartphone version
  switchCarouselItems('.iPad_carousel_item'); // iPad version
});
  
  


