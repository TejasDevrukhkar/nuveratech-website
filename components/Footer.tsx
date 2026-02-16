"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            NuveraTech
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Engineering digital growth through scalable IT infrastructure,
            intelligent automation systems, and performance-driven marketing strategies.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.linkedin.com/company/nuveratech/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <Linkedin size={18} />
            </a>

          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/services/development" className="hover:text-white transition">
                Development
              </Link>
            </li>

            <li>
              <Link href="/services/marketing" className="hover:text-white transition">
                Digital Marketing
              </Link>
            </li>

            <li>
              <Link href="/services/automation" className="hover:text-white transition">
                AI & Automation
              </Link>
            </li>

            <li>
              <Link href="/services/pr" className="hover:text-white transition">
                PR & Branding
              </Link>
            </li>

            <li>
              <Link href="/services/ecommerce" className="hover:text-white transition">
                E-commerce Solutions
              </Link>
            </li>

          </ul>
        </div>

        {/* ================= COMPANY ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/industries" className="hover:text-white transition">
                Industries
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="text-sm mb-2">
            Mumbai, Maharashtra, India
          </p>

          <p className="text-sm mb-2">
            <a href="tel:+919545375167" className="hover:text-white transition">
              +91 9545375167
            </a>
          </p>

          <p className="text-sm">
            <a
              href="mailto:contact@nuveratech.com"
              className="hover:text-white transition"
            >
              contact@nuveratech.com
            </a>
          </p>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="text-center mt-16 border-t border-gray-700 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} NuveraTech. All rights reserved.
      </div>
    </footer>
  );
}
