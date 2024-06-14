let offset = 0;
const sliderLine = document.querySelector(".main__slider-questions");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset += 306;
  if (offset > 306) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset -= 306;
  if (offset < 0) {
    offset = 306;
  }
  sliderLine.style.left = -offset + "px";
});
