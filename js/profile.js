const userPic = document.querySelector("#userPic");
const userEmail = document.querySelector(".userEmail");
const viewsNumber = document.querySelector(".viewsNumber");
const taskNumber = document.querySelector(".taskNumber");
const notificationNumber = document.querySelector(".notificationNumber");
const messageNumber = document.querySelector(".messageNumber");
const back_dashboard = document.querySelector(".back_dashboard");
const logout_btn = document.querySelector(".logout_btn");

const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

if (!currentUser) {
  window.location.href = "signin.html";
} else {
  if (userPic && currentUser.image) userPic.src = currentUser.image;
  if (userEmail) userEmail.textContent = currentUser.email;

  if (viewsNumber)
    viewsNumber.textContent = currentUser.randomView.toLocaleString();
  if (taskNumber)
    taskNumber.textContent = currentUser.randomTask.toLocaleString();
  if (messageNumber)
    messageNumber.textContent = currentUser.randomMsg.toLocaleString();
  if (notificationNumber)
    notificationNumber.textContent =
      currentUser.randomNotification.toLocaleString();
}

logout_btn?.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "signin.html";
});

back_dashboard?.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
