"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Server,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function DevelopmentPage() {
  return (
    <section className="pt-28 pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Scalable Development Solutions
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We engineer high-performance web platforms, mobile applications,
            enterprise software systems, and scalable digital architecture
            designed for long-term business growth.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">

          <ServiceCard
            icon={<Globe size={32} />}
            title="Website Development"
            desc="Custom corporate websites, landing pages, portfolio sites and high-converting business platforms built for performance."
          />

          <ServiceCard
            icon={<Smartphone size={32} />}
            title="App Development"
            desc="Android, iOS and cross-platform mobile apps engineered with scalable architecture and smooth UI/UX."
          />

          <ServiceCard
            icon={<Code2 size={32} />}
            title="Custom Software"
            desc="ERP, CRM, and custom enterprise systems designed to automate operations and improve efficiency."
          />

          <ServiceCard
            icon={<Database size={32} />}
            title="Backend Architecture"
            desc="Secure APIs, database systems, cloud integration, and structured backend infrastructure."
          />

          <ServiceCard
            icon={<Server size={32} />}
            title="Cloud & DevOps"
            desc="Deployment pipelines, hosting optimization, cloud servers and scalable production environments."
          />

          <ServiceCard
            icon={<ShieldCheck size={32} />}
            title="Security & Optimization"
            desc="Application security, performance tuning, data protection and continuous monitoring systems."
          />

        </div>

        {/* ================= PROCESS SECTION ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">

            <ProcessCard step="01" title="Strategy & Planning" />
            <ProcessCard step="02" title="UI/UX & Architecture" />
            <ProcessCard step="03" title="Development & Testing" />
            <ProcessCard step="04" title="Launch & Optimization" />

          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Why Choose NuveraTech
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <HighlightCard
              title="Enterprise Standards"
              desc="Structured coding practices, scalable frameworks and long-term maintainability."
            />

            <HighlightCard
              title="Performance Focused"
              desc="Optimized systems engineered for speed, security and measurable impact."
            />

            <HighlightCard
              title="Future-Ready Architecture"
              desc="Solutions designed to grow as your business scales."
            />

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Something Powerful?
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let’s architect scalable digital infrastructure that drives
              measurable business growth.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-xl hover:scale-105"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
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
      whileHover={{ y: -8 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl"
    >
      <div className="text-blue-400 mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ================= PROCESS CARD ================= */
function ProcessCard({
  step,
  title,
}: {
  step: string;
  title: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg">
      <p className="text-blue-400 font-bold mb-3">{step}</p>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

/* ================= HIGHLIGHT CARD ================= */
function HighlightCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl text-center"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
