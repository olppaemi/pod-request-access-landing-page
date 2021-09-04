const form = document.querySelector("form");
const email = document.querySelector(".email-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "" || !email.validity.valid) {
    form.classList.add("invalid");
  } else {
    form.classList.remove("invalid");
  }
});
