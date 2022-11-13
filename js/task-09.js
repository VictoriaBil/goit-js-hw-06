function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChange = document.querySelector(".change-color");
buttonChange.addEventListener("click", bodyColorChange);
function bodyColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}
