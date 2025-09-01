export default function Contact() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We’d love to hear from you! Reach out to NextLogic AI and Design for any inquiries
        or collaboration opportunities.
      </p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-2"><strong>Email:</strong> <a href="mailto:info@nextlogicai.com">info@nextlogicai.com</a></p>
        <p className="text-lg mb-2"><strong>Phone:</strong> +1 (403) 376 6639</p>
        <p className="text-lg">Follow us on social media for updates!</p>
      </div>
    </div>
  );
}