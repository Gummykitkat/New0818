// api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    // Log the email (you can replace this with database storage or email service integration)
    console.log('New subscription:', email);

    // Respond with success
    return res.status(200).json({ message: 'Thank you for subscribing!' });
}