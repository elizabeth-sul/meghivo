let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const videoContainer = document.getElementById("video-container");
  const video = document.getElementById("intro-video");
  const saveTheDate = document.getElementById("save-the-date");
  const carousel = document.getElementById("carousel");



  startButton.addEventListener("click", function () {
    // Elrejtjük a start képernyőt
    startScreen.style.display = "none";

    // Megjelenítjük és elindítjuk a videót
    video.style.display = "block";
    video.play();
  });

  // Függvény a videó átugrásához és továbblépéshez
function skipVideo() {
  if (!video.paused) {
  video.pause();
  }
  video.currentTime = video.duration; // azonnal a végére ugrik
  video.style.display = "none"; // elrejti a videót
  saveTheDate.style.display = "flex"; // megjeleníti a "Save the date" feliratot
  }
// Event listener for when the video ends
video.addEventListener("ended", skipVideo);

  // Billentyű lenyomásra átugrás (csak szóköz: key === ' ')
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault(); // Megakadályozza az oldallapozást
    skipVideo();
  }
});

// Kattintásra átugrás
video.addEventListener("click", skipVideo);
// Mobil érintéses átugrás
video.addEventListener("touchstart", skipVideo); (event) 


    // Videó végén megjelenik a Save the Date szöveg
    video.addEventListener("ended", function () {
      video.style.display = "none";
      saveTheDate.style.display = "block";
    });

    
});

window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    location.reload();
  }, 300);
});


  function showSaveTheDateAndContinue() {
    saveTheDate.style.display = "block";
    setTimeout(() => {
      goToCarousel();
    }, 3000); // 3 másodpercig mutatja a feliratot
  }

  setTimeout(() => {
    saveTheDate.style.display = "none";
    carousel.style.display = "block";
  }, 3000); // 3 másodpercig látszik a "Save the date", mint a videó végén

  // "Következő" button functionality
document.getElementById("next-button").addEventListener("click", () => {
  saveTheDate.style.display = "none"; // Hide "Save the Date"
  carousel.style.display = "block"; // Show the carousel
  showSlide(currentIndex); // Display the first slide
});

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


document.getElementById("next-button").addEventListener("click", () => {
  saveTheDate.style.display = "none"; // Hide "Save the Date"
  carousel.style.display = "block"; // Show the carousel
  showSlide(currentIndex); // Display the first slide
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}

function goToCarousel() {
  videoContainer.style.display = "none";
  saveTheDate.style.display = "none";
  carousel.style.display = "block";
  showSlide(currentIndex);
}
document.getElementById('next-button').addEventListener('click', () => {
  document.getElementById('video-container').style.display = 'none';
  document.getElementById('carousel').style.display = 'block';
});
