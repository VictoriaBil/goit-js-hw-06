function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");
buttonChange.addEventListener("click", bodyColorChange);

function bodyColorChange() {
  changeColor.textContent = getRandomHexColor();
  console.log(getRandomHexColor());
  document.body.style.backgroundColor = getRandomHexColor();
}
