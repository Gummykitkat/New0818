const express = require('express');
const app = express();

// Serve static files (CSS, JS, images) from current directory
app.use(express.static(__dirname));

// Test route
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
    <style>
        body { background: green; color: white; font-size: 24px; padding: 50px; }
    </style>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Server Test</h1>
    <p>If you see this green background, the server works!</p>
    <p>If the text below is styled with your CSS, then styles.css is loading:</p>
    <div class="hero">
        <h1>This should be styled by your CSS</h1>
    </div>
</body>
</html>
    `);
});

app.listen(3000, () => {
    console.log('Test server running on http://localhost:3000');
});