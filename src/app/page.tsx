import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Sparkles, Shield, Clock, Car } from "lucide-react";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mikez Mobile Detailing LLC",
    description: "Professional mobile car detailing in Stow, OH and Summit County. We come to you at home or work. Fully insured.",
    url: "https://mikezmobiledetailing.com",
    telephone: "+13303389293",
    email: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stow",
      addressRegion: "OH",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 41.1595, longitude: -81.4407 },
      geoRadius: "30000",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroBackground>
        <Hero
          title="Mikez Mobile Detailing"
          subtitle="Professional mobile car detailing in Stow, OH — we come to you at home or work so you can relax while we make your car shine."
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 -mt-16">
          <QuoteForm />
        </div>
      </HeroBackground>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Mikez Mobile</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-16">
            We come to you.<br />Simple as that.
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Car className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Fully Mobile — We Come to You</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  No dropping off, no waiting rooms. We come to your home, office, or wherever works for you. All we need is your vehicle and a place to hook up a hose.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Fully Insured & Professional</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Mikez Mobile Detailing is fully insured. Our team has years of experience and is dedicated to providing the best possible service on every vehicle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Sparkles className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Free Pick Up & Drop Off</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Can&apos;t have your car detailed at home or work? We offer FREE pick up and drop off so there&apos;s never a reason to skip getting your car detailed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Clock className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Flexible Payment Options</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  We accept Cash, Check, Venmo, Apple Cash, and Credit Card (3% fee). We even offer payment plans to make professional detailing accessible for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From quick interior refreshes to full exterior restorations — we bring the detail shop to your driveway.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interior Detailing */}
            <Link href="/services/interior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/mikesmobiledetailingcard.png')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Interior Detailing</h3>
                <p className="text-primary font-bold text-lg">Starting at $90</p>
                <p className="text-gray-200 text-base leading-relaxed">Deep cleaning, stain removal, dashboard &amp; console detailing, upholstery treatment.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            {/* Exterior Detailing */}
            <Link href="/services/exterior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/exteriorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Exterior Detailing</h3>
                <p className="text-primary font-bold text-lg">Starting at $90</p>
                <p className="text-gray-200 text-base leading-relaxed">Hand wash, paint decontamination, tire &amp; wheel cleaning, trim restoration.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            {/* Paint Enhancement */}
            <Link href="/services/paint-protection" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0" style={{ backgroundImage: "url('/Paintcard1.jpg')", backgroundSize: "160%", backgroundPosition: "65% 40%" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Paint Enhancement &amp;&nbsp;Protection</h3>
                <p className="text-primary font-bold text-lg">From $30</p>
                <p className="text-gray-200 text-base leading-relaxed">Full wax, compound buff &amp; wax, engine detail, floormat replacement.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>
          </div>

          {/* Complete Detail Package CTA */}
          <Link href="/services/full-detail-package" className="group mt-8 block rounded-xl border border-white/10 hover:border-primary/50 transition bg-gradient-to-r from-dark-lighter to-dark-light p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Complete Detail Package</h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-3">Interior + Exterior detailing bundled together for a full vehicle refresh.</p>
                <p className="text-primary font-bold text-xl">Starting at $180</p>
                <p className="text-gray-400 text-sm mt-1">Final pricing depends on vehicle size and condition.</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg group-hover:bg-primary-dark transition text-lg">Get Exact Quote</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Meet the Owner</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Hi, I&apos;m Michael Zukas</h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                I&apos;ve been detailing for years and grew up loving the satisfaction of a perfectly clean car. That passion pushed me to open Mikez Mobile Detailing LLC — so others could experience that same feeling.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                I&apos;m a father to two beautiful girls, and my wife&apos;s support has motivated me to push for something bigger every day. I take enormous pride in my work and am always growing and learning.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                When I&apos;m not detailing, you&apos;ll find me fishing or spending time with my family and our two golden retrievers. Life never slows down — and neither do we.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:underline">
                Learn More About Us →
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-600 text-sm">[Owner photo placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Areas We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Proudly serving Stow and surrounding communities across Summit County, Ohio.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-4 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group"
              >
                <span className="text-white font-semibold group-hover:text-primary transition">{loc.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Book Your <span className="text-primary">Mobile Detail</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Fill out the form above or get in touch — we&apos;ll come to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+13303389293" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Call (330) 338-9293
            </a>
            <span className="text-gray-500">or</span>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              BOOK NOW
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Stow, OH (Summit County) &nbsp;|&nbsp; FREE Pick Up &amp; Drop Off Available</p>
          </div>
        </div>
      </section>
    </>
  );
}
