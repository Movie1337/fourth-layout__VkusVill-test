const slider = document.querySelector(".main__slider-container");
const sliderLine = document.querySelector(".main__slider-questions");
const sliderImages = document.querySelectorAll(".main__slider-question");
const sliderBtnNext = document.querySelector(".main__slider-button");

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderBtnNext.addEventListener("click", nextSlide);

function nextSlide() {
  sliderCount++;

  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }
  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
