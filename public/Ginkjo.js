window.addEventListener("load", () => {
    autoSlide();
  });
  
  function autoSlide() {
    setInterval(() => {
      slide(getItemActiveIndex() + 1);
    }, 5000); // Increase interval for better visibility
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
        nextItem.classList.remove("carousel_item_pos_next");
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
  }