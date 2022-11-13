const input = document.querySelector("#validation-input");

const lengthOfInput = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  input.classList.add("valid", "invalid");

  if (input.value.length === lengthOfInput) {
    input.classList.remove("invalid");
  } else input.classList.remove("valid");
}
