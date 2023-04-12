// Get the carousel container and all the carousel slides
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');

// Get the navigation buttons
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

// Set the index of the slide that is currently displayed
let currentIndex = 0;

// Show the first slide and hide the rest
carouselSlides[currentIndex].classList.add('active');
for (let i = 1; i < carouselSlides.length; i++) {
  carouselSlides[i].classList.remove('active');
}

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Function to show the previous slide
function showPreviousSlide() {
  // Hide the current slide
  carouselSlides[currentIndex].classList.remove('active');
  // Calculate the index of the previous slide
  currentIndex = (currentIndex === 0) ? carouselSlides.length - 1 : currentIndex - 1;
  // Show the previous slide
  carouselSlides[currentIndex].classList.add('active');
}

// Function to show the next slide
function showNextSlide() {
  // Hide the current slide
  carouselSlides[currentIndex].classList.remove('active');
  // Calculate the index of the next slide
  currentIndex = (currentIndex === carouselSlides.length - 1) ? 0 : currentIndex + 1;
  // Show the next slide
  carouselSlides[currentIndex].classList.add('active');
}
