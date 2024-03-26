document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
  
    var currentIndex = 0;
    var images = document.querySelectorAll(".slider-img");
    console.log("Found " + images.length + " images");
  
    function rotateImages() {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
      console.log("Rotating to image index " + currentIndex);
    }
  
    setInterval(rotateImages, 3000);
  });