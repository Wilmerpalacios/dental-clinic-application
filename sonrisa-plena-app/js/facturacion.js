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
const newInvoiceBtn = document.getElementById("newInvoiceBtn")
const invoiceModal = document.getElementById("invoiceModal")
const closeModal = document.getElementById("closeModal")
const cancelBtn = document.getElementById("cancelBtn")
const invoiceForm = document.getElementById("invoiceForm")

if (newInvoiceBtn) {
  newInvoiceBtn.addEventListener("click", () => {
    invoiceModal.classList.add("active")
  })
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    invoiceModal.classList.remove("active")
  })
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    invoiceModal.classList.remove("active")
  })
}

if (invoiceForm) {
  invoiceForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Factura generada exitosamente")
    invoiceModal.classList.remove("active")
    invoiceForm.reset()
  })
}
