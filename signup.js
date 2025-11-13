const emailInput = document.querySelector(".emailInput_signup");
const passwordInput = document.querySelector(".passwordInput_signup");
const signupBtn = document.querySelector(".signup_btn");
const sigUpeyeBtn = document.querySelector(".sigUpeyeBtn");

let userData;
try {
  userData = JSON.parse(localStorage.getItem("data"));
  if (!Array.isArray(userData)) userData = [];
} catch {
  userData = [];
}

// ========== SIGN UP FUNCTION ==========
function signUpData() {
  const email = emailInput.value.trim().toLowerCase(); 
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

  // ========== Random Dashboard Stats ==========
  const randomView = Math.floor(Math.random() * 10000000).toLocaleString();
  const randomTask = Math.floor(Math.random() * 200).toLocaleString();
  const randomMsg = Math.floor(Math.random() * 100).toLocaleString();
  const randomNotification = Math.floor(Math.random() * 150).toLocaleString();

  const newUser = {
    email,
    password,
    randomView,
    randomTask,
    randomMsg,
    randomNotification,
  };

  userData.push(newUser);
  localStorage.setItem("data", JSON.stringify(userData));

  localStorage.setItem("currentUser", JSON.stringify(newUser));

  alert("SignUp Successful!");
  window.location.href = "signin.html";

  emailInput.value = "";
  passwordInput.value = "";
}

// ========== Event Listeners ==========
signupBtn?.addEventListener("click", signUpData);

sigUpeyeBtn?.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  sigUpeyeBtn.classList.toggle("fa-eye");
  sigUpeyeBtn.classList.toggle("fa-eye-slash");
});
