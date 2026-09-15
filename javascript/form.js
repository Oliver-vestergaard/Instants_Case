const form = document.querySelector("#contributionForm");
const overlayBackground = document.querySelector("#overlayBackground");
const overlay = document.querySelector("#IDOverlay");
const closeButton = document.querySelector("#closeThankYou");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  overlayBackground.classList.add("active");
});

closeButton.addEventListener("click", function () {
  overlayBackground.classList.remove("active");

  form.reset();
});

overlayBackground.addEventListener("click", function (event) {
  if (event.target === overlayBackground) {
    overlayBackground.classList.remove("active");
  }
});
