const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    console.log('Newsletter Subscription:', email);
    // Add logic to save email (e.g., to a database)
    res.status(200).json({ message: 'Subscribed successfully' });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    // Add logic to handle contact form (e.g., send an email)
    res.status(200).json({ message: 'Message sent successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));