"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="https://nextlogicai.com/images/logo.png"
            alt="NextLogic AI Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        <nav>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>

          {/* Menu */}
          <ul
            className={`md:flex md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all overflow-hidden duration-300 ${
              menuOpen ? "max-h-96 p-4" : "max-h-0"
            }`}
          >
            <li>
              <Link href="/" className="block py-2 md:py-0 text-gray-800 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 md:py-0 text-gray-800 hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 md:py-0 text-gray-800 hover:text-indigo-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="block py-2 md:py-0 text-gray-800 hover:text-indigo-600">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 md:py-0 text-gray-800 hover:text-indigo-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
