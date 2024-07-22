import {
  dbRef,
  auth
} from "./databaseAuth.js";

function getFormInput(id) {
  return document.getElementById(id).value;
}

signInBtn.addEventListener('click', e => {
  e.preventDefault();

  const password = getFormInput('userPassword');
  const emailA = getFormInput('userEmail');

  let name = '';
  let birthday = '';

  auth.signInWithEmailAndPassword(emailA, password).then(cred => {
      // if log-in is successful
      invalidSignError.style.visibility = 'hidden';
      console.log('Login Successful for', cred.user.email);
      document.getElementById('loginForm').reset();
      const query = dbRef.orderByChild('email').equalTo(emailA);
      query.once('value', (snapshot) => {
        const data = snapshot.val();
        
        for (let key in data) {
          name = data[key].name;
          birthday = data[key].birthdate;
          localStorage.setItem("name", name);
          localStorage.setItem("birthday", birthday);
          window.location.replace(`birthday.html`);
        }
        window.location.href = 'birthday.html';
      })

    })
    .catch((error) => {
      let errorMessage = getFormInput('invalidSignError');
      invalidSignError.textContent = 'Invalid Email or Password';
      invalidSignError.style.visibility = 'visible';
    })

})