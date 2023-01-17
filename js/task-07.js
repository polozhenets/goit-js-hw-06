const ranger = document.getElementById('font-size-control');
const text = document.getElementById('text');
ranger.addEventListener('input',event =>{
    text.style.fontSize=`${event.currentTarget.value}px`;
})