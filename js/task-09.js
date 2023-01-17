function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

btn.addEventListener('click',event=>{
  event.currentTarget.value = getRandomHexColor();
  color.textContent = event.currentTarget.value;
  document.body.style.background=event.currentTarget.value;
})