const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Use localhost for testing
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        return;
    }
    console.log('Connected to SQLite database');

    // Create contacts table
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) {
            console.error('Error creating contacts table:', err.message);
        } else {
            console.log('Contacts table created or already exists');
        }
    });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received contact form data:', { name, email, message }); // Debug log
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
                console.error('Database error on insert:', err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            console.log('Contact Form Submission saved:', { name, email, message });
            res.status(200).json({ message: 'Message sent successfully' });
        }
    );
});

// Serve the contact page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Debug endpoint to view contacts
app.get('/api/contacts', (req, res) => {
    db.all('SELECT * FROM contacts', [], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(rows);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));