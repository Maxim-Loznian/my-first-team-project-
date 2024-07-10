// Select elements
const burgerMenuButton = document.querySelector('.open-menu-btn');
const closeButton = document.querySelector('.modal-close-btn');
const mobileMenuBackdrop = document.querySelector('.backdrop-mobile');

// Function to open the mobile menu
function openMobileMenu() {
  mobileMenuBackdrop.classList.add('is-open');
  document.addEventListener('keydown', handleEscapeKey); // Add event listener for ESC key
}

// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenuBackdrop.classList.remove('is-open');
  document.removeEventListener('keydown', handleEscapeKey); // Remove event listener for ESC key
}

// Function to handle backdrop click
function handleBackdropClick(event) {
  if (event.target === mobileMenuBackdrop) {
    closeMobileMenu();
  }
}

// Function to handle ESC key press
function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
}

// Add event listeners
burgerMenuButton.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);
mobileMenuBackdrop.addEventListener('click', handleBackdropClick);
