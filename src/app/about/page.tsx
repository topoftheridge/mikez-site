import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Mikez Mobile Detailing | Stow, OH",
  description: "Meet Michael Zukas, owner of Mikez Mobile Detailing LLC. Professional mobile car detailing serving Stow, OH and Summit County. Fully insured, we come to you.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image src="/aboutcard1.jpg" alt="" fill className="object-cover object-[70%_70%] sm:object-[center_70%]" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <Hero
            title="Mikez Mobile Detailing"
            subtitle="Mobile Car Detailing in Stow, OH"
            showCTA={false}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center pb-12 -mt-20">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              BOOK NOW
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Meet the Owner */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Meet the Owner</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Hi, I&apos;m <span className="text-primary">Michael Zukas</span>
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hello! My name is Michael Zukas and I&apos;m the owner and operator of Mikez Mobile Detailing LLC. I have been detailing for quite some time and just wanted to introduce myself! I&apos;m a father to two beautiful girls. My supportive wife has pushed me to be the best version of myself and has motivated me to become what I am today!
                </p>
                <p>
                  Growing up I always loved to detail my own cars. The satisfaction it gave me to drive a clean car left me with the desire to let others experience that same feeling — so I decided to open my own professional mobile car detailing company.
                </p>
                <p>
                  I take a lot of pride in my work and I am always looking to learn and grow into something bigger and better every day. In my free time I love to fish and spend quality time with my family. Between my wife, our daughters, and our two crazy golden retrievers, life never slows down!
                </p>
                <p>
                  Thank you for coming to my page and I hope to meet and connect with you soon!
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-600 text-sm">[Owner photo placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We are fully insured and our team of experts have years of experience dedicated to providing the best possible service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-dark border border-white/5">
              <h3 className="text-white font-bold text-xl mb-3">We Come to You</h3>
              <p className="text-gray-400 leading-relaxed">
                Located in Stow, OH, we conveniently service nearby areas. We come to your home or office — all we need is your vehicle and a place to hook up a hose.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-dark border border-white/5">
              <h3 className="text-white font-bold text-xl mb-3">Free Pick Up &amp; Drop Off</h3>
              <p className="text-gray-400 leading-relaxed">
                Can&apos;t have your car detailed at home or work? We offer FREE pick up and drop off for those who need it — no excuses not to get detailed.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-dark border border-white/5">
              <h3 className="text-white font-bold text-xl mb-3">Flexible Payment</h3>
              <p className="text-gray-400 leading-relaxed">
                Cash, Check, Venmo, Apple Cash, Credit Card (3% fee), and payment plans available. We make it easy to say yes to a clean car.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-dark border border-white/5">
              <h3 className="text-white font-bold text-xl mb-3">Fully Insured</h3>
              <p className="text-gray-400 leading-relaxed">
                Your vehicle is in safe hands. Mikez Mobile Detailing LLC is fully insured and committed to outstanding results every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A look at some of the vehicles we&apos;ve brought back to life.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/10 bg-dark-lighter aspect-square flex items-center justify-center">
                <span className="text-gray-600 text-xs">[gallery-{i}.jpg]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-dark-light">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your <span className="text-primary">Mobile Detail</span>?
          </h2>
          <p className="text-gray-400 mb-6">Get in touch today — we come to you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              BOOK NOW
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
