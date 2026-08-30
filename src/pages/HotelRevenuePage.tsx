import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  DollarSign, TrendingUp, BarChart2, Globe, CheckCircle,
  ChevronDown, Phone, Mail, Layers, Tag, Wifi, ArrowRight
} from "lucide-react";

const faqData = [
  {
    q: "Will you just tell us to raise our rates?",
    a: "No. Rate is only one revenue lever. We look at rate strategy in context of your competitive set, demand patterns, channel mix and cost of sale - and recommend what's actually right for your property."
  },
  {
    q: "We're already on Booking.com and Airbnb. What else is there?",
    a: "A lot. Most properties are on OTAs but badly optimised - wrong rate structure, thin content, no rate parity management, no direct booking strategy, and over-reliance on one or two channels. We work through all of it."
  },
  {
    q: "Our occupancy is okay - is revenue consulting still relevant?",
    a: "Absolutely. High occupancy with low rates, high OTA commissions, or weak ancillary revenue is a revenue problem. We look at yield, not just beds filled."
  },
  {
    q: "How long before we see results from a revenue engagement?",
    a: "Some changes - rate corrections, distribution fixes, OTA optimisation - can have an impact within weeks. Structural improvements take longer. We set realistic expectations from the start."
  },
  {
    q: "Do you work on a retainer or project basis?",
    a: "Both. Shorter diagnostic engagements are project-based. Ongoing revenue optimisation support is typically structured as a retainer. We discuss what fits your situation."
  },
];

const HotelRevenuePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <SEOHead
        title="Could Your Hotel Earn More? | Hotel Revenue Improvement - Creek Oxley"
        description="Creek Oxley helps hotel and lodge owners in Kenya unlock missing revenue through pricing strategy, distribution optimisation, and commercial performance consulting."
        canonical="https://creekoxley.com/hotel-revenue"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          <div className="relative container-x py-24 md:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow !text-lavender mb-5">Hotel Revenue Consulting</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                Could Your Hotel<br />
                <span style={{ color: "#7B5EA7" }}>Be Earning More?</span>
              </h1>
              <p className="text-[18px] text-silver leading-relaxed mb-10 max-w-2xl">
                Most properties leave significant revenue on the table - not through bad luck, but through fixable gaps in pricing, distribution, sales strategy and revenue management. Creek Oxley helps owners find and capture that revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-[15px] px-8 py-4">
                  Request a Revenue Review →
                </Link>
                <a href="tel:+254110463062" className="btn-secondary text-[15px] px-8 py-4 !border-silver !text-silver hover:!bg-white hover:!text-ink">
                  Call +254 110 463 062
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE STRIP ── */}
        <section className="bg-bone border-y border-rule py-14">
          <div className="container-x">
            <p className="font-display italic text-[22px] md:text-[26px] text-body-ink text-center max-w-3xl mx-auto leading-snug">
              "A full hotel at the wrong rate is worse than a half-full hotel at the right one. Revenue optimisation isn't about occupancy - it's about yield."
            </p>
          </div>
        </section>

        {/* ── WHERE REVENUE IS LOST ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">The revenue gap</p>
                <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-6">
                  Where Hospitality Revenue<br />Gets Left Behind
                </h2>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Revenue problems are rarely obvious. A property can be consistently occupied and still be losing money relative to its potential - because of rate strategy that doesn't match demand, OTA dependency that eats into margins, or sales channels that aren't working hard enough.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  We work with property owners who know their revenue could be higher but don't know exactly why it isn't - or who have tried fixes that haven't worked. Our job is to find the actual gap between your current performance and what the property should realistically be generating.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed">
                  This isn't about making promises. It's about looking at your numbers, your market, and your commercial setup - and identifying what's fixable and what the realistic impact of fixing it is.
                </p>
              </div>
              <div>
                <div className="mb-4">
                  <p className="font-sans font-semibold text-[13px] uppercase tracking-wider text-muted-ink mb-4">Common revenue gaps we identify</p>
                </div>
                {[
                  { icon: Tag, title: "Pricing set by gut feel, not data", desc: "Rates not aligned to demand patterns, competitive positioning or season - leading to unsold inventory or under-priced nights." },
                  { icon: Globe, title: "OTA over-reliance with no direct channel strategy", desc: "High commissions, limited brand loyalty and no tools to drive guests to book direct." },
                  { icon: Layers, title: "Flat pricing with no yield management", desc: "One-size-fits-all rates instead of dynamic pricing that responds to demand, lead time and channel." },
                  { icon: BarChart2, title: "Weak corporate and group sales", desc: "Dependence on walk-ins and OTAs while corporate accounts, travel agents and group bookings remain untapped." },
                  { icon: Wifi, title: "Ancillary revenue untouched", desc: "Food & beverage, activities, spa, airport transfers and packages that add to guest spend - and owner revenue - are left on the table." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-rule mb-3 hover:border-lavender transition-colors">
                    <item.icon className="h-5 w-5 text-lavender flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-sans font-semibold text-[14px] text-body-ink mb-1">{item.title}</div>
                      <div className="text-[13px] text-muted-ink leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section-pad bg-bone">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-4">Revenue services</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                How We Help You Improve Revenue
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart2,
                  title: "Revenue Performance Review",
                  desc: "A structured analysis of your occupancy, ADR, RevPAR, TRevPAR and channel contribution - benchmarked against what your market should support."
                },
                {
                  icon: Tag,
                  title: "Pricing Strategy & Rate Architecture",
                  desc: "Building a rate structure that reflects demand, seasonality, lead time, channel and room type - and implementing it correctly across your distribution."
                },
                {
                  icon: Globe,
                  title: "Distribution Channel Optimisation",
                  desc: "Reviewing and improving your OTA listings, channel manager setup, rate parity and mix of channels to reduce commissions and improve visibility."
                },
                {
                  icon: TrendingUp,
                  title: "Direct Booking Growth",
                  desc: "Developing your direct channel - website, booking engine, loyalty programme and CRM - to reduce dependency on third parties and improve margins."
                },
                {
                  icon: DollarSign,
                  title: "Sales Strategy & Corporate Accounts",
                  desc: "Building or improving your corporate sales, travel agent, group and MICE strategy to diversify and grow revenue from higher-margin sources."
                },
                {
                  icon: Layers,
                  title: "Ancillary Revenue Development",
                  desc: "Identifying and developing F&B, packages, experiences and add-on services that increase total guest spend and property revenue per available room."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-rule p-7 hover:border-creekoxley transition-colors group">
                  <div className="h-10 w-10 bg-creekoxley/10 flex items-center justify-center mb-5">
                    <item.icon className="h-5 w-5 text-creekoxley" />
                  </div>
                  <h3 className="font-display text-xl text-creekoxley mb-3">{item.title}</h3>
                  <p className="text-[13px] text-muted-ink leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE STRIP ── */}
        <section className="section-pad bg-ink text-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow !text-lavender mb-4">Our experience</p>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                  Revenue Expertise Built Across Kenya's Hospitality Sector
                </h2>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  Creek Oxley brings hands-on experience across Kenya's hotel, lodge, resort and safari camp landscape. We understand the local market dynamics - the sources of business, the seasonal demand curves, the OTA environment and the competitive realities facing owners today.
                </p>
                <p className="text-silver text-[16px] leading-relaxed mb-8">
                  We've worked on revenue challenges at properties across Nairobi, the Coast, the Rift Valley and Kenya's safari circuits. That context matters when you're advising on pricing and distribution - it's not the same as working in London or Dubai.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-ink font-sans font-semibold px-8 py-4 text-[14px] hover:bg-bone transition-colors">
                  Talk to Us About Your Revenue <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "ADR", label: "Average daily rate strategy & optimisation" },
                  { num: "OTA", label: "Distribution channel management & cost reduction" },
                  { num: "RevPAR", label: "Revenue per available room improvement" },
                  { num: "F&B", label: "Food, beverage & ancillary revenue development" },
                ].map((stat, i) => (
                  <div key={i} className="border border-silver/20 p-6">
                    <div className="font-display text-3xl text-lavender mb-2">{stat.num}</div>
                    <div className="text-[13px] text-silver leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-pad bg-bone">
          <div className="container-x max-w-3xl">
            <p className="eyebrow mb-4 text-center">Owner questions</p>
            <h2 className="font-display text-4xl md:text-5xl text-creekoxley text-center mb-12">
              Questions About Revenue Consulting
            </h2>
            <div className="space-y-2">
              {faqData.map((item, i) => (
                <div key={i} className="border border-rule bg-white">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    id={`faq-rev-${i}`}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-sans font-semibold text-[15px] text-body-ink">{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-lavender flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-[14px] text-muted-ink leading-relaxed border-t border-rule pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad bg-creekoxley text-white">
          <div className="container-x text-center max-w-2xl mx-auto">
            <p className="eyebrow !text-white/60 mb-4">Start the conversation</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Find Out What Your Property Should Be Earning
            </h2>
            <p className="text-white/80 text-[16px] leading-relaxed mb-10">
              Talk to Creek Oxley about a revenue review for your hotel, lodge or resort. We'll look at what's happening, explain what we find, and tell you honestly what can be improved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-creekoxley font-sans font-semibold px-8 py-4 text-[15px] hover:bg-bone transition-colors">
                <Mail className="h-4 w-4" /> Request a Revenue Review
              </Link>
              <a href="tel:+254110463062" className="inline-flex items-center justify-center gap-2 border border-white/60 text-white font-sans font-medium px-8 py-4 text-[15px] hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4" /> +254 110 463 062
              </a>
            </div>
            <p className="text-white/50 text-[12px] mt-6">Nairobi, Kenya · info@creekoxley.com</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HotelRevenuePage;
