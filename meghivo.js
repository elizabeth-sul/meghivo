let currentIndex = 0;
const slides = document.querySelectorAll(".slide");


// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}




document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    // Navigate to the next slide
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  } else if (event.code === "ArrowLeft") {
    // Navigate to the previous slide
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }
});

document.querySelectorAll(".prev").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  });
});
document.querySelectorAll(".next").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  });
});

// Mobil érintéses lapozás
let touchStartX = 0;

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50 && currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  } else if (touchEndX > touchStartX + 50 && currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});


