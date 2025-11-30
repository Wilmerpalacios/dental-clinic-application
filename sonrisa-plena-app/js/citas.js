// Include dashboard common functionality
const menuBtn = document.getElementById("menuBtn")
const sidebar = document.getElementById("sidebar")
const sidebarToggle = document.getElementById("sidebarToggle")

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
  })
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.remove("active")
  })
}

const logoutBtn = document.getElementById("logoutBtn")
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    window.location.href = "login.html"
  })
}

// Modal functionality
const addAppointmentBtn = document.getElementById("addAppointmentBtn")
const appointmentModal = document.getElementById("appointmentModal")
const closeModal = document.getElementById("closeModal")
const cancelBtn = document.getElementById("cancelBtn")
const appointmentForm = document.getElementById("appointmentForm")

if (addAppointmentBtn) {
  addAppointmentBtn.addEventListener("click", () => {
    appointmentModal.classList.add("active")
  })
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    appointmentModal.classList.remove("active")
  })
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    appointmentModal.classList.remove("active")
  })
}

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Cita agendada exitosamente")
    appointmentModal.classList.remove("active")
    appointmentForm.reset()
  })
}
