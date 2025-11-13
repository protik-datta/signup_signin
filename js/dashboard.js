const logoutBtn = document.querySelector(".logout-btn");
const viewsNumber = document.querySelector(".viewsNumber");
const taskNumber = document.querySelector(".taskNumber");
const messageNumber = document.querySelector(".messageNumber");
const notificationNumber = document.querySelector(".notificationNumber");

const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

if (!currentUser) {
  alert("You are not logged in!");
  window.location.href = "signin.html";
} else {
  if (viewsNumber) viewsNumber.textContent = currentUser.randomView;
  if (taskNumber) taskNumber.textContent = currentUser.randomTask;
  if (messageNumber) messageNumber.textContent = currentUser.randomMsg;
  if (notificationNumber)
    notificationNumber.textContent = currentUser.randomNotification;
}

logoutBtn?.addEventListener("click", () => {
  localStorage.removeItem("currentUser"); 
  window.location.href = "signin.html";
});
