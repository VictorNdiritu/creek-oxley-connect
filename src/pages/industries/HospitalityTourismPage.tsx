import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Hotel, Star, Globe, Users, TrendingUp, Compass, ArrowRight } from "lucide-react";

const challenges = [
  "Managing service quality consistency across multiple properties",
  "Revenue management and dynamic pricing optimisation",
  "High staff turnover in front-of-house and F&B roles",
  "Meeting international brand standards while remaining locally relevant",
  "Seasonal demand volatility and cash flow management",
  "Digital transformation of guest experience and operations",
];

const services = [
  {
    icon: <Hotel className="h-6 w-6 text-creekoxley" />,
    title: "Hotel Operations Consulting",
    desc: "We assess your property's operational structure, service delivery standards, and cost management practices to unlock sustainable performance improvements.",
  },
  {
    icon: <Star className="h-6 w-6 text-creekoxley" />,
    title: "Guest Experience Design",
    desc: "We map the full guest journey — from pre-arrival to post-checkout — identifying touchpoints where exceptional service creates loyalty and referrals.",
  },
  {
    icon: <Globe className="h-6 w-6 text-creekoxley" />,
    title: "Destination Management",
    desc: "Through our DMC division, we connect properties with curated itineraries, MICE solutions, and inbound travel management across Kenya's most iconic destinations.",
  },
  {
    icon: <Users className="h-6 w-6 text-creekoxley" />,
    title: "Workforce & Talent Strategy",
    desc: "We design hospitality-specific recruitment frameworks, training academies, and retention programmes that reduce turnover and build service culture.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-creekoxley" />,
    title: "Revenue Optimisation",
    desc: "Our revenue management consultants implement dynamic pricing strategies, distribution channel management, and forecasting tools to maximise RevPAR.",
  },
  {
    icon: <Compass className="h-6 w-6 text-creekoxley" />,
    title: "Brand & Franchise Advisory",
    desc: "We guide operators through franchise selection, brand standards compliance, and the owning vs. franchising decision with market-informed analysis.",
  },
];

const HospitalityTourismPage = () => (
  <>
    <SEOHead
      title="Hospitality & Tourism Consulting | Creek Oxley Kenya"
      description="Creek Oxley delivers hotel operations, guest experience, revenue management, and workforce consulting for hospitality and tourism businesses across East Africa."
      canonical="https://creekoxley.com/industries/hospitality-tourism"
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#1C1C2E] to-[#3D1A8C] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#DDDAE8] mb-4">Industries We Serve</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Hospitality & Tourism</h1>
            <p className="text-xl text-[#DDDAE8] mb-10 max-w-2xl leading-relaxed">
              From boutique lodges to city hotels and destination management, Creek Oxley partners with hospitality operators to deliver world-class guest experiences and commercial excellence.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#3D1A8C] px-8 py-4 font-semibold text-[15px] hover:bg-[#DDDAE8] transition-colors">
              Speak with a Consultant <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F7F6F4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <p className="eyebrow mb-3">Industry Context</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Challenges Facing Hospitality Operators</h2>
            <p className="text-[17px] text-[#6B6878] mb-12 max-w-2xl">East Africa's hospitality sector is growing fast. These are the pressures our clients navigate every day.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 border border-[#DDDAE8]">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#7B5EA7] flex-shrink-0" />
                  <p className="text-[16px] text-[#2D2D3A]">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Hospitality Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="p-6 border border-[#DDDAE8] hover:border-[#7B5EA7] transition-colors group">
                  <div className="h-12 w-12 bg-[#3D1A8C]/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#3D1A8C]/20 transition-colors">{s.icon}</div>
                  <h3 className="text-[18px] font-semibold mb-2 text-[#2D2D3A]">{s.title}</h3>
                  <p className="text-[15px] text-[#6B6878] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C1C2E]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to elevate your guest experience?</h2>
          <p className="text-[#DDDAE8] text-lg mb-8 max-w-xl mx-auto">Partner with Creek Oxley to transform your hospitality operations and commercial performance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#7B5EA7] text-white px-8 py-4 font-semibold hover:bg-[#3D1A8C] transition-colors">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/industries" className="inline-flex items-center justify-center gap-2 border border-[#DDDAE8] text-[#DDDAE8] px-8 py-4 font-semibold hover:bg-white/10 transition-colors">
              All Industries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default HospitalityTourismPage;
