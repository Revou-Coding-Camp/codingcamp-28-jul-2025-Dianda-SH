document.addEventListener("DOMContentLoaded", function () {
  // ==================== Inisialisasi Element ====================
  const messageForm = document.getElementById("message-form");
  const currentTimeSpan = document.getElementById("current-time");
  const outputName = document.getElementById("output-name");
  const outputBirthDate = document.getElementById("output-birth-date");
  const outputGender = document.getElementById("output-gender");
  const outputMessage = document.getElementById("output-message");
  const welcomeTitle = document.getElementById("welcome-title");

  // ==================== Custom Alert ====================
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");
  const alertOk = document.getElementById("alert-ok");

  function showAlert(message) {
    alertMessage.textContent = message;
    alertBox.style.display = "flex";
  }

  alertOk.addEventListener("click", function () {
    alertBox.style.display = "none";
  });

  // ==================== Waktu Saat Ini (Live) ====================
  function updateCurrentTime() {
    const now = new Date();
    const datePart = now.toDateString();
    const timePart = now.toTimeString().split(" ")[0];
    const offset = "GMT" + (now.getTimezoneOffset() / -60).toString().padStart(2, "0") + "00";
    currentTimeSpan.textContent = `${datePart} ${timePart} ${offset}`;
  }

  updateCurrentTime();
  setInterval(updateCurrentTime, 1000); // Update setiap 1 detik

  // ==================== Set Default Tanggal Hari Ini ====================
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  document.getElementById("birth-date").value = `${year}-${month}-${day}`;

  // ==================== Prompt Nama Saat Load ====================
  let userName = "";
  while (!userName || userName.trim() === "") {
    userName = prompt("Please enter your name:");
    if (userName === null) {
      alert("You must enter a name to proceed.");
    }
  }

  welcomeTitle.textContent = `Hi ${userName}, Welcome To Website`;

  // ==================== Proses Submit Form ====================
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const birthDate = document.getElementById("birth-date").value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    // Validasi input
    if (!name || !birthDate || !genderInput || !message) {
      showAlert("Please fill in all fields.");
      return;
    }

    const gender = genderInput.value;

    // Tampilkan hasil ke output box
    outputName.textContent = name;
    outputBirthDate.textContent = birthDate;
    outputGender.textContent = gender;
    outputMessage.textContent = message;

    console.log("Form Submitted:", { name, birthDate, gender, message });
  });

  // ==================== Reset Output Saat Halaman Dimuat ====================
  outputName.textContent = "";
  outputBirthDate.textContent = "";
  outputGender.textContent = "";
  outputMessage.textContent = "";
});
