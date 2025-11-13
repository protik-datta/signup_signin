const emailInput = document.querySelector(".emailInput_signup");
const passwordInput = document.querySelector(".passwordInput_signup");
const signupBtn = document.querySelector(".signup_btn");
const sigUpeyeBtn = document.querySelector(".sigUpeyeBtn");

const viewsNumber = document.querySelector(".viewsNumber");
const taskNumber = document.querySelector(".taskNumber");
const messageNumber = document.querySelector(".messageNumber");
const notificationNumber = document.querySelector(".notificationNumber");

export let userData;
try {
  userData = JSON.parse(localStorage.getItem("data"));
  if (!Array.isArray(userData)) userData = [];
} catch (e) {
  userData = [];
}

function signUpData() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Input fields cannot be empty");
    return;
  }

  if (!email.includes("@")) {
    alert(`"@" needed in email`);
    passwordInput.value = "";
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  const alreadyExist = userData.some((user) => user.email === email);
  if (alreadyExist) {
    alert("User already exists! Try logging in.");
    return;
  }

  const randomView = Math.floor(Math.random() * 10000000);
  viewsNumber.textContent = randomView.toLocaleString();

  const randomTask = Math.floor(Math.random() * 200);
  taskNumber.textContent = randomTask;

  const randomMsg = Math.floor(Math.random() * 100);
  messageNumber.textContent = randomMsg;

  const randomNotification = Math.floor(Math.random() * 150);
  notificationNumber.textContent = randomNotification;

  userData.push({
    email,
    password,
    randomView,
    randomTask,
    randomMsg,
    randomNotification,
  });
  localStorage.setItem("data", JSON.stringify(userData));
  alert("SignUp Successful!");

  window.location.href = "signin.html";

  emailInput.value = "";
  passwordInput.value = "";
}

signupBtn.addEventListener("click", signUpData);

sigUpeyeBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  sigUpeyeBtn.classList.toggle("fa-eye");
  sigUpeyeBtn.classList.toggle("fa-eye-slash");
});
