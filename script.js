// Contact form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactMessage = document.getElementById('contact-message');

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });
        const result = await response.json();
        contactMessage.textContent = result.message || result.error;
        contactMessage.style.color = response.ok ? 'green' : 'red';
        if (response.ok) {
            document.getElementById('contact-form').reset();
        }
    } catch (error) {
        contactMessage.textContent = 'Error sending message';
        contactMessage.style.color = 'red';
        console.error('Fetch error:', error);
    }
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    const newsletterMessage = document.getElementById('newsletter-message');

    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        const result = await response.json();
        newsletterMessage.textContent = result.message || result.error;
        newsletterMessage.style.color = response.ok ? 'green' : 'red';
        if (response.ok) {
            document.getElementById('newsletter-form').reset();
        }
    } catch (error) {
        newsletterMessage.textContent = 'Error subscribing';
        newsletterMessage.style.color = 'red';
        console.error('Fetch error:', error);
    }
});