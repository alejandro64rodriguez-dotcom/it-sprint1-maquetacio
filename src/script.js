const signinToggle = document.getElementById('signin-toggle');
const signinDropdown = document.getElementById('signin-dropdown');

signinToggle.addEventListener('click', () => {
  const isHidden = signinDropdown.hidden;
  signinDropdown.hidden = !isHidden;
  signinToggle.setAttribute('aria-expanded', String(isHidden));
});

// Cerrar el desplegable si se hace clic fuera de él
document.addEventListener('click', (event) => {
  const isClickInside = signinToggle.contains(event.target) || signinDropdown.contains(event.target);
  if (!isClickInside && !signinDropdown.hidden) {
    signinDropdown.hidden = true;
    signinToggle.setAttribute('aria-expanded', 'false');
  }
});