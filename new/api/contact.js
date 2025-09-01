// api/contact.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'All fields are required and email must be valid' });
    }

    // Log the contact form submission
    console.log('Contact form submission:', { name, email, message });

    // Respond with success
    return res.status(200).json({ message: 'Message sent successfully!' });
}