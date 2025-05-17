// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Dynamic Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter Form Submission (Placeholder)
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('#email').value;

        // Replace with real API (e.g., Mailchimp)
        try {
            const response = await fetch('https://your-api-endpoint.com/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert('Subscribed successfully!');
                newsletterForm.reset();
            } else {
                alert('Subscription failed. Try again.');
            }
        } catch (error) {
            alert('Error occurred. Please retry.');
        }
    });
}

// Contact Form Submission (Placeholder)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            name: contactForm.querySelector('#name').value,
            email: contactForm.querySelector('#email').value,
            message: contactForm.querySelector('#message').value
        };

        // Replace with real API (e.g., Formspree, EmailJS)
        try {
            const response = await fetch('https://your-api-endpoint.com/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Message failed to send. Try again.');
            }
        } catch (error) {
            alert('Error occurred. Please retry.');
        }
    });
}



fadeElements.forEach(el => observer.observe(el));
// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Fade-in on Scroll
const fadeElements = document.querySelectorAll('.service-card, .footer-item, .portfolio-card, .about-content, .contact-content');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Dynamic Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter Form Submission (Placeholder)
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('#email').value;

        // Replace with real API (e.g., Mailchimp)
        try {
            const response = await fetch('https://your-api-endpoint.com/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert('Subscribed successfully!');
                newsletterForm.reset();
            } else {
                alert('Subscription failed. Try again.');
            }
        } catch (error) {
            alert('Error occurred. Please retry.');
        }
    });
}

