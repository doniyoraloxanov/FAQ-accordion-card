const accordionIconBottom = document.querySelector(".accordion-icon-bottom");
const accordionIconTop = document.querySelector(".accordion-icon-top");
const description = document.querySelector(".accordion-description");

accordionIconBottom.addEventListener("click", () => {
  description.classList.remove("hidden");
  accordionIconBottom.style.display = "none";
  accordionIconTop.classList.remove("hidden");
});

accordionIconTop.addEventListener("click", () => {
  description.classList.add("hidden");
  accordionIconTop.classList.add("hidden");
  accordionIconBottom.style.display = "block";
});
