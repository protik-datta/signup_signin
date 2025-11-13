const logoutBtn = document.querySelector(".logout-btn");
const viewsNumber = document.querySelector(".viewsNumber");
const taskNumber = document.querySelector(".taskNumber");
const messageNumber = document.querySelector(".messageNumber");
const notificationNumber = document.querySelector(".notificationNumber");

import { userData } from "./signup.js";

if (viewsNumber) viewsNumber.textContent = userData.randomView;
if (taskNumber) taskNumber.textContent = userData.randomTask;
if (messageNumber) messageNumber.textContent = userData.randomMsg;
if (notificationNumber) notificationNumber.textContent = userData.randomNotification;

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}