import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">
            Next-Level Web Design Services and AI Solutions for <br />
            <span className="text-indigo-600">Every Industry</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
            We implement cutting-edge artificial intelligence services that
            transform how businesses operate, compete, and grow across healthcare,
            finance, retail, manufacturing, and many other industries.
          </p>
          <Link href="/services" className="btn-primary">
            Explore Industries
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-3xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
              <p>Harness AI for smarter operations and data-driven growth.</p>
              <p className="text-sm text-gray-500 mt-2">
                Pricing based on annual corporate revenue, referral incentives, and other factors.
              </p>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Web & App Design</h3>
              <p>Build intuitive, beautiful digital experiences.</p>
              <p className="text-sm text-gray-500 mt-2">
                Pricing based on annual corporate revenue, referral incentives, and other factors.
              </p>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Branding</h3>
              <p>Create a memorable identity that connects.</p>
              <p className="text-sm text-gray-500 mt-2">
                Pricing based on annual corporate revenue, referral incentives, and other factors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
