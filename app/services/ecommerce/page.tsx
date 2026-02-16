"use client";

import { motion } from "framer-motion";
import {
  Store,
  TrendingUp,
  BarChart3,
  ShoppingCart,
  Package,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function EcommercePage() {
  return (
    <section className="pt-28 pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Marketplace Growth Infrastructure
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We don’t just manage listings — we engineer structured revenue
            systems across Amazon, Flipkart, Meesho, Myntra and multi-platform ecosystems.
          </p>
        </motion.div>

        {/* ================= MARKETPLACES ================= */}
        <AnimatedSection>
          <div className="mb-28 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Platforms We Scale
            </h2>

            <div className="grid md:grid-cols-5 gap-6">
              {["Amazon", "Flipkart", "Meesho", "Myntra", "Nykaa"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl"
                >
                  <p className="font-semibold">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ================= CORE SERVICES ================= */}
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-32">

            <ServiceCard
              icon={<Store size={28} />}
              title="Seller Infrastructure Setup"
              desc="Structured onboarding, documentation, account configuration and compliance."
            />

            <ServiceCard
              icon={<ShoppingCart size={28} />}
              title="Listing & SEO Optimization"
              desc="High-converting catalog architecture, keyword targeting & premium listing structuring."
            />

            <ServiceCard
              icon={<BarChart3 size={28} />}
              title="Marketplace Advertising"
              desc="ROI-focused sponsored ads & conversion-based campaign scaling."
            />

            <ServiceCard
              icon={<TrendingUp size={28} />}
              title="Revenue Scaling Strategy"
              desc="Data-driven pricing, competitor positioning & performance tracking."
            />

            <ServiceCard
              icon={<Package size={28} />}
              title="Inventory & Operations"
              desc="Inventory forecasting, order management & supply chain structuring."
            />

            <ServiceCard
              icon={<ShieldCheck size={28} />}
              title="Account Health Protection"
              desc="Seller rating optimization, suspension prevention & recovery support."
            />

          </div>
        </AnimatedSection>

        {/* ================= PREMIUM GROWTH GRAPH ================= */}
<div className="mb-32 text-center">

  <h2 className="text-3xl md:text-4xl font-bold mb-16">
    Marketplace Revenue Growth Model
  </h2>

  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">

    {/* GRID BACKGROUND */}
    <div className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <svg viewBox="0 0 800 400" className="w-full h-auto relative z-10">

      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* AREA FILL */}
      <motion.path
        d="M50 320 C150 270, 250 220, 350 200 S550 120, 750 80 L750 380 L50 380 Z"
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      {/* GLOW LINE */}
      <motion.path
        d="M50 320 C150 270, 250 220, 350 200 S550 120, 750 80"
        fill="transparent"
        stroke="url(#lineGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{
          filter: "drop-shadow(0 0 12px rgba(59,130,246,0.6))",
        }}
      />

      {/* DATA POINTS */}
      {[320, 250, 200, 120, 80].map((y, i) => (
        <circle
          key={i}
          cx={50 + i * 175}
          cy={y}
          r="7"
          fill="#3b82f6"
          style={{
            filter: "drop-shadow(0 0 8px rgba(59,130,246,0.8))",
          }}
        />
      ))}

    </svg>

    {/* REVENUE LABELS */}
    <div className="flex justify-between text-gray-400 text-sm mt-8 px-6 relative z-10">
      <span>Month 1<br /><span className="text-white font-semibold">₹1.2L</span></span>
      <span>Month 2<br /><span className="text-white font-semibold">₹2.8L</span></span>
      <span>Month 3<br /><span className="text-white font-semibold">₹4.5L</span></span>
      <span>Month 4<br /><span className="text-white font-semibold">₹7.2L</span></span>
      <span>Month 5<br /><span className="text-white font-semibold">₹12.4L</span></span>
    </div>

    <div className="mt-10 text-blue-400 font-semibold relative z-10">
      Structured Revenue Scaling Framework
    </div>

  </div>
</div>


        {/* ================= SERVICE COMPARISON TABLE ================= */}
        <AnimatedSection>
          <div className="mb-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              Service Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4">Features</th>
                    <th className="p-4 text-center">Starter</th>
                    <th className="p-4 text-center">Growth</th>
                    <th className="p-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>

                  {[
                    ["Seller Account Setup", true, true, true],
                    ["Listing Optimization", true, true, true],
                    ["Marketplace Ads", false, true, true],
                    ["Inventory Planning", false, true, true],
                    ["Advanced Scaling Strategy", false, false, true],
                    ["Dedicated Account Manager", false, false, true],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-4">{row[0]}</td>
                      {[row[1], row[2], row[3]].map((item, index) => (
                        <td key={index} className="p-4 text-center">
                          {item ? (
                            <Check className="inline text-green-400" size={18} />
                          ) : (
                            <span className="text-gray-500">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* ================= CTA ================= */}
        <AnimatedSection>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Scale Your Marketplace Revenue?
              </h2>

              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let’s build a structured multi-platform revenue engine for your brand.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-xl hover:scale-105"
              >
                Start Scaling <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

/* ================= ANIMATED SECTION WRAPPER ================= */
function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

/* ================= SERVICE CARD ================= */
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl"
    >
      <div className="text-blue-400 mb-5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
