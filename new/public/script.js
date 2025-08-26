// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // === Mobile menu toggle ===
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // === Contact form handler ===
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name')?.value || "";
            const email = document.getElementById('email')?.value || "";
            const message = document.getElementById('message')?.value || "";
            const contactMessage = document.getElementById('contact-message');

            console.log('Form data:', { name, email, message }); // Debug log

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                });
                const result = await response.json();

                if (contactMessage) {
                    contactMessage.textContent = result.message || result.error;
                    contactMessage.style.color = response.ok ? 'green' : 'red';
                }

                if (response.ok) contactForm.reset();
            } catch (error) {
                if (contactMessage) {
                    contactMessage.textContent = 'Error sending message';
                    contactMessage.style.color = 'red';
                }
