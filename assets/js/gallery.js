// Credit: code for image carousel taken from LogRocket Frontend Analytics website and edited to fit the project's needs
// blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

// Select all slides
const slides = document.querySelectorAll(".slide");

// Loop through the slides and set each slide's translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// Select next slide button
const nextSlide = document.querySelector(".btn-next");

// Current slide counter
let curSlide = 0;
// Maximum number of slides
let maxSlide = slides.length - 1;

// Add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // Check if current slide is the last and prevent moving further
  if (curSlide === maxSlide) {
    return; // Stops at the last slide
  } else {
    curSlide++;
  }

  // Move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// Add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // Check if current slide is the first and prevent moving further
  if (curSlide === 0) {
    return; // Stops at the first slide
  } else {
    curSlide--;
  }

  // Move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
