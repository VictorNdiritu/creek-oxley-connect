import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Users, Globe, TrendingUp, CheckCircle, ChevronDown,
  Phone, Mail, Search, MapPin, Star, Share2
} from "lucide-react";

const faqData = [
  {
    q: "We've tried marketing before and it didn't work. Why would this be different?",
    a: "Because marketing without the right positioning, pricing or distribution infrastructure rarely works. We look at the full demand generation picture - not just ads or social media - and address the gaps that make marketing ineffective."
  },
  {
    q: "Can you help us reduce our dependence on OTAs?",
    a: "Yes. That's one of the most common and valuable improvements we help owners make. It involves building a direct booking capability - website, booking engine, CRM - alongside a strategy to drive guests to use it."
  },
  {
    q: "Our property is in a remote location. Can you still help?",
    a: "Absolutely. Remote and niche properties often have the most opportunity - because their market segments are specific and their distribution needs to be deliberate. Safari lodges, bush camps and coastal retreats all have effective strategies available to them."
  },
  {
    q: "What if our problem is seasonality?",
    a: "Seasonality is real but it's rarely the full story. We look at how you're managing shoulder and low seasons - including the segments you're targeting, the rates you're offering and the activity you're generating during those periods."
  },
  {
    q: "How is this different from hiring a digital marketing agency?",
    a: "A marketing agency will run campaigns. We look at why your property isn't filling first - which might be positioning, pricing, product, distribution or visibility - and address the foundations before amplifying spend."
  },
];

