const initApp = () => {
  const humburgerBtn = document.getElementById("humberger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  humburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);