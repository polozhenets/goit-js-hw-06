const number= document.getElementById('value');
const decrementButton=document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let counter = 0;
decrementButton.addEventListener("click",() =>{
    counter--;
    number.textContent=counter;
});

incrementButton.addEventListener("click",() =>{
    counter++;
    number.textContent=counter;
});