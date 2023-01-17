const field = document.getElementById('name-input');
const output = document.getElementById('name-output');

field.addEventListener("input",(event) =>{
    output.textContent=event.currentTarget.value;
    if(!event.currentTarget.value){
        output.textContent="Annonymus";
    }
})
