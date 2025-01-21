/*window.addEventListener("load", () => {
    // Only activate the carousel for screens smaller or equal to 640px (sm breakpoint)
    if (window.innerWidth <= 640) {
      autoSlide();
    }
  });
  
  function autoSlide() {
    setInterval(() => {
      slide(getItemActiveIndex() + 1);
    }, 3000); // Increase interval for better visibility
  }
  
  function slide(toIndex) {
    const items = document.querySelectorAll(".smartphone_carousel_item");
    const currentItem = document.querySelector(".smartphone_carousel_item_active");
  
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
        currentItem.classList.remove("smartphone_carousel_item_active");
        nextItem.classList.add("smartphone_carousel_item_active");
        this.removeEventListener("transitionend", handleTransitionEnd);
      },
      { once: true }
    );
  }
  
  function getItemActiveIndex() {
    const items = document.querySelectorAll(".smartphone_carousel_item");
    return Array.from(items).indexOf(
      document.querySelector(".smartphone_carousel_item_active")
    );
  }
  */