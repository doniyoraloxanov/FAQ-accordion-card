let numberOfButtons = document.querySelectorAll(".row").length;

console.log(numberOfButtons);

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".row")[i].addEventListener("click", function () {
    document.querySelectorAll(".answer")[i].classList.toggle("answer-visible");
    document
      .querySelectorAll(".accordion-title")
      [i].classList.toggle("quest-bold");
    document
      .querySelectorAll(".accordion-icon-bottom")
      [i].classList.toggle("hidden");
    document
      .querySelectorAll(".accordion-icon-top")
      [i].classList.toggle("hidden");
  });
}
