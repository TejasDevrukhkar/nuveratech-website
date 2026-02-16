import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "NuveraTech | IT & Digital Solutions Company",
    template: "%s | NuveraTech",
  },
  description:
    "NuveraTech helps businesses scale through high-performance websites, mobile apps, AI automation, digital marketing, PR & enterprise IT solutions.",

  keywords: [
    "IT Company India",
    "Website Development",
    "Digital Marketing",
    "AI Automation",
    "PR & Branding",
    "E-commerce Solutions",
    "NuveraTech",
  ],

  authors: [{ name: "NuveraTech Team" }],

  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "NuveraTech | Engineering Digital Growth",
    description:
      "Scalable IT, Automation & Marketing Systems built for modern businesses.",
    url: "https://nuveratech.com",
    siteName: "NuveraTech",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "NuveraTech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  metadataBase: new URL("https://nuveratech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
