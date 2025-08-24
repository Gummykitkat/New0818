const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware - MUST be first
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // This serves your CSS and JS files

// Basic API routes (without database for now)
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    console.log('Newsletter Subscription:', email);
    res.status(200).json({ message: 'Thank you for subscribing!' });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form:', { name, email, message });
    res.status(200).json({ message: 'Thank you for your message!' });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});