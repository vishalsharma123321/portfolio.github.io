// Toggle icon for the navigation bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Function to toggle the navigation bar when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections= document.querySelectorAll('section' );
let navLinks= document.querySelectorAll('header nav a');

// Function to highlight the active section link in the navigation bar when scrolling
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky navigation bar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove the toggle icon and navigation bar when a navigation link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal for animating elements when they enter the viewport
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

// Applying scroll reveal to different elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, services-container, portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

// Typed.js for typing animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Coder', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
