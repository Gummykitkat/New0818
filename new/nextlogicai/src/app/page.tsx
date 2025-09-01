"use client";

import Link from "next/link";
import { Cpu, Monitor, Palette } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="hero hero-centered py-20 text-center">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">
            Next Level Web Design and AI Solutions For Every Industry
          </h1>
          <Link href="/services" className="btn-primary px-6 py-3 bg-indigo-600 text-white rounded-lg">
            Explore Services
          </Link>
        </div>
      </section>
      <section className="services py-16">
        <div className="container">
          <h2 className="section-title text-2xl font-bold mb-10">What We Do</h2>
          <div className="service-grid grid md:grid-cols-3 gap-8">
            <div className="service-card p-6 bg-white rounded-xl shadow-md">
              <Cpu className="w-10 h-10 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
              <p>Harness AI for smarter operations and data-driven growth.</p>
              <p className="service-pricing text-sm mt-2 text-gray-600">
                Pricing based on annual corporate revenue, referral incentives, and other factors.
              </p>
            </div>
            <div className="service-card p-6 bg-white rounded-xl shadow-md">
              <Monitor className="w-10 h-10 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Web & App Design</h3>
              <p>Build intuitive, beautiful digital experiences.</p>
              <p className="service-pricing text-sm mt-2 text-gray-600">
                Pricing based on annual corporate revenue, referral incentives, and other factors.
              </p>
            </div>
            <div className="service-card p-6 bg-white rounded-xl shadow-md">
              <Palette className="w-10 h-10 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Branding</h3>
              <p>Create a memorable identity that connects.</p>
              <p className="service-pricing text-sm mt-2 text-gray-600">
                Pricing based on annual corporate revenue, referral incentives, and other factors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Redeploy marker at 11:56 MDT, Sep 01, 2025