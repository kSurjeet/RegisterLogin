import {
  dbRef,
  auth
} from "./databaseAuth.js";

var colors = ['#F2B300', '#D14D39', '#8FAD00', '#8377E4', '#99C96A', '#20CFB4'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('birthdayMessage').style.color = random_color;

window.onload = function () {
  let name = localStorage.getItem("name");
  let birthday = localStorage.getItem("birthday");

  let days_left = calculateDaysToBirthday(birthday);
  let userBirth = document.getElementById('userBirthday');

  document.getElementById('userName').textContent = `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}`;
  document.getElementById('signOutName').textContent = `Welcome ${name.charAt(0).toUpperCase() + name.slice(1)}`;

  if (days_left == 0) {
    userBirth.textContent = 'YAY!!!!! Its your birthday';
    getPosts();
  } else {
    userBirth.textContent = `${Math.abs(days_left)} days left for your birthday`
  }
}

function calculateDaysToBirthday(birthday) {

  const today = new Date();
  const parts = birthday.split('-');
  const birthdayDate = new Date(parts[0], parts[1] - 1, parts[2]); // Month is 0-indexed  

  const nextBirthday = new Date(
    today.getFullYear(),
    birthdayDate.getMonth(),
    birthdayDate.getDate());

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1)
  }
  const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

  if (today.getMonth() === birthdayDate.getMonth() &&
    today.getDate() === birthdayDate.getDate()) {
    return 0;
  } else {
    return daysUntilBirthday;
  }
}

const endpoint = "https://type.fit/api/quotes";
const request = fetch(endpoint);

async function getPosts() {
  const response = await fetch(endpoint);
  if (response.ok) {
    const posts = await response.json();
    const postLeng = posts.length;
    var randomNumber = Math.floor(Math.random() * postLeng) + 1;
    document.getElementById('birthdayMessage').textContent = posts[randomNumber].text;
  } else {
    document.getElementById('birthdayMessage').textContent = 'Fate is in your hands and no body elses.';
  }
}

document.getElementById('signOut').addEventListener('click', function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    window.location.replace(`signIn.html`);
  }).catch(function (error) {
    // An error happened.
  });
});