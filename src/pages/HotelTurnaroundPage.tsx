import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  TrendingUp, DollarSign, BarChart2, RefreshCw, CheckCircle,
  ChevronDown, Phone, Mail, Target, Shield, Compass, AlertCircle
} from "lucide-react";

const faqData = [
  {
    q: "My property has been struggling for years. Is a turnaround realistic?",
    a: "Often yes - but it depends on the root causes. Some turnaround challenges are commercial (fixable through revenue and distribution work), some are operational (fixable through management improvement), and some require repositioning or structural change. We tell you honestly which you're facing."
  },
  {
    q: "Will you guarantee a turnaround?",
    a: "No. No honest consultant will guarantee outcomes in a complex operating environment. What we will do is identify the problems clearly, recommend what we believe will work, and support implementation with commitment and accountability."
  },
  {
    q: "Should I sell the property or try to fix it?",
    a: "That's a legitimate question that we can help you think through. Sometimes a turnaround is the better financial decision. Sometimes selling is. We help you understand what's realistic - without pushing you toward an outcome that benefits us more than you."
  },
  {
    q: "How long does a hotel turnaround take?",
    a: "It depends on depth of the problems and the pace of implementation. Some improvements have impact within 90 days. A full turnaround typically takes 12–24 months. We set realistic timelines from the start."
  },
  {
    q: "We've already tried a consultant. What's different about Creek Oxley?",
    a: "Many consultants produce reports and leave. We stay involved through implementation. We also come with real hospitality operating experience - not just generic management consulting applied to a hotel."
  },
];

const HotelTurnaroundPage = () => {
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
        title="Is Your Investment Paying Off? | Hotel Turnaround Consulting - Creek Oxley"
        description="Creek Oxley helps hotel and lodge owners in Kenya who need a turnaround - improving property performance, owner returns and the long-term sustainability of their investment."
        canonical="https://creekoxley.com/hotel-turnaround"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          <div className="relative container-x py-24 md:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow !text-lavender mb-5">Hotel Investment & Turnaround Consulting</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                Is Your Investment<br />
                <span style={{ color: "#7B5EA7" }}>Paying Off?</span>
              </h1>
              <p className="text-[18px] text-silver leading-relaxed mb-10 max-w-2xl">
                Hotel and lodge owners invest significant capital in their properties. If your property isn't generating the returns you expected - or has been underperforming for an extended period - Creek Oxley can help you understand why and what to do about it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-[15px] px-8 py-4">
                  Request a Turnaround Assessment →
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
              "A hotel that isn't returning its investment isn't just an income problem - it's a capital problem. The sooner the root causes are identified, the more options the owner has."
            </p>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">The investment problem</p>
                <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-6">
                  When Your Hotel Isn't Returning<br />What It Should
                </h2>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Hospitality investment is one of the more complex and capital-intensive categories in Kenyan real estate. Properties cost significant money to build, fit out and operate - and the expectations of owners are understandably high.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Yet many hotel and lodge owners find themselves years into operation still not achieving the returns they modelled. The property is open, it's operating - but it's not generating the revenue, occupancy or profitability that the investment demands.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Sometimes this is a market problem. More often it's a combination of commercial, operational and management issues that have compounded without being addressed. Creek Oxley helps you separate what's genuinely market-driven from what's fixable - and builds a clear plan to address the fixable parts.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed">
                  We work with owners who need honest answers, not reassurance. If a turnaround is realistic, we tell you what it requires. If the situation calls for a different decision, we tell you that too.
                </p>
              </div>
              <div>
                <div className="mb-5">
                  <p className="font-sans font-semibold text-[13px] uppercase tracking-wider text-muted-ink mb-4">Signs your property needs a turnaround</p>
                </div>
                {[
                  { icon: AlertCircle, text: "Operating at a loss or near-breakeven for more than a year" },
                  { icon: AlertCircle, text: "Revenue hasn't grown in two or more years" },
                  { icon: AlertCircle, text: "Loan repayments are being funded by the owner, not the property" },
                  { icon: AlertCircle, text: "Multiple GMs have come and gone without improvement" },
                  { icon: AlertCircle, text: "The owner is considering selling but wants to know if it's worth fixing first" },
                  { icon: AlertCircle, text: "Guest satisfaction scores are low and declining" },
                  { icon: AlertCircle, text: "The property's reputation is damaged and needs rebuilding" },
                  { icon: AlertCircle, text: "Costs are consistently exceeding revenue" },
                  { icon: AlertCircle, text: "Equity or value of the property is being eroded, not built" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-rule last:border-0">
                    <item.icon className="h-4 w-4 text-creekoxley flex-shrink-0 mt-1" />
                    <span className="text-[14px] text-body-ink">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TURNAROUND PROCESS ── */}
        <section className="section-pad bg-bone">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-4">How we work</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                The Creek Oxley Turnaround Process
              </h2>
              <p className="text-muted-ink text-[16px]">
                A turnaround is not a quick fix. It's a structured process that starts with understanding the true state of the property and builds toward sustained improvement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  phase: "Phase 1",
                  title: "Comprehensive Property Diagnostic",
                  desc: "We conduct a full assessment of the property - financial performance, operations, management, commercial strategy, market position and competitive landscape. This gives us the complete picture of what's driving underperformance.",
                  detail: "4–6 weeks"
                },
                {
                  phase: "Phase 2",
                  title: "Root Cause Analysis & Prioritisation",
                  desc: "We identify the specific, root causes of underperformance - not just the symptoms. We distinguish between market factors (harder to control) and internal factors (addressable), and prioritise by impact and feasibility.",
                  detail: "Included in Phase 1"
                },
                {
                  phase: "Phase 3",
                  title: "Turnaround Strategy & Roadmap",
                  desc: "We develop a clear, realistic turnaround strategy with a phased implementation roadmap - including what to do first, what to do next, resource requirements, and realistic timeframes for impact.",
                  detail: "2–3 weeks"
                },
                {
                  phase: "Phase 4",
                  title: "Implementation Support",
                  desc: "We support execution of the turnaround plan - advising management, tracking progress, adjusting the approach as needed and keeping the owner informed with clear, honest reporting.",
                  detail: "Ongoing engagement"
                },
                {
                  phase: "Phase 5",
                  title: "Performance Monitoring",
                  desc: "We establish the KPIs and reporting systems to track turnaround progress - occupancy, revenue, cost ratios, guest satisfaction - and review performance regularly against the plan.",
                  detail: "Monthly or quarterly"
                },
                {
                  phase: "Phase 6",
                  title: "Stabilisation & Exit",
                  desc: "Once the property reaches a stable, improving trajectory, we transition from active turnaround support to periodic advisory - leaving the property with the systems, team and strategy to continue improving independently.",
                  detail: "12–24 months"
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-rule p-7 hover:border-creekoxley transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="eyebrow">{item.phase}</span>
                    <span className="font-sans text-[11px] text-muted-ink border border-rule px-2 py-1">{item.detail}</span>
                  </div>
                  <h3 className="font-display text-xl text-creekoxley mb-3">{item.title}</h3>
                  <p className="text-[13px] text-muted-ink leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">Turnaround services</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                What Creek Oxley Brings to a Turnaround
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: BarChart2, title: "Financial Performance Recovery", desc: "Revenue improvement, cost restructuring, departmental margin recovery and return-to-profitability planning." },
                { icon: Target, title: "Commercial Strategy Rebuild", desc: "Pricing, distribution, sales and marketing strategy rebuilt from the ground up based on what the property and market actually support." },
                { icon: RefreshCw, title: "Operational Restructuring", desc: "Management structure, team, processes and standards reset to deliver consistent, cost-effective service." },
                { icon: Shield, title: "Reputation Recovery", desc: "Guest experience redesign, review management and re-positioning strategy to rebuild the property's standing in its market." },
                { icon: Compass, title: "Strategic Repositioning", desc: "Where needed, helping owners reconsider what the property should be - market segment, concept, brand, pricing tier - to unlock a viable path forward." },
                { icon: DollarSign, title: "Owner Return Optimisation", desc: "Working directly to the owner's financial objectives - not just management metrics - to ensure the turnaround is measured against what actually matters to the investor." },
              ].map((item, i) => (
                <div key={i} className="bg-bone border border-rule p-7 hover:border-lavender transition-colors">
                  <div className="h-10 w-10 bg-white flex items-center justify-center mb-5 border border-rule">
                    <item.icon className="h-5 w-5 text-creekoxley" />
                  </div>
                  <h3 className="font-display text-xl text-creekoxley mb-3">{item.title}</h3>
                  <p className="text-[13px] text-muted-ink leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DARK PROOF ── */}
        <section className="section-pad bg-ink text-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow !text-lavender mb-4">Our position</p>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                  Honest Advisors to Owners in Difficult Situations
                </h2>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  Creek Oxley is not in the business of telling owners what they want to hear. When a property is underperforming, owners need clear-eyed analysis and practical advice - not optimistic projections or generic improvement plans.
                </p>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  We work with owners who have often already tried to fix things themselves, or who have been through one or more management changes that didn't solve the problem. We come in as independent advisors - with no stake in the existing management or team - and tell you what we find.
                </p>
                <p className="text-silver text-[16px] leading-relaxed mb-8">
                  That honesty is what makes a turnaround possible. You can't fix what you won't face.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-ink font-sans font-semibold px-8 py-4 text-[14px] hover:bg-bone transition-colors">
                  Talk to Creek Oxley <TrendingUp className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Independent Assessment", desc: "We have no relationship with your current management or staff. Our analysis is objective and owner-focused." },
                  { title: "Operational Experience", desc: "We've managed hotels and lodges. We understand what operations look like from the inside - not just on paper." },
                  { title: "Kenya Market Knowledge", desc: "We understand the specific market conditions, demand patterns and competitive dynamics facing Kenyan hospitality properties." },
                  { title: "Commercial & Financial Depth", desc: "We assess both the P&L and the commercial strategy - not just operations in isolation from financial performance." },
                ].map((item, i) => (
                  <div key={i} className="border border-silver/20 p-5 flex gap-4">
                    <CheckCircle className="h-5 w-5 text-lavender flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-sans font-semibold text-[14px] text-white mb-1">{item.title}</div>
                      <div className="text-[13px] text-silver leading-relaxed">{item.desc}</div>
                    </div>
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
              Questions About Hotel Turnaround
            </h2>
            <div className="space-y-2">
              {faqData.map((item, i) => (
                <div key={i} className="border border-rule bg-white">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    id={`faq-ta-${i}`}
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
              Talk to Creek Oxley About Your Property
            </h2>
            <p className="text-white/80 text-[16px] leading-relaxed mb-10">
              If your hotel or lodge investment isn't generating what it should, the first step is an honest conversation. Creek Oxley can help you understand what's happening, what's fixable, and what a realistic path forward looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-creekoxley font-sans font-semibold px-8 py-4 text-[15px] hover:bg-bone transition-colors">
                <Mail className="h-4 w-4" /> Request a Turnaround Assessment
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

export default HotelTurnaroundPage;
