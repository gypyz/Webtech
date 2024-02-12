form = document.getElementById("myform");
button = document.getElementById("submit-button");
email = document.getElementById("email");
username = document.getElementById("username");
pass1 = document.getElementById("password1");
pass2 = document.getElementById("password2");
err = document.getElementById("errcheck");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the page from reloading on submit
  err.style.visibility = "hidden";
  checkPassword(pass1, pass2);
  checkUsername(8, 10);
});

function checkPassword(password1, password2) {
  if (!(pass1.value === pass2.value)) {
    err.style.visibility = "visible";
  } else {
    err.style.visibility = "hidden";
  }
}
const showErrMessage = (massage) => {
  err.innerTExt = massage;
};
const checkUsername = (min, max) => {
  if (username.value.length > max) {
    err.style.visibility = "visible";
    showErrMessage(`username can be ${max} character`);
  } else if (username.value.length < min) {
    err.style.visibility = "visible";
    showErrMessage(`username must be at least ${min} characters`);
  }
};
