
gsap.from("#logo", { duration: 1, y: -50, opacity: 0, ease: "bounce.out" });
gsap.from("#profileImg", { duration: 1.2, scale: 0, opacity: 0, delay: 0.5, ease: "back.out(1.7)" });
gsap.from("#mainTitle", { duration: 1, y: 40, opacity: 0, delay: 1 });
gsap.from("#tagline", { duration: 1, y: 30, opacity: 0, delay: 1.3 });
gsap.from("#ctaButtons", { duration: 1, y: 30, opacity: 0, delay: 1.6, stagger: 0.2 });

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Profile card GSAP animation
if (document.querySelector('#profileCard')) {
  gsap.from('#profileCard', {
    scrollTrigger: '#profile-card',
    duration: 1,
    y: 60,
    opacity: 0,
    ease: 'power3.out'
  });
}

// Contact form validation and message
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }
    formMessage.textContent = 'Thank you for contacting me! I will get back to you soon.';
    contactForm.reset();
  });
}

// Responsive nav menu toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  // Close menu when a nav link is clicked (mobile UX)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}
