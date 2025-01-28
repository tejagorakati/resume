// JavaScript for Image Slider (auto sliding)
let sliderImages = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function slideImages() {
    // Hide the current image
    sliderImages[currentIndex].style.transform = 'translateX(-100%)';

    // Move to the next image
    currentIndex = (currentIndex + 1) % sliderImages.length;

    // Show the next image
    sliderImages[currentIndex].style.transform = 'translateX(0)';
}

// Set interval to change images every 3 seconds
setInterval(slideImages, 3000);
