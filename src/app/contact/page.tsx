import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Mikez Mobile Detailing",
  description: "Contact Mikez Mobile Detailing LLC in Stow, OH. Book your mobile car detail today — we come to you!",
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to book your mobile detail? Reach out and we&apos;ll come to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, label: "Location", content: <span className="text-white">Stow, OH (Summit County) — We come to you!</span> },
              { icon: <Clock className="w-6 h-6" />, label: "Hours", content: <span className="text-white">Monday – Sunday: 8:00 AM – 6:00 PM</span> },
              { icon: <Mail className="w-6 h-6" />, label: "Website", content: (
                <a href="https://mikezmobiledetailing.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">mikezmobiledetailing.com</a>
              )},
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, label: "Instagram", content: (
                <a href="https://www.instagram.com/mikezmobiledetailing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                  @mikezmobiledetailing
                </a>
              )},
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>, label: "Facebook / Book Online", content: (
                <a href="https://mikezmobiledetailing.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                  Book at mikezmobiledetailing.com
                </a>
              )},
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-dark-lighter border border-white/5">
                <div className="text-primary mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-lg bg-dark-lighter border border-white/5">
              <h3 className="text-white font-semibold mb-3">Payment Options</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <span>✓ Cash</span>
                <span>✓ Check</span>
                <span>✓ Venmo</span>
                <span>✓ Apple Cash</span>
                <span>✓ Credit Card (3% fee)</span>
                <span>✓ Payment Plans</span>
              </div>
            </div>

            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg w-full sm:w-auto">
              Book Your Detail
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48370.0!2d-81.4407!3d41.1595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831073f7f68d8a7%3A0x5c8e7e6e7e7e7e7e!2sStow%2C%20OH!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mikez Mobile Detailing - Stow, OH"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
