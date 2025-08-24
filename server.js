const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

// Create users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password_hash TEXT,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
)`);

// Registration
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.run('INSERT INTO users (email, password_hash) VALUES (?, ?)', 
        [email, hashedPassword], function(err) {
        if (err) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(201).json({ message: 'User created successfully' });
    });
});

// Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
        if (!user || !await bcrypt.compare(password, user.password_hash)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ userId: user.id }, 'your-secret-key');
        res.json({ token, user: { id: user.id, email: user.email } });
    });
});