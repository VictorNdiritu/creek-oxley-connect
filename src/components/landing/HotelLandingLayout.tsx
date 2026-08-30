import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Phone, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface LandingPageData {
  // SEO
  title: string;
  description: string;
  canonical: string;
  // Hero
  eyebrow: string;
  headline: React.ReactNode;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  // Problem
  problemTitle: string;
  problemIntro: string;
  problems: string[];
  // How we help / services
  helpTitle: string;
  helpIntro: string;
  services: { title: string; desc: string }[];
  // Benefits
  benefitsTitle: string;
  benefits: string[];
  // Objections FAQ
  objectionsTitle: string;
  objections: { q: string; a: string }[];
  // CTA
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const HotelLandingLayout: React.FC<{ data: LandingPageData }> = ({ data }) => {
  return (
    <>
      <SEOHead
        title={data.title}
        description={data.description}
        canonical={data.canonical}
      />
      <div className="min-h-screen bg-bone">
        <Navbar />

        {/* Hero */}
        <section className="bg-bone border-b border-rule">
          <div className="container-x pt-16 pb-16 md:pt-24 md:pb-24">
            <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="col-span-12 md:col-span-7">
                <p className="eyebrow mb-6">{data.eyebrow}</p>
                <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] text-creekoxley">
                  {data.headline}
                </h1>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-muted-ink">
                  {data.heroIntro}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link to="/contact" className="btn-primary">{data.ctaButton}</Link>
                  <a href="tel:+254110463062" className="inline-flex items-center gap-2 text-[14px] font-medium text-creekoxley">
                    <Phone className="h-4 w-4" /> +254 110 463 062
                  </a>
                </div>
                <p className="mt-6 text-[13px] text-silver">
                  No obligation. A senior consultant reviews every enquiry personally.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="border border-rule">
                  <img
                    src={data.heroImage}
                    alt={data.heroImageAlt}
                    className="w-full h-[280px] md:h-[380px] object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-white border-b border-rule">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-8 md:gap-16">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-6">01 - The Problem</p>
                <h2 className="font-display text-[34px] md:text-[44px] leading-[1.05] text-creekoxley">
                  {data.problemTitle}
                </h2>
                <p className="mt-6 text-[17px] leading-[1.75] text-muted-ink">
                  {data.problemIntro}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <ul className="space-y-0 border-t border-rule">
                  {data.problems.map((p, i) => (
                    <li key={i} className="flex gap-4 border-b border-rule py-5">
                      <span className="text-[14px] font-medium text-lavender pt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] text-body-ink leading-[1.7]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Creek Oxley helps */}
        <section className="bg-bone border-b border-rule">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-8 mb-14">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-6">02 - How We Help</p>
                <h2 className="font-display text-[34px] md:text-[44px] leading-[1.05] text-creekoxley">
                  {data.helpTitle}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <p className="text-[17px] leading-[1.75] text-muted-ink">
                  {data.helpIntro}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
              {data.services.map((s, i) => (
                <div key={i} className="bg-white p-8">
                  <h3 className="font-display text-[22px] text-creekoxley mb-3">{s.title}</h3>
                  <p className="text-[15px] text-muted-ink leading-[1.7]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-ink text-white">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-8 md:gap-16">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-6">03 - What Changes</p>
                <h2 className="font-display text-[34px] md:text-[44px] leading-[1.05] text-white">
                  {data.benefitsTitle}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <ul className="space-y-6">
                  {data.benefits.map((b, i) => (
                    <li key={i} className="flex gap-4">
                      <Check className="h-5 w-5 text-lavender shrink-0 mt-1" />
                      <span className="text-[16px] text-white/85 leading-[1.7]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="bg-white border-b border-rule">
          <div className="container-x py-14">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-8">
                <p className="font-display italic text-[22px] md:text-[26px] leading-[1.35] text-creekoxley">
                  "Creek Oxley manages and advises hospitality assets across Kenya, from coastal
                  villas in Watamu to city hotels in Nairobi and lodges in northern Kenya. We work
                  inside the operation, not just on paper."
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <Link to="/dmc" className="inline-flex items-center gap-2 text-[14px] font-medium text-creekoxley">
                  See our hospitality work <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Objections */}
        <section className="bg-bone border-b border-rule">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-8 md:gap-16">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow mb-6">04 - Fair Questions</p>
                <h2 className="font-display text-[34px] md:text-[44px] leading-[1.05] text-creekoxley">
                  {data.objectionsTitle}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <div className="border-t border-rule">
                  {data.objections.map((o, i) => (
                    <div key={i} className="border-b border-rule py-6">
                      <h3 className="font-display text-[20px] text-creekoxley mb-2">{o.q}</h3>
                      <p className="text-[15px] text-muted-ink leading-[1.7]">{o.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-creekoxley">
          <div className="container-x section-pad text-center">
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] text-white max-w-3xl mx-auto">
              {data.ctaTitle}
            </h2>
            <p className="mt-6 text-[17px] text-white/80 max-w-2xl mx-auto leading-[1.75]">
              {data.ctaText}
            </p>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-sans font-medium bg-white text-creekoxley px-8 py-[14px] text-[14px] tracking-[0.02em] transition-colors hover:bg-bone"
              >
                {data.ctaButton}
              </Link>
              <a
                href="mailto:info@creekoxley.com"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white"
              >
                <Mail className="h-4 w-4" /> info@creekoxley.com
              </a>
            </div>
            <p className="mt-8 text-[13px] text-white/60">
              Response within one business day. Confidentiality guaranteed.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HotelLandingLayout;
