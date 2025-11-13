const logoutBtn = document.querySelector(".logout-btn");
const profileBtn = document.querySelector(".profile-btn");
const viewsNumber = document.querySelector(".viewsNumber");
const taskNumber = document.querySelector(".taskNumber");
const messageNumber = document.querySelector(".messageNumber");
const notificationNumber = document.querySelector(".notificationNumber");
const userPic = document.querySelector("#userPic");

const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

if (!currentUser) {
  window.location.href = "signin.html";
} else {
  if (userPic && currentUser.image) userPic.src = currentUser.image;

  viewsNumber.textContent = currentUser.randomView.toLocaleString();
  taskNumber.textContent = currentUser.randomTask.toLocaleString();
  messageNumber.textContent = currentUser.randomMsg.toLocaleString();
  notificationNumber.textContent =
    currentUser.randomNotification.toLocaleString();
}

logoutBtn?.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "signin.html";
});

profileBtn?.addEventListener("click",()=>{
  window.location.href = "profile.html";
})