const slides = document.querySelectorAll(".slide");

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

for (let slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}
