const randomPersons = [
  {
    person1:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person2:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person3:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person4:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person5:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person6:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person7:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    person8:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    person9:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    person10:
      "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    person11:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    person12:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const userPic = document.querySelector("#userPic");
const emailInput = document.querySelector(".emailInput_signin");
const passwordInput = document.querySelector(".passwordInput_signin");
const signinBtn = document.querySelector(".signin_btn");
const siginINeyeBtn = document.querySelector(".siginINeyeBtn");

let userData = JSON.parse(localStorage.getItem("data") || "[]");

// ========== SIGN IN FUNCTION ==========
function signInData() {
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Input fields cannot be empty");
    return;
  }

  const user = userData.find((u) => u.email === email);
  if (!user) {
    alert("Email not found!");
    emailInput.value = "";
    passwordInput.value = "";
    return;
  }

  if (user.password !== password) {
    alert("Incorrect password!");
    passwordInput.value = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * randomPersons.length);
  const randomPerson = Object.values(randomPersons[randomIndex])[0];
  if (userPic) userPic.src = randomPerson;

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("User logged in successfully!");
  window.location.href = "dashboard.html";
}

// ========== Event Listeners ==========
signinBtn?.addEventListener("click", signInData);

siginINeyeBtn?.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  siginINeyeBtn.classList.toggle("fa-eye");
  siginINeyeBtn.classList.toggle("fa-eye-slash");
});