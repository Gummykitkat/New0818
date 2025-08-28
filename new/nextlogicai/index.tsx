// app/page.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Next Logic AI and Design"
                width={500}
                height={500}
                className="logo-img"
              />
            </Link>
          </div>
          <nav className="nav-menu">
            <button className="hamburger" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="nav-links">
              <li><Link href="/" className="active">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section - Updated for Centered Layout */}
      <section className="hero hero-centered">
        <div className="container">
          <div className="hero-content-centered">
            <h1 className="hero-title-small">
              Next Level Web Design Services and AI Solutions for<br/>
              Every Industry
            </h1>
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="service-grid">
            <div className="service-card">
              <i className="fas fa-robot"></i>
              <h3>AI Consulting</h3>
              <p>Harness AI for smarter operations and data-driven growth.</p>
              <p className="service-pricing">
                Pricing based on annual corporate revenue, referral incentives,
                and other factors.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-desktop"></i>
              <h3>Web & App Design</h3>
              <p>Build intuitive, beautiful digital experiences.</p>
              <p className="service-pricing">
                Pricing based on annual corporate revenue, referral incentives,
                and other factors.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-palette"></i>
              <h3>Branding</h3>
              <p>Create a memorable identity that connects.</p>
              <p className="service-pricing">
                Pricing based on annual corporate revenue, referral incentives,
                and other factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-item">
            <h3>Next Logic AI and Design</h3>
            <p>Empowering businesses with innovation since 2024</p>
          </div>
          <div className="footer-item">
            <h3>Contact</h3>
            <p>
              Email:{' '}
              <a href="mailto:sarah@nextlogic-ai.com">
                sarah@nextlogic-ai.com
              </a>
            </p>
            <p>Phone: +1 (403) 376 6639</p>
          </div>
          <div className="footer-item">
            <h3>Stay Updated</h3>
            <form className="newsletter-form" id="newsletter-form">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input type="email" id="email" placeholder="Your email" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © <span id="year">2025</span> Next Logic AI and Design. All rights
            reserved.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}