import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Mikez Mobile Detailing | Professional Mobile Car Detailing in Stow, OH",
    template: "%s | Mikez Mobile Detailing",
  },
  description:
    "Professional mobile car detailing in Stow, OH and Summit County. We come to you! Interior & exterior detailing, paint correction, full detail packages. Fully insured. Book today!",
  keywords: [
    "mobile detailing Stow OH",
    "mobile car detailing Summit County",
    "mobile detailing Akron OH",
    "interior detailing",
    "exterior detailing",
    "Mikez Mobile Detailing",
    "Michael Zukas detailing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
