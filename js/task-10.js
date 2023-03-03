function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn =  document.querySelector('[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('[data-destroy]') ;
const inputEl = document.querySelector('input[type="number"]');
const divBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const count = parseInt(inputEl.value.trim());
 
  for (let i = 0; i < count; i += 1) {
     createBoxes(i);
  }
});


function createBoxes (i) {
  const divEl = document.createElement('div');
  divEl.style.width = `${30 + i * 10}px`;
  divEl.style.height = `${30 + i * 10}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  divBoxes.append(divEl);
    return divBoxes;
};

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {

  divBoxes.innerHTML= '';
}
