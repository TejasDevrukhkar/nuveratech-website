"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Megaphone,
  BarChart3,
  Target,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
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
            Performance-Driven Digital Marketing
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We build data-backed marketing systems that generate qualified leads,
            increase visibility, and drive measurable revenue growth.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">

          <ServiceCard
            icon={<Search size={32} />}
            title="Search Engine Optimization"
            desc="Technical SEO, on-page optimization, keyword strategy, and ranking systems built for long-term organic growth."
          />

          <ServiceCard
            icon={<Megaphone size={32} />}
            title="Paid Advertising"
            desc="Google Ads, Meta Ads, YouTube & performance campaigns engineered for ROI and predictable lead generation."
          />

          <ServiceCard
            icon={<Globe size={32} />}
            title="Social Media Marketing"
            desc="Content strategy, audience growth, brand authority building and engagement-focused campaigns."
          />

          <ServiceCard
            icon={<BarChart3 size={32} />}
            title="Analytics & Tracking"
            desc="Conversion tracking, funnel optimization, heatmaps, and data-driven performance reporting."
          />

          <ServiceCard
            icon={<Target size={32} />}
            title="Lead Generation Systems"
            desc="High-converting landing pages, automated funnels, CRM integrations and nurturing workflows."
          />

          <ServiceCard
            icon={<TrendingUp size={32} />}
            title="Growth Strategy"
            desc="Complete digital growth architecture aligned with business objectives and long-term scalability."
          />

        </div>

        {/* ================= MARKETING PROCESS ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Our Marketing Framework
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">

            <ProcessCard step="01" title="Market Research" />
            <ProcessCard step="02" title="Strategy & Funnel Design" />
            <ProcessCard step="03" title="Campaign Execution" />
            <ProcessCard step="04" title="Optimization & Scaling" />

          </div>
        </div>

        {/* ================= WHY US ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Why Our Marketing Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <HighlightCard
              title="ROI Focused"
              desc="Every campaign is engineered with measurable KPIs and performance tracking."
            />

            <HighlightCard
              title="Data-Driven Decisions"
              desc="We optimize using analytics, behavior tracking and conversion insights."
            />

            <HighlightCard
              title="Scalable Systems"
              desc="Our funnels and automation systems are designed to grow with your business."
            />

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Scale Your Digital Growth?
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let’s build performance-driven marketing systems that generate
              consistent leads and predictable revenue.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-xl hover:scale-105"
            >
              Start Campaign <ArrowRight size={18} />
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
