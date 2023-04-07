const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const slideWidth = slides.querySelector('.slide').clientWidth;
let slideIndex = 0;

function showSlide() {
  slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

function slidePrev() {
  if (slideIndex === 0) {
    slideIndex = slides.children.length - 1;
  } else {
    slideIndex--;
  }
  showSlide();
}

function slideNext() {
  if (slideIndex === slides.children.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
}

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

