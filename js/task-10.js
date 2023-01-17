function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBox = document.getElementById('boxes');
const numb = document.getElementById('number');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click',()=>{
  let boxes = createBoxes(numb.value);
  mainBox.append(...boxes);
  }
)

btnDestroy.addEventListener('click',()=>{
  destroyBoxes();
})


function destroyBoxes(){
  mainBox.innerHTML = '';
}

function createBoxes(amount){
  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width=`${30+10*i}px`;
    box.style.height =`${30+10*i}px`;
    box.style.background = getRandomHexColor();
    boxes.push(box);
  }

  return boxes;
}

