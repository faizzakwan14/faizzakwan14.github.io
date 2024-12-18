// Select all gallery images
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

// Function to switch images
function switchImage() {
    // Remove 'active' class from the current image
    images[currentIndex].classList.remove('active');

    // Calculate the next index
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' class to the next image
    images[currentIndex].classList.add('active');
}

// Initialize the first image as active
images[currentIndex].classList.add('active');

// Set interval to switch images every 3 seconds
setInterval(switchImage, 3000);

// Array of image paths
const imagesslider = ["cert_github.jpg", "cert_react.jpg", "cert_sql.jpg", "cert_javascript.jpg", "cert_management.jpg"];

// Get references to DOM elements
const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Track the current image index
let currentIndex1 = 0;

// Function to update the displayed image
function updateImage() {
  sliderImage.src = imagesslider[currentIndex1];
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
  currentIndex1 = (currentIndex1 - 1 + imagesslider.length) % imagesslider.length;
  updateImage();
});

nextButton.addEventListener("click", () => {
  currentIndex1 = (currentIndex1 + 1) % imagesslider.length;
  updateImage();
});

// Initialize the slider with the first image
updateImage();