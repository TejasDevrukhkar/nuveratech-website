"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Landmark,
  Hotel,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <section className="pt-28 pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industry-Focused Digital Transformation
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We design scalable digital ecosystems tailored to specific industry challenges —
            combining technology, automation, and structured growth systems.
          </p>
        </div>

        {/* ================= INDUSTRY GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <IndustryCard
            icon={<Rocket size={32} />}
            title="Startups"
            desc="MVP development, rapid scaling systems, growth architecture and investor-ready platforms."
          />

          <IndustryCard
            icon={<Building2 size={32} />}
            title="SMEs & Enterprises"
            desc="ERP systems, automation workflows, cloud architecture and operational digitization."
          />

          <IndustryCard
            icon={<HeartPulse size={32} />}
            title="Healthcare"
            desc="Secure platforms, patient management systems, booking software and compliance-ready infrastructure."
          />

          <IndustryCard
            icon={<GraduationCap size={32} />}
            title="Education"
            desc="LMS platforms, student portals, online course ecosystems and digital classroom systems."
          />

          <IndustryCard
            icon={<ShoppingBag size={32} />}
            title="Retail & E-commerce"
            desc="High-converting storefronts, marketplace scaling systems and omnichannel growth models."
          />

          <IndustryCard
            icon={<Landmark size={32} />}
            title="Political & Public Figures"
            desc="PR positioning, digital authority building, reputation management and structured media campaigns."
          />

          <IndustryCard
            icon={<Hotel size={32} />}
            title="Hospitality"
            desc="Booking systems, automated CRM flows and experience-driven digital branding."
          />

          <IndustryCard
            icon={<Cpu size={32} />}
            title="Technology Firms"
            desc="Product architecture, SaaS platforms, scalable cloud systems and enterprise integrations."
          />

          <IndustryCard
            icon={<Briefcase size={32} />}
            title="Corporate & Professional Services"
            desc="High-authority branding, lead generation systems and enterprise IT infrastructure."
          />

        </div>

        {/* ================= TRUST SECTION ================= */}
        <div className="mb-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Industry-Specific Strategy Matters
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Every industry operates differently. Compliance requirements, sales cycles,
            customer acquisition models, and operational challenges vary.
            Our approach ensures your digital systems are aligned with your industry structure —
            not just generic technology solutions.
          </p>
        </div>

        {/* ================= AUTHORITY BLOCK ================= */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-14 text-center shadow-2xl">
          <ShieldCheck size={40} className="mx-auto text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold mb-4">
            Structured Execution. Measurable Impact.
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine technical precision, automation intelligence, and
            industry insights to engineer scalable growth systems for every sector.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-blue-600 px-10 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Discuss Your Industry
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */
function IndustryCard({
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
