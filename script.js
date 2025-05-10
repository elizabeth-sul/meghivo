let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const video = document.getElementById("intro-video");
  const saveTheDate = document.getElementById("save-the-date");

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
    
});

// window.addEventListener("orientationchange", () => {
//   setTimeout(() => {
//     location.reload();
//   }, 300);
// });


// setTimeout(() => {
//   saveTheDate.style.display = "none";
//   carousel.style.display = "block";
// }, 3000); // 3 másodpercig látszik a "Save the date", mint a videó végén

