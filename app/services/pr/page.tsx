"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Globe,
  Award,
  TrendingUp,
  Users,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function PRPage() {
  return (
    <section className="pt-28 pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            PR & Brand Authority Engineering
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We build powerful brand narratives, strategic media presence,
            and long-term authority positioning for leaders and businesses.
          </p>
        </motion.div>

        {/* ================= TRUST STATS ================= */}
        <div className="grid md:grid-cols-4 gap-8 mb-28 text-center">

          <TrustCard number="50+" label="Influencers Managed" />
          <TrustCard number="20+" label="Filmmakers Positioned" />
          <TrustCard number="10+" label="Political Profiles Handled" />
          <TrustCard number="100+" label="Media Placements" />

        </div>

        {/* ================= WHO WE WORK WITH ================= */}
        <div className="mb-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Who We Work With
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <ProfileCard
              title="Influencers & Creators"
              desc="Personal branding, authority building, reputation management and growth-driven media positioning."
            />

            <ProfileCard
              title="Filmmakers & Public Figures"
              desc="Strategic PR campaigns, interviews, digital publications and brand credibility frameworks."
            />

            <ProfileCard
              title="Political Leaders"
              desc="Reputation management, digital authority building and structured public narrative control."
            />

          </div>
        </div>

        {/* ================= PR TIMELINE ================= */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our PR Impact Timeline
          </h2>

          <div className="relative border-l border-white/20 pl-8 space-y-14">

            <TimelineItem
              year="Phase 1"
              text="Brand audit, narrative strategy and digital presence restructuring."
            />

            <TimelineItem
              year="Phase 2"
              text="Media outreach activation, press releases and authority content positioning."
            />

            <TimelineItem
              year="Phase 3"
              text="Search engine reputation building and long-term credibility scaling."
            />

            <TimelineItem
              year="Phase 4"
              text="Authority consolidation and digital dominance positioning."
            />

          </div>
        </div>

        {/* ================= WHY TRUST US ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Why Brands & Leaders Trust NuveraTech
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <HighlightCard
              title="Strategic Authority Building"
              desc="We engineer credibility and perception — not just visibility."
            />

            <HighlightCard
              title="Structured Reputation Systems"
              desc="Controlled narrative management across platforms."
            />

            <HighlightCard
              title="Confidential & Professional"
              desc="High-level profile handling with strategic discretion."
            />

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Authority?
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let’s position you as a trusted leader with structured
              digital PR systems and authority-driven strategy.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-xl hover:scale-105"
            >
              Elevate Your Brand <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= TRUST CARD ================= */
function TrustCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
      <h3 className="text-3xl font-bold text-blue-400 mb-2">{number}</h3>
      <p className="text-gray-300 text-sm">{label}</p>
    </div>
  );
}

/* ================= PROFILE CARD ================= */
function ProfileCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ================= TIMELINE ITEM ================= */
function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
      <h4 className="text-blue-400 font-semibold mb-2">{year}</h4>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
}

/* ================= HIGHLIGHT CARD ================= */
function HighlightCard({ title, desc }: { title: string; desc: string }) {
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
