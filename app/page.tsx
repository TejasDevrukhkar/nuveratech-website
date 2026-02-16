"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Code2,
  Megaphone,
  Bot,
  Globe,
  Server,
  Store,
  Rocket,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Star,
} from "lucide-react";

/* ================= COUNTER ================= */
function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 4000; // Slower
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <h2
      ref={ref}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="pt-[80px] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] text-white flex items-center">

        <div className="absolute w-[600px] h-[600px] bg-cyan-400 opacity-20 rounded-full blur-[150px] top-[-100px] right-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 rounded-full blur-[150px] bottom-[-100px] left-[-150px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Engineering Digital Growth <br />
              For Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-lg text-gray-200 mb-10"
            >
              Websites • Apps • Automation • Marketing • PR • Enterprise IT
            </motion.p>

            <div className="flex gap-6 flex-wrap">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Get Free Consultation →
              </Link>

              <a
                href="https://wa.me/919209338390"
                target="_blank"
                className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                WhatsApp Now →
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-6">What We Deliver</h3>

            <ul className="space-y-4 text-gray-200 text-sm">
              <li>✔ Custom Website & App Development</li>
              <li>✔ Performance Marketing & SEO</li>
              <li>✔ AI & Workflow Automation</li>
              <li>✔ PR & Brand Authority</li>
              <li>✔ Enterprise Cloud Systems</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

            <div className="space-y-4">
              <Counter target={150} />
              <p className="text-gray-600">Projects Delivered</p>
            </div>

            <div className="space-y-4">
              <Counter target={86} />
              <p className="text-gray-600">Happy Clients</p>
            </div>

            <div className="space-y-4">
              <Counter target={24} suffix="/7" />
              <p className="text-gray-600">Dedicated Support</p>
            </div>

            <div className="space-y-4">
              <Counter target={100} suffix="%+" />
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>

          </div>
        </div>
      </section>

{/* ================= CORE EXPERTISE ================= */}
<section className="py-32 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Core Expertise
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Enterprise-grade digital solutions designed to accelerate growth,
        optimize performance, and future-proof your business.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          title: "Development",
          desc: "Custom web platforms, mobile apps, and scalable enterprise software.",
          icon: <Code2 size={30} strokeWidth={1.8} />,
          link: "/services/development",
        },
        {
          title: "Digital Marketing",
          desc: "Performance marketing, SEO, paid campaigns, and growth systems.",
          icon: <Megaphone size={30} strokeWidth={1.8} />,
          link: "/services/digital-marketing",
        },
        {
          title: "AI & Automation",
          desc: "Intelligent workflows, chatbots, and AI-driven process automation.",
          icon: <Bot size={30} strokeWidth={1.8} />,
          link: "/services/ai-automation",
        },
        {
          title: "PR & Branding",
          desc: "Authority positioning, reputation management, and brand strategy.",
          icon: <Globe size={30} strokeWidth={1.8} />,
          link: "/services/pr-branding",
        },
        {
          title: "E-commerce Systems",
          desc: "Marketplace integrations and high-converting D2C platforms.",
          icon: <Store size={30} strokeWidth={1.8} />,
          link: "/services/ecommerce",
        },
        {
          title: "Cloud & IT Infrastructure",
          desc: "Secure hosting, enterprise cloud architecture, and IT management.",
          icon: <Server size={30} strokeWidth={1.8} />,
          link: "/services/development",
        },
      ].map((item, i) => (
        <Link key={i} href={item.link}>
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-sm">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {item.desc}
            </p>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 -z-10"></div>
          </motion.div>
        </Link>
      ))}

    </div>
  </div>
</section>


{/* ================= PREMIUM TESTIMONIALS ================= */}
<section className="py-28 bg-gray-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">
        What Our Clients Say
      </h2>
      <p className="text-gray-500 mt-3">
        Trusted by businesses across industries
      </p>
    </div>

    <motion.div
      className="flex gap-8"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 35,
        ease: "linear",
      }}
    >
      {[
        {
          name: "Rahul Mehta",
          role: "Founder",
          company: "RM Realty",
          text: "NuveraTech transformed our digital systems completely. Our lead generation increased significantly.",
        },
        {
          name: "Ananya Sharma",
          role: "Director",
          company: "EduCore Academy",
          text: "Professional execution and strong enterprise architecture. Their team truly understands scalability.",
        },
        {
          name: "Vikram Patel",
          role: "CEO",
          company: "RetailKart",
          text: "Reliable long-term technology partner. Performance marketing delivered measurable ROI.",
        },
        {
          name: "Sneha Desai",
          role: "Operations Head",
          company: "MediCare Plus",
          text: "Automation systems reduced manual workload drastically. Highly structured approach.",
        },
        {
          name: "Kunal Shah",
          role: "Managing Director",
          company: "KS Enterprises",
          text: "Clean UI, scalable backend and powerful infrastructure support. Highly recommended.",
        },
        {
          name: "Priya Verma",
          role: "Brand Strategist",
          company: "PV Branding Co.",
          text: "Their PR and branding execution elevated our authority across platforms.",
        },
        {
          name: "Arjun Rao",
          role: "Tech Lead",
          company: "StartupGrid",
          text: "End-to-end development delivered flawlessly. Strong technical leadership.",
        },
      ]
        .concat(
          [
            {
              name: "Rahul Mehta",
              role: "Founder",
              company: "RM Realty",
              text: "NuveraTech transformed our digital systems completely. Our lead generation increased significantly.",
            },
            {
              name: "Ananya Sharma",
              role: "Director",
              company: "EduCore Academy",
              text: "Professional execution and strong enterprise architecture. Their team truly understands scalability.",
            },
          ]
        )
        .map((item, i) => (
          <div
            key={i}
            className="min-w-[350px] bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              “{item.text}”
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs">
                  {item.role} • {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
    </motion.div>
  </div>
</section>


    </main>
  );
}
