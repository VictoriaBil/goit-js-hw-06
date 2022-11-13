const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputBlur);
function onInputBlur() {
  if (refs.input.dataset.length === refs.input.getAttribute("data-length")) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  }
  refs.input.classList.remove("valid");
  refs.input.classList.add("invalid");
}
