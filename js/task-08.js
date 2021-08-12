const mainDiv = document.getElementById('boxes');
const numNewDiv = document.querySelector('input');
const butRend = document.querySelector('button[data-action="render"]');
//Random value of [0,255]
function getRandom() {
  let r = Math.round(Math.random() * (255 - 0) + 0);
  let g = Math.round(Math.random() * (255 - 0) + 0);
  let b = Math.round(Math.random() * (255 - 0) + 0);
  return `rgb(${r},${g},${b})`;
}
//Creating omount
let count = 0;
function createBoxes(amount) {
  amount = numNewDiv.value;
  for (let i = 0; i != amount; i++) {
    const newDiv = document.createElement('div');
    count++;
    newDiv.style.height = `${30 + count * 10}px`;
    newDiv.style.width = `${30 + count * 10}px`;
    newDiv.style.backgroundColor = getRandom();
    mainDiv.appendChild(newDiv);
  }
  numNewDiv.value = null;
}
butRend.addEventListener('click', createBoxes);
const destroyBoxes = () => {
  count = 0;
  while (mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
};
const butDestr = document.querySelector('button[data-action="destroy"]');
butDestr.addEventListener('click', destroyBoxes);