const HotelOccupancyPage = () => {
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
        title="Are Your Rooms Staying Empty? | Hotel Occupancy Consulting - Creek Oxley"
        description="Creek Oxley helps hotel and lodge owners in Kenya increase occupancy through demand generation, distribution strategy, positioning and marketing that actually works."
        canonical="https://creekoxley.com/hotel-occupancy"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          <div className="relative container-x py-24 md:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow !text-lavender mb-5">Hotel Occupancy Consulting</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                Are Your Rooms<br />
                <span style={{ color: "#7B5EA7" }}>Staying Empty?</span>
              </h1>
              <p className="text-[18px] text-silver leading-relaxed mb-10 max-w-2xl">
                Low occupancy is not inevitable. In most cases it's a symptom of specific, addressable gaps - in positioning, pricing, visibility, distribution or demand generation. Creek Oxley helps owners understand and fix what's keeping guests away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-[15px] px-8 py-4">
                  Request an Occupancy Review →
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
              "Empty rooms are the most expensive thing in hospitality. Every night they're unsold is revenue that can never be recovered."
            </p>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">Why rooms stay empty</p>
                <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-6">
                  The Real Reasons Your Hotel<br />Isn't Filling Up
                </h2>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Property owners often assume low occupancy is a marketing problem. Sometimes it is. But more often it's a combination of things - the property isn't positioned clearly in its market, the rates aren't right, the distribution is incomplete, or the property itself isn't standing out in a competitive landscape.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Throwing money at advertising won't fix a positioning problem. Adding more OTA channels won't help if your profile is weak. Creek Oxley helps you understand what's actually driving low occupancy - and addresses it at the root.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed">
                  We work with owners of hotels, lodges, boutique guesthouses, safari camps and resorts to understand their demand problem specifically - and build a strategy that addresses it.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Search, title: "Poor online visibility", desc: "Guests can't find you or can't find enough to feel confident booking." },
                  { icon: Star, title: "Weak OTA profiles and listings", desc: "Poor photos, incomplete content and few reviews mean guests choose competitors." },
                  { icon: MapPin, title: "Unclear market positioning", desc: "Guests don't know why to choose you over alternatives - your offer isn't differentiated." },
                  { icon: Share2, title: "Insufficient distribution", desc: "Not enough relevant channels actively selling your rooms to the right travellers." },
                  { icon: Users, title: "Wrong target audience", desc: "Marketing to the wrong segments while missing the travellers who are actually looking for what you offer." },
                  { icon: Globe, title: "No direct booking capability", desc: "No website, weak booking engine, and no strategy to build a guest list and generate repeat visits." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-rule hover:border-lavender transition-colors">
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

        {/* ── HOW WE HELP ── */}
        <section className="section-pad bg-bone">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-4">Our approach</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                How We Help You Fill Your Rooms
              </h2>
              <p className="text-muted-ink text-[16px]">
                We take a structured approach to demand generation - starting with understanding why the property isn't filling, then addressing the specific gaps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Demand Diagnostic",
                  desc: "We start by understanding your current demand - where bookings come from, what channels you're using, who's booking, and how well each source is performing."
                },
                {
                  title: "Positioning Review",
                  desc: "We assess how the property is positioned in its market - and whether that positioning is clear, compelling and accurate to what you actually offer guests."
                },
                {
                  title: "Distribution Audit",
                  desc: "We review every channel selling your property - OTAs, GDS, direct, agents - and assess whether they're set up correctly, priced right, and generating meaningful volume."
                },
                {
                  title: "Online Presence Assessment",
                  desc: "We look at your OTA profiles, website, Google presence, review scores and social channels - and assess the quality, completeness and conversion potential of each."
                },
                {
                  title: "Market Segment Strategy",
                  desc: "We help you identify and prioritise the travel segments most likely to fill your property - and build a plan to reach and convert them effectively."
                },
                {
                  title: "Demand Generation Plan",
                  desc: "We develop a practical, prioritised plan for improving occupancy - addressing distribution, visibility, direct bookings, and any product or positioning changes needed."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-rule p-7 flex gap-5 hover:border-creekoxley transition-colors">
                  <CheckCircle className="h-5 w-5 text-lavender flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-creekoxley mb-2">{item.title}</h3>
                    <p className="text-[14px] text-muted-ink leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES LIST ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">Occupancy services</p>
                <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-6">
                  Specific Services That Address Occupancy
                </h2>
                <p className="text-muted-ink text-[16px] leading-relaxed">
                  Depending on where your gaps are, Creek Oxley can engage across one or several of these service areas to help you generate more consistent, higher-quality demand.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Market positioning and competitive differentiation strategy",
                  "OTA profile optimisation (Booking.com, Expedia, Airbnb etc.)",
                  "Distribution channel strategy and channel mix review",
                  "Direct booking and hotel website improvement",
                  "Google Hotel Ads setup and management advisory",
                  "Travel agent, DMC and wholesaler contracting strategy",
                  "MICE and corporate sales development",
                  "Content, photography and listing quality improvement",
                  "Review management and reputation building strategy",
                  "Seasonal occupancy and low-season demand planning",
                ].map((service, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-rule last:border-0">
                    <TrendingUp className="h-4 w-4 text-lavender flex-shrink-0 mt-1" />
                    <span className="text-[14px] text-body-ink">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DARK PROOF ── */}
        <section className="section-pad bg-ink text-white">
          <div className="container-x text-center max-w-3xl mx-auto">
            <p className="eyebrow !text-lavender mb-4">Who we work with</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Built for Kenya's Hospitality Landscape
            </h2>
            <p className="text-silver text-[16px] leading-relaxed mb-6">
              Creek Oxley works with hotel and lodge owners across Kenya - from Nairobi's business hotels to coastal resorts in Mombasa and Watamu, from safari lodges in Samburu and Laikipia to mountain properties near Nanyuki and the Aberdares.
            </p>
            <p className="text-silver text-[16px] leading-relaxed mb-10">
              Every market is different. Demand sources differ. Seasonality differs. Competitive sets differ. Our occupancy consulting is built on understanding your specific market - not applying a generic international playbook.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Nairobi Hotels", "Safari Lodges", "Coastal Resorts", "Boutique Properties"].map((label, i) => (
                <div key={i} className="border border-silver/20 p-4 text-[13px] text-silver">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-pad bg-bone">
          <div className="container-x max-w-3xl">
            <p className="eyebrow mb-4 text-center">Owner questions</p>
            <h2 className="font-display text-4xl md:text-5xl text-creekoxley text-center mb-12">
              Questions About Occupancy Consulting
            </h2>
            <div className="space-y-2">
              {faqData.map((item, i) => (
                <div key={i} className="border border-rule bg-white">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    id={`faq-occ-${i}`}
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
            <p className="eyebrow !text-white/60 mb-4">Stop leaving rooms empty</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Let's Look at Your Occupancy Together
            </h2>
            <p className="text-white/80 text-[16px] leading-relaxed mb-10">
              Talk to Creek Oxley about what's driving low occupancy at your property. We'll assess the situation, identify what's fixable, and give you a practical path to consistent, improved demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-creekoxley font-sans font-semibold px-8 py-4 text-[15px] hover:bg-bone transition-colors">
                <Mail className="h-4 w-4" /> Request an Occupancy Review
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

export default HotelOccupancyPage;
