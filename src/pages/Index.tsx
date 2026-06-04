import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConnectedBrands from "@/components/ConnectedBrands";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Creek Oxley | Strategic Business Consulting & Management"
        description="Creek Oxley is a Nairobi-based management consultancy delivering strategy, destination management, and smart staffing across the East African Community."
        canonical="https://creekoxley.com/"
      />
      <div className="min-h-screen bg-bone">
        <Navbar />
        <Hero />

        {/* About — editorial two column */}
        <section id="about" className="bg-bone">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-8 md:gap-12">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow mb-6">01 — The Firm</p>
                <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] text-creekoxley">
                  Built for operators
                  <br />
                  <em className="italic">who measure outcomes.</em>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <p className="text-[17px] leading-[1.75] text-body-ink mb-6">
                  Creek Oxley is a management consultancy founded on a diagnostic
                  approach — scientific management tools applied with judgement, and a
                  bias toward outcomes the leadership team can actually see in the
                  numbers.
                </p>
                <p className="text-[17px] leading-[1.75] text-muted-ink mb-10">
                  Our team brings depth across organisational behaviour, strategy,
                  marketing, supply chain, people productivity and systems audit. We
                  serve owners and executives across Kenya and the wider East African
                  Community.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-rule pt-10">
                  <div>
                    <p className="eyebrow mb-3">Vision</p>
                    <p className="font-display text-[22px] text-creekoxley leading-snug">
                      Strategic, sustainable business ecosystems — built to last.
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Mission</p>
                    <p className="font-display text-[22px] text-creekoxley leading-snug">
                      Transforming one business at a time, with quality service to
                      clients and community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rule" />
        </section>

        {/* Pull quote */}
        <section className="bg-bone">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-10 md:col-start-2">
                <div className="rule-accent mb-8" />
                <blockquote className="font-display italic text-[32px] md:text-[48px] leading-[1.15] text-creekoxley tracking-[-0.01em]">
                  "Strategy is what you decide not to do. The work of the firm is to
                  make those decisions defensible, then operationally true."
                </blockquote>
                <p className="eyebrow mt-8">— The Creek Oxley operating philosophy</p>
              </div>
            </div>
          </div>
          <div className="rule" />
        </section>

        <Services />

        {/* Dark stat panel */}
        <section className="bg-ink text-white">
          <div className="container-x section-pad">
            <p className="eyebrow !text-silver mb-10">03 — By the numbers</p>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-silver/30">
              {[
                ["20+", "Years of senior operating experience"],
                ["5", "EAC markets actively served"],
                ["3", "Specialist divisions under one firm"],
              ].map(([n, l]) => (
                <div key={l} className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0">
                  <div className="font-sans font-medium text-[72px] md:text-[96px] leading-none text-white">{n}</div>
                  <div className="mt-4 text-[16px] text-silver max-w-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConnectedBrands />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
