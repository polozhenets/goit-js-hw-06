const input = document.getElementById('validation-input');
input.addEventListener("input",(event)=>{
    if(event.currentTarget.value.length<=input.getAttribute('data-length')){
        if(input.classList.contains('invalid')){
            input.classList.replace('invalid','valid');
        }
        input.classList.add('valid');
    }else{
        input.classList.replace('valid','invalid');
    }
})