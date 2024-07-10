const burgerMenuButton = document.querySelector('.open-menu-btn');
const closeButton = document.querySelector('.modal-close-btn');
const mobileMenuBackdrop = document.querySelector('.backdrop-mobile');

// Function to open the mobile menu
function openMobileMenu() {
  mobileMenuBackdrop.classList.add('is-open');
}

// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenuBackdrop.classList.remove('is-open');
}

// Add event listeners
burgerMenuButton.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);