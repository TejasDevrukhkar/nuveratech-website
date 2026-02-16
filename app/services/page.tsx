"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    "Website Development (Business, E-commerce, Portfolio)",
    "App Development (Android, iOS, Web Apps)",
    "Software, ERP & CRM Development",
    "SEO, Social Media Marketing, Google Ads",
    "Branding & Creative Design",
    "AI Chatbots & Automation",
    "IT Support, AMC & Cloud Hosting",
    "Marketplace Setup (Amazon, Flipkart, Meesho)",
    "PR & Online Reputation Management",
  ];

  return (
    <main className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-12 text-blue-600">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="font-semibold">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
