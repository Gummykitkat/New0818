import "./styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextLogic",
  description: "AI-powered solutions",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="header">
          <div className="container">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Next Logic AI Logo"
                width={500}
                height={500}
                className="logo-img"
              />
            </Link>
            <nav>
              <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <button className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-item">
              <h3>Next Logic AI and Design</h3>
              <p>Empowering businesses with innovation since 2024.</p>
            </div>
            <div className="footer-item">
              <h3>Contact</h3>
              <p>Email: <a href="mailto:info@nextlogicai.com">info@nextlogicai.com</a></p>
              <p>Phone: +1 (403) 376 6639</p>
            </div>
            <div className="footer-item">
              <h3>Stay Updated</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" required />
                <button type="submit">Join</button>
              </form>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>© {new Date().getFullYear()} Next Logic AI and Design. All rights reserved.</p>
            <div className="social-links">
              <Link href="https://facebook.com"><i className="fab fa-facebook-f"></i></Link>
              <Link href="https://twitter.com"><i className="fab fa-twitter"></i></Link>
              <Link href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
