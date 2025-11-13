const forgetEmail = document.querySelector(".forgetEmail");
const forgetBtn = document.querySelector(".forgetBtn");
const forgetMessage = document.querySelector(".forgetMessage");

let userData = JSON.parse(localStorage.getItem("data") || "[]");

function forgetPassword() {
  if (!forgetEmail || !forgetMessage) {
    alert("Required elements not found in the DOM.");
    return;
  }

  const email = forgetEmail.value.trim();

  if (!email) {
    alert("Please enter your email");
    return;
  }

  const user = userData.find((u) => u.email === email);

  if (!user) {
    forgetMessage.classList.remove("hidden");
    forgetMessage.textContent = "Email not found!";
    forgetMessage.style.color = "red";

    setTimeout(() => {
      forgetMessage.classList.add("hidden");
    }, 2000);

    forgetEmail.value = "";
    return;
  }

  forgetMessage.classList.remove("hidden");
  forgetMessage.textContent = `Your password is: ${user.password}`;
  forgetMessage.style.color = "green";

  setTimeout(() => {
    forgetMessage.classList.add("hidden");
  }, 6000);

  forgetEmail.value = "";
}

if (forgetBtn) forgetBtn.addEventListener("click", forgetPassword);
