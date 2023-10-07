let slideIndex = 1;

// Function to move to the next slide
function nextSlide() {
  if (slideIndex > 5) {
    slideIndex = 1;
  }
  const radioBtn = document.getElementById(`img-${slideIndex}`);
  radioBtn.checked = true;
  slideIndex++;
}

// Automatically move to the next slide every 4 seconds
setInterval(nextSlide, 6000);
//End of next Slide Function