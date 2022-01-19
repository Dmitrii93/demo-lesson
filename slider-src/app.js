const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");
let activeSlideIndx = 0;

sidebar.style.top = `${-(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndx++;

    if (activeSlideIndx === slidesCount) {
      activeSlideIndx = 0;
    }
  }
  if (direction === "down") {
    console.log("down");
    activeSlideIndx--;
    if (activeSlideIndx < 0) {
      activeSlideIndx = slidesCount - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndx * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndx * height}px)`;
}
