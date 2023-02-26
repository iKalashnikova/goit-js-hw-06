function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const backgroundColor =  document.querySelector('body')
const colorName = document.querySelector('.color')

function changeColor (){
  const color = getRandomHexColor();
  backgroundColor.style.backgroundColor = color;

  colorName.textContent = getRandomHexColor();
}

btnChangeColor.addEventListener('click', changeColor)