"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="pt-28 pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Engineering Intelligent Digital Growth Systems
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            NuveraTech architects scalable digital ecosystems, automation
            frameworks, and enterprise-grade growth infrastructure for
            ambitious businesses worldwide.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Journey
          </h2>

          <div className="relative border-l border-white/20 pl-8 space-y-14">
            <TimelineItem
              year="2023"
              text="Founded with a focus on scalable web platforms and structured digital systems."
            />
            <TimelineItem
              year="2024"
              text="Expanded into automation frameworks and enterprise IT infrastructure."
            />
            <TimelineItem
              year="2025"
              text="Built long-term strategic partnerships across multiple industries."
            />
            <TimelineItem
              year="Present"
              text="Developing AI-powered automation ecosystems and global digital architecture."
            />
          </div>
        </div>

        {/* ================= FOUNDER ================= */}
        <FounderSection
          image="/tejas.jpeg"
          name="Tejas Devrukhkar"
          role="Founder & CEO"
          quote="My mission is not to build projects — it is to engineer scalable digital systems that create sustainable competitive advantage and measurable impact."
        />

        {/* ================= CO-FOUNDER ================= */}
        <FounderSection
          image="/Roshani.png"
          name="Roshani Raut"
          role="Co-Founder & Director"
          quote="Operational excellence and structured execution are the foundations of scalable growth. We build systems businesses can rely on long-term."
        />

        {/* ================= GLOBAL PRESENCE ================= */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Our Global Presence
          </h2>

          <div className="relative max-w-6xl mx-auto">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 blur-3xl opacity-40"></div>

            {/* World Map */}
            <Image
              src="/worldmap.png"
              alt="Global Map"
              width={1400}
              height={700}
              className="w-full opacity-40 select-none mx-auto relative z-10"
              priority
            />

            {/* Pulse Dots */}
            <PulseDot top="48%" left="57%" label="India" />
            <PulseDot top="40%" left="45%" label="Europe" />
            <PulseDot top="50%" left="30%" label="USA" />
            <PulseDot top="63%" left="75%" label="Australia" />

          </div>

          <p className="text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
            NuveraTech is building a globally connected digital ecosystem —
            delivering intelligent infrastructure and automation solutions
            across international markets.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-28">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Let’s Engineer Your Growth Infrastructure.
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with NuveraTech to build scalable digital systems
              designed for long-term business expansion.
            </p>

            <a
              href="/contact"
              className="inline-block bg-blue-600 px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-xl hover:scale-105"
            >
              Connect With Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */
function TimelineItem({
  year,
  text,
}: {
  year: string;
  text: string;
}) {
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

/* ================= FOUNDER SECTION ================= */
function FounderSection({
  image,
  name,
  role,
  quote,
}: {
  image: string;
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-16 items-center mb-32"
    >
      <div className="relative w-64 h-64 mx-auto md:mx-0">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-40"></div>
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover border-4 border-white/20"
        />
      </div>

      <div>
        <Quote className="text-blue-400 mb-6" size={36} />
        <p className="text-xl leading-relaxed text-gray-200 mb-6">
          “{quote}”
        </p>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-blue-400 font-medium">{role}</p>
      </div>
    </motion.div>
  );
}

/* ================= PULSE DOT ================= */
function PulseDot({
  top,
  left,
  label,
}: {
  top: string;
  left: string;
  label: string;
}) {
  return (
    <div
      className="absolute group cursor-pointer z-20"
      style={{ top, left }}
    >
      <span className="absolute inline-flex h-5 w-5 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
      <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></span>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap shadow-md">
        {label}
      </div>
    </div>
  );
}
