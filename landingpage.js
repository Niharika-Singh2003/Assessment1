
// JavaScript for mobile hamburger menu
// landingpage.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the 'active' class
    });
});
// Contact form validation and animation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Form submitted successfully!");
        document.getElementById('contact-form').reset(); 
    } else {
        alert("Please fill in all fields.");
    }
});
