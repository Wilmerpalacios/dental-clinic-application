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
const addPatientBtn = document.getElementById("addPatientBtn")
const patientModal = document.getElementById("patientModal")
const closeModal = document.getElementById("closeModal")
const cancelBtn = document.getElementById("cancelBtn")
const patientForm = document.getElementById("patientForm")

if (addPatientBtn) {
  addPatientBtn.addEventListener("click", () => {
    patientModal.classList.add("active")
  })
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    patientModal.classList.remove("active")
  })
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    patientModal.classList.remove("active")
  })
}

if (patientForm) {
  patientForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Paciente registrado exitosamente")
    patientModal.classList.remove("active")
    patientForm.reset()
  })
}

// Search functionality
const searchInput = document.getElementById("searchInput")
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const rows = document.querySelectorAll("#patientsTableBody tr")

    rows.forEach((row) => {
      const text = row.textContent.toLowerCase()
      row.style.display = text.includes(searchTerm) ? "" : "none"
    })
  })
}
