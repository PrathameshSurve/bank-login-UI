const form = document.getElementById("loginForm");
const errorBanner = document.getElementById("errorBanner");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const VALID_USER = "demoUser";
const VALID_PASS = "Demo@123";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  errorBanner.classList.add("hidden");

  const username = document.getElementById("username").value.trim();
  const password = passwordInput.value.trim();

  if (username === VALID_USER && password === VALID_PASS) {
    alert("Login successful");
  } else {
    errorBanner.classList.remove("hidden");
  }
});

togglePassword.addEventListener("click", function () {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
});
