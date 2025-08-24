const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Middleware
app.use(cors({ origin: 'https://www.nextlogic-ai.com' })); // Restrict to your domain in production
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname))); // Serve static files (HTML, CSS, JS)

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        return;
    }
    console.log('Connected to SQLite database');
    
    // Create subscriptions table
    db.run(`CREATE TABLE IF NOT EXISTS subscriptions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    // Create contacts table
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    // Input validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    db.run('INSERT INTO subscriptions (email) VALUES (?)', [email], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint')) {
                return res.status(400).json({ error: 'Email already subscribed' });
            }
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('Newsletter Subscription:', email);
        res.status(200).json({ message: 'Subscribed successfully' });
    });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', 
        [name, email, message], 
        function(err) {
            if (err) {
                console.error('Database error:', err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            console.log('Contact Form Submission:', { name, email, message });
            res.status(200).json({ message: 'Message sent successfully' });
        }
    );
});

// Serve the contact page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});