"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const services = [
    { name: "Development", link: "/services/development" },
    { name: "Digital Marketing", link: "/services/marketing" },
    { name: "AI & Automation", link: "/services/automation" },
    { name: "PR & Branding", link: "/services/pr" },
    { name: "E-commerce", link: "/services/ecommerce" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="h-[75px] flex items-center justify-between">

          {/* ================= LOGO + BRAND ================= */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo6.png"
              alt="NuveraTech"
              width={50}
              height={50}
              className="h-[50px] w-auto object-contain"
              priority
            />

            {/* Desktop Brand Name */}
            <span className="hidden md:block text-xl font-bold text-blue-900">
              NuveraTech
            </span>
          </Link>

          {/* ================= MOBILE CENTER TITLE ================= */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <span className="text-lg font-semibold text-blue-900">
              NuveraTech
            </span>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                Services
                <ChevronDown
                  size={16}
                  className={`transition ${open ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full mt-4 w-60 bg-white shadow-2xl rounded-xl py-3 border border-gray-100"
                  >
                    {services.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.link}
                          className="block px-6 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition rounded-lg"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className="hover:text-blue-600 transition">
              Industries
            </Link>

            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Get Quote
          </Link>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pb-6"
            >
              <div className="flex flex-col gap-4 pt-4 text-gray-700 font-medium">

                <button
                  onClick={() =>
                    setMobileServiceOpen(!mobileServiceOpen)
                  }
                  className="flex justify-between items-center"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      mobileServiceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServiceOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pl-4 flex flex-col gap-3 text-sm"
                    >
                      {services.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-blue-600 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/industries"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Industries
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-blue-600 text-white py-2 rounded-full text-center mt-2"
                >
                  Get Quote
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
