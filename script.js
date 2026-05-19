// Select navbar
const navbar = document.getElementById("navbar");

// Add scroll event
window.addEventListener("scroll", () => {

    // If page scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } 
    
    // Remove class when at top
    else {
        navbar.classList.remove("scrolled");
    }
});