let size=20;
let i=0;



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBox = document.getElementById('boxes');
const numb = document.getElementById('number');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click',()=>{
  createBoxes(numb.value);
  }
)

btnDestroy.addEventListener('click',()=>{
  destroyBoxes();
})


function destroyBoxes(){
  i=0;
  size=20;
  while(mainBox.firstChild){
    mainBox.removeChild(mainBox.lastChild);
  }
}


function createBoxes(amount){
  
  while(i<amount){
    let box = document.createElement(`div`);
    box.setAttribute('class',`box${i}`);
    size+=10;
    box.style.width=`${size}px`;
    box.style.height=`${size}px`;
    box.style.background=getRandomHexColor();
    mainBox.appendChild(box);
    i++;
  }
  
}