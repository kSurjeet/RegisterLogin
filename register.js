import {
    dbRef,
    auth
} from "./databaseAuth.js";

let errorMessage = document.getElementById('emailExists');
console.log(dbRef);

function formValidation(e) {
    e.preventDefault();
    let name = getFormInput('usrRegName');
    let birthday = getFormInput('userDate');
    let email = getFormInput('usrRegEmail');
    let password = getFormInput('pswdReg');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let birthdateError = document.getElementById('birthdateError');
    let nameError = document.getElementById('nameError');
    let isValid = true;


    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const bithDatePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (password.length < 8) {
        passwordError.style.visibility = 'visible';
        passwordError.textContent = "Password must be at least 8 characters long";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!email.match(emailPattern)) {
        emailError.style.visibility = 'visible';
        emailError.textContent = "Invalid Email Format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (name.length < 1) {
        nameError.style.visibility = 'visible';
        nameError.textContent = "Name should not be empty.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!birthday.match(bithDatePattern)) {
        birthdateError.style.visibility = 'visible';
        birthdateError.textContent = "Birthday date is necessary to register";
        isValid = false;
    } else {
        birthdateError.textContent = "";
    }
    if (isValid) {
        let obj = {
            name: name,
            email: email,
            birthdate: birthday,
            password: password,
        }
        // console.log(obj); 
        submitForm(obj);
    }

}

function getFormInput(id) {
    return document.getElementById(id).value;
}

function postToFirebase(obj, userN) {
    try {
        const ref = dbRef.push();
        ref.set({
            name: obj.name,
            birthdate: obj.birthdate,
            password: obj.password,
            email: obj.email,
        });
        document.getElementById("registerForm").reset();
        errorMessage.style.visibility = 'hidden';
        document.getElementById('success').innerHTML = `You have been Registered ${obj.name.toUpperCase()}! <a href="./signIn.html">Sign In</a>`

    } catch (err) {
        userN.delete().then(() => {
            console.log("User deleted successfully.");
        }).catch((error) => {
            console.error("Error deleting user:", error);
        });
        console.log('Database error', err.message);
        return `Database Error', ${err.message}`;
    }
}



function createUser(obj) {
    auth.createUserWithEmailAndPassword(obj.email, obj.password).then(cred => {
        const userUid = cred.user.uid;
        const userN = cred.user;

        postToFirebase(obj, userN);
    }).catch((error) => {

        if (error.message.includes('auth/email-already-in-use')) {
            errorMessage.textContent = 'Email already Exists';
            errorMessage.style.visibility = 'visible';
        } else {
            errorMessage.textContent = 'Unexpected Error! Please try again later';
            errorMessage.style.visibility = 'visible';
        }
    })
}

function submitForm(obj) {
    try {
        const errorAuth = createUser(obj);
    } catch (err) {
        console.log('error: ', err.message)
    }
}

document.getElementById('regInBtn').addEventListener('click', formValidation);