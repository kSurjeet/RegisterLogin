import {
    dbRef,
    auth
} from "./databaseAuth.js";

let chckEml = document.getElementById('checkEmail'); 

function emailCheck(e){
    e.preventDefault();
    const loginEmail = document.getElementById('userEmail');
    const email = loginEmail.value;

    if(email == '') {
        chckEml.textContent = 'Please enter your resgistered email.';        
        loginEmail.style.borderColor = 'red';
        chckEml.style.visibility = 'visible';
    } else{
        loginEmail.style.borderColor = '#c8c8c8';
        forgetPswdEmail(e,email);
    }
}
function forgetPswdEmail(e,email){
    e.preventDefault();
    chckEml.style.visibility = 'visible'; 
    auth.sendPasswordResetEmail(email)
    .then(() => {            
      chckEml.textContent = 'Please check your email.';
      document.getElementById('userEmail').value = '';      
      console.log('Email sent');
    })
    .catch((error) => {        
        if(error.message.includes('user-not-found')){
            chckEml.textContent = 'Email is not registered.';
        }else{
            chckEml.textContent = 'Error Occured';
        }

    });
}
frgtPassword.addEventListener('click',e => emailCheck(e));