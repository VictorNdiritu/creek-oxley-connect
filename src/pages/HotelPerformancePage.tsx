import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  BarChart2, CheckCircle, AlertTriangle, TrendingDown,
  ChevronDown, ArrowRight, Phone, Mail
} from "lucide-react";

const faqData = [
  {
    q: "Do you only work with large hotels?",
    a: "No. We work with properties of all sizes - from boutique lodges and guesthouses to mid-scale hotels and safari camps. Our approach is tailored to the scale and context of your property."
  },
  {
    q: "Is this a generic benchmarking report or a real assessment?",
    a: "It's a real assessment. We look at your specific numbers, your market, your team, and your operations - not a template. Every finding is specific to your property."
  },
  {
    q: "What does the assessment cost?",
    a: "We discuss scope and fees after an initial conversation. There's no cost to speak with us and understand whether an assessment is right for you."
  },
  {
    q: "How long does a property assessment take?",
    a: "Typically one to three weeks depending on the depth of review. We can also do a rapid diagnostic if you need faster insight."
  },
  {
    q: "Will you tell us things we don't want to hear?",
    a: "Yes - respectfully, but honestly. Property owners who contact us are already aware something isn't working. Our job is to identify it precisely and give you a clear path forward."
  },
];

const HotelPerformancePage = () => {
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
        title="Is Your Hotel Performing? | Property Performance Assessment - Creek Oxley"
        description="Find out what is holding your hotel, lodge or resort back. Creek Oxley delivers honest, owner-focused property performance assessments for Kenyan hospitality operators."
        canonical="https://creekoxley.com/hotel-performance"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          <div className="relative container-x py-24 md:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow !text-lavender mb-5">Hotel & Lodge Performance Assessment</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                Is Your Hotel<br />
                <span style={{ color: "#7B5EA7" }}>Actually Performing?</span>
              </h1>
              <p className="text-[18px] text-silver leading-relaxed mb-10 max-w-2xl">
                Most hotel owners sense something is off - but can't pinpoint what. Low occupancy. Thin margins. Staff problems. High costs. If your property isn't living up to its potential, the first step is understanding why.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-[15px] px-8 py-4">
                  Request a Property Assessment →
                </Link>
                <a href="tel:+254110463062" className="btn-secondary text-[15px] px-8 py-4 !border-silver !text-silver hover:!bg-white hover:!text-ink">
                  Call +254 110 463 062
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM STRIP ── */}
        <section className="bg-bone border-y border-rule py-14">
          <div className="container-x">
            <p className="font-display italic text-[22px] md:text-[26px] text-body-ink text-center max-w-3xl mx-auto leading-snug">
              "We're open, we're running - but the numbers just aren't there." If this sounds familiar, you're not alone. And there are usually clear, fixable reasons.
            </p>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-4">The owner's problem</p>
                <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-6">
                  When Your Property<br />Isn't Reaching Its Potential
                </h2>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  A hotel that isn't performing is rarely one big failure. It's usually a cluster of smaller problems that compound over time - a pricing strategy that's slightly off, a distribution channel that isn't working, a department that's overstaffed, a guest experience that falls short of what your market expects.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Owners often fix the symptoms without addressing the root causes. They hire more staff, spend more on marketing, or drop their rates - and nothing changes sustainably. The property stays stuck.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed">
                  Creek Oxley works with hotel and lodge owners to find what's actually holding the property back - and then build a clear, practical plan to address it.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: TrendingDown, text: "Occupancy is below what the market should support" },
                  { icon: AlertTriangle, text: "Revenue isn't growing despite being open year-round" },
                  { icon: AlertTriangle, text: "Costs keep climbing faster than income" },
                  { icon: AlertTriangle, text: "You've changed managers but problems persist" },
                  { icon: AlertTriangle, text: "Reviews are mixed and you're not sure why" },
                  { icon: AlertTriangle, text: "You're busy in peak season but struggling otherwise" },
                  { icon: AlertTriangle, text: "You don't have reliable data to make decisions with" },
                  { icon: AlertTriangle, text: "Your investment isn't generating the return you expected" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-bone border border-rule">
                    <item.icon className="h-5 w-5 text-creekoxley flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-body-ink">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE HELP ── */}
        <section className="section-pad bg-bone">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-4">Our approach</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                A Property Assessment That Actually Tells You Something
              </h2>
              <p className="text-muted-ink text-[16px]">
                We don't produce generic reports. We look at your property specifically - your numbers, your market, your team, your operations - and tell you exactly what we find.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Financial & Revenue Review",
                  desc: "We examine your occupancy, ADR, RevPAR, cost structure, departmental margins and overall financial performance against your market benchmarks."
                },
                {
                  step: "02",
                  title: "Operations & Guest Experience",
                  desc: "We assess your operational model, service delivery, staffing structure, SOPs, technology stack and how the property is actually running day-to-day."
                },
                {
                  step: "03",
                  title: "Market Position & Distribution",
                  desc: "We evaluate your positioning, pricing strategy, channel mix, online presence, sales approach and how visible and competitive you are in your segment."
                },
                {
                  step: "04",
                  title: "Management & Leadership",
                  desc: "We look at how the property is being managed - team structure, decision-making, reporting and whether leadership has the tools and clarity to perform."
                },
                {
                  step: "05",
                  title: "Findings & Priorities",
                  desc: "We present a clear, frank summary of what we found, what's causing underperformance, and what should be addressed first to have the most impact."
                },
                {
                  step: "06",
                  title: "Improvement Roadmap",
                  desc: "You receive a practical action plan - not a 200-page document nobody reads - with clear priorities, timelines and expected outcomes for each initiative."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-rule p-7 hover:border-lavender transition-colors">
                  <div className="font-display text-4xl text-rule mb-4">{item.step}</div>
                  <h3 className="font-display text-xl text-creekoxley mb-3">{item.title}</h3>
                  <p className="text-[14px] text-muted-ink leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                Performance Consulting Services
              </h2>
              <p className="text-muted-ink text-[16px]">
                Depending on what the assessment reveals, Creek Oxley can support you across the areas most critical to your property's improvement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Hotel & Lodge Performance Assessment", "A structured diagnostic review of your entire property operation and commercial performance."],
                ["Revenue Strategy & Optimisation", "Pricing, distribution, channel management and revenue improvement planning."],
                ["Operations Review & Improvement", "Front of house, back of house, F&B, housekeeping and maintenance operational consulting."],
                ["General Management & Leadership Advisory", "Supporting ownership with management decisions, team structure and operational oversight."],
                ["Financial Performance Analysis", "Deep-dive into your P&L, cost base, departmental performance and owner returns."],
                ["Strategic Planning & Repositioning", "Helping you define or redefine the property's direction, market position and growth path."],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-4 p-5 border border-rule hover:border-creekoxley transition-colors group">
                  <CheckCircle className="h-5 w-5 text-lavender flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold text-[15px] text-body-ink mb-1 group-hover:text-creekoxley transition-colors">{title}</div>
                    <div className="text-[13px] text-muted-ink leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROOF / EXPERIENCE ── */}
        <section className="section-pad bg-ink text-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow !text-lavender mb-4">Why Creek Oxley</p>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                  Experience Built in the Industry, Not a Classroom
                </h2>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  Creek Oxley's hospitality practice is grounded in real operational experience across Kenya's hotel and lodge sector. We've worked across mid-scale hotels, boutique lodges, safari camps, and urban properties - on the ground, not from behind a desk.
                </p>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  We understand how Kenyan hospitality businesses actually run - the staffing challenges, the seasonal dynamics, the OTA dependence, the cost pressures, and the owner expectations that don't always align with what management is delivering.
                </p>
                <p className="text-silver text-[16px] leading-relaxed">
                  When we assess a property, we know what good looks like - and we know what common problems look like before we've even finished the review.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "15+", label: "Years hospitality consulting experience" },
                  { num: "Kenya", label: "Deep local market knowledge" },
                  { num: "Full", label: "Operational & commercial scope" },
                  { num: "Owner", label: "Perspective, not management-first" },
                ].map((stat, i) => (
                  <div key={i} className="border border-silver/20 p-6">
                    <div className="font-display text-4xl text-white mb-2">{stat.num}</div>
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
              Common Questions from Property Owners
            </h2>
            <div className="space-y-2">
              {faqData.map((item, i) => (
                <div key={i} className="border border-rule bg-white">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    id={`faq-hp-${i}`}
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
            <p className="eyebrow !text-white/60 mb-4">Take the first step</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Request a Property Assessment
            </h2>
            <p className="text-white/80 text-[16px] leading-relaxed mb-10">
              If your hotel, lodge or resort isn't performing the way it should, talk to Creek Oxley. The conversation costs nothing and may be the most useful hour you spend this year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-creekoxley font-sans font-semibold px-8 py-4 text-[15px] hover:bg-bone transition-colors">
                <Mail className="h-4 w-4" /> Request an Assessment
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

export default HotelPerformancePage;
