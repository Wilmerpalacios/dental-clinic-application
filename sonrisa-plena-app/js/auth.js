// Login form handling
const loginForm = document.getElementById("loginForm")

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // Demo credentials check
    if (email === "admin@sonrisaplena.com" && password === "admin123") {
      // Store login state
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userEmail", email)

      // Redirect to dashboard
      window.location.href = "dashboard.html"
    } else {
      alert("Credenciales incorrectas. Por favor, usa las credenciales de prueba.")
    }
  })
}

// Check if user is logged in
function checkAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const currentPage = window.location.pathname

  if (
    !isLoggedIn &&
    (currentPage.includes("dashboard") ||
      currentPage.includes("pacientes") ||
      currentPage.includes("citas") ||
      currentPage.includes("historial") ||
      currentPage.includes("facturacion"))
  ) {
    window.location.href = "login.html"
  }
}

// Run auth check on page load
checkAuth()
