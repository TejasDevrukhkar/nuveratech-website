"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  Workflow,
  Database,
  Brain,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AutomationPage() {
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
            AI & Intelligent Automation
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We design AI-powered automation ecosystems that reduce operational
            costs, increase productivity, and transform traditional workflows
            into intelligent business systems.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">

          <ServiceCard
            icon={<Bot size={32} />}
            title="AI Chatbots"
            desc="Conversational AI bots for WhatsApp, websites, and CRM integrations to automate customer engagement."
          />

          <ServiceCard
            icon={<Workflow size={32} />}
            title="Workflow Automation"
            desc="Automated business processes that eliminate manual tasks and streamline internal operations."
          />

          <ServiceCard
            icon={<Cpu size={32} />}
            title="AI Business Systems"
            desc="Custom AI-driven systems for lead scoring, predictive analytics, and intelligent decision-making."
          />

          <ServiceCard
            icon={<Database size={32} />}
            title="Data Automation"
            desc="Automated reporting dashboards, analytics pipelines, and real-time data processing systems."
          />

          <ServiceCard
            icon={<Brain size={32} />}
            title="Machine Learning Integration"
            desc="Custom ML model integrations to improve forecasting, personalization and optimization."
          />

          <ServiceCard
            icon={<ShieldCheck size={32} />}
            title="Secure Infrastructure"
            desc="Enterprise-grade AI deployment with scalable cloud infrastructure and data security compliance."
          />

        </div>

        {/* ================= AUTOMATION PROCESS ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Our Automation Framework
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">

            <ProcessCard step="01" title="Process Analysis" />
            <ProcessCard step="02" title="System Design" />
            <ProcessCard step="03" title="AI Integration" />
            <ProcessCard step="04" title="Optimization & Scaling" />

          </div>
        </div>

        {/* ================= WHY AI WITH US ================= */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Why AI With NuveraTech
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <HighlightCard
              title="Intelligent Systems"
              desc="We build smart ecosystems — not isolated automation tools."
            />

            <HighlightCard
              title="Scalable Architecture"
              desc="Automation frameworks designed for long-term growth and expansion."
            />

            <HighlightCard
              title="Measurable Efficiency"
              desc="Reduce manual workload, improve accuracy, and accelerate decision-making."
            />

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let’s transform your workflows into intelligent, automated
              systems that drive efficiency and sustainable growth.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-xl hover:scale-105"
            >
              Build AI System <ArrowRight size={18} />
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
