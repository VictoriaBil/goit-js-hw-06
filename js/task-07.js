const refs = {
  inputField: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputField.addEventListener("input", onInput);

function onInput(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
}
