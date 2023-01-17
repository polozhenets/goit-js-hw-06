
const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit',event=>{
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if(!email.value || !password.value){
        alert("Please fill in all the fields!")
    }else{
        console.log(`e-mail:${email.value} --- password:${password.value}`);
        event.currentTarget.reset();
    }
    
    
})