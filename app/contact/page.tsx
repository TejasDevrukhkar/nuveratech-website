"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `
New Business Inquiry

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}
Message: ${form.message}
`;

    const whatsappURL = `https://wa.me/919545375167?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let’s Build Something Powerful Together
          </motion.h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Whether you’re a startup or an enterprise, we’re ready to engineer
            your digital growth. Let’s discuss your vision.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <ContactCard
            icon={<Phone size={26} />}
            title="Call Us"
            description="+91 9545375167"
            link="tel:+919545375167"
          />

          <ContactCard
            icon={<MessageCircle size={26} />}
            title="WhatsApp"
            description="Chat With Our Team"
            link="https://wa.me/919545375167"
          />

          <ContactCard
            icon={<Mail size={26} />}
            title="Email"
            description="contact@nuveratech.com"
            link="mailto:contact@nuveratech.com"
          />

          <ContactCard
            icon={<MapPin size={26} />}
            title="Office"
            description="Mumbai, Maharashtra"
          />

        </div>

        {/* PREMIUM FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-black rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto"
        >

          <h2 className="text-3xl font-bold text-center mb-10">
            Start Your Project
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
            <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
            <InputField label="Project Subject" name="subject" value={form.subject} onChange={handleChange} />

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-10 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:scale-105"
              >
                Send Message
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
};

function ContactCard({ icon, title, description, link }: CardProps) {
  const content = (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition cursor-pointer">
      <div className="mb-4 flex justify-center text-blue-400">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );

  return link ? (
    <a href={link} target="_blank">{content}</a>
  ) : content;
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
    </div>
  );
}
