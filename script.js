const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll('.nav-link');

// Function to toggle the mobile menu state
const toggleMobileMenu = () => {
   
    document.body.classList.toggle("show-mobile-menu");
};


if (menuOpenButton) {
    menuOpenButton.addEventListener("click", toggleMobileMenu);
}


if (menuCloseButton) {
    menuCloseButton.addEventListener("click", toggleMobileMenu);
}

// 3. Close Menu when a nav link is clicked (for better UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        if (document.body.classList.contains("show-mobile-menu")) {
            toggleMobileMenu();
        }
    });
});