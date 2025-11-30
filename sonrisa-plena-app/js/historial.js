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
const addTreatmentBtn = document.getElementById("addTreatmentBtn")
const treatmentModal = document.getElementById("treatmentModal")
const closeModal = document.getElementById("closeModal")
const cancelBtn = document.getElementById("cancelBtn")
const treatmentForm = document.getElementById("treatmentForm")

if (addTreatmentBtn) {
  addTreatmentBtn.addEventListener("click", () => {
    treatmentModal.classList.add("active")
  })
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    treatmentModal.classList.remove("active")
  })
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    treatmentModal.classList.remove("active")
  })
}

if (treatmentForm) {
  treatmentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Tratamiento registrado exitosamente")
    treatmentModal.classList.remove("active")
    treatmentForm.reset()
  })
}
