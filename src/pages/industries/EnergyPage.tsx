import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, BarChart2, TrendingUp, ShieldCheck, Users, Globe, ArrowRight } from "lucide-react";

const challenges = [
  "Project finance structuring for large capital infrastructure",
  "Regulatory compliance with ERC, EPRA, and NEMA requirements",
  "Managing distributed operations across remote energy assets",
  "Grid connectivity and off-grid last-mile energy access",
  "Transition planning from fossil fuels to renewable energy",
  "Attracting specialist technical talent for energy projects",
];

const services = [
  { icon: <TrendingUp className="h-6 w-6 text-creekoxley" />, title: "Energy Strategy & Planning", desc: "We help utilities, IPPs, and energy developers define long-term strategy, capacity planning, and investment roadmaps aligned with Kenya's energy transition agenda." },
  { icon: <ShieldCheck className="h-6 w-6 text-creekoxley" />, title: "Regulatory Compliance", desc: "Our consultants guide energy companies through ERC licensing, EPRA petroleum regulations, NEMA environmental assessments, and PPA negotiation support." },
  { icon: <BarChart2 className="h-6 w-6 text-creekoxley" />, title: "Operations Performance", desc: "We implement performance management frameworks, asset reliability programmes, and O&M optimisation strategies for power generation and distribution utilities." },
  { icon: <Globe className="h-6 w-6 text-creekoxley" />, title: "Off-Grid & Rural Energy", desc: "We advise mini-grid developers and off-grid solar companies on business model design, community engagement strategy, and rural market entry." },
  { icon: <Users className="h-6 w-6 text-creekoxley" />, title: "Workforce & HSE", desc: "We develop health, safety and environment frameworks, technical competency programmes, and talent strategies for energy and utilities organisations." },
  { icon: <Zap className="h-6 w-6 text-creekoxley" />, title: "Renewable Energy Advisory", desc: "For solar, wind, hydro, and geothermal developers, we provide market assessment, project development support, and feasibility analysis for East Africa's renewable pipeline." },
];

const EnergyPage = () => (
  <>
    <SEOHead
      title="Energy & Utilities Consulting | Creek Oxley Kenya"
      description="Creek Oxley delivers energy strategy, regulatory compliance, operations performance, and workforce consulting for energy and utilities companies across East Africa."
      canonical="https://creekoxley.com/industries/energy-utilities"
    />
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#1C1C2E] to-[#3D1A8C] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#DDDAE8] mb-4">Industries We Serve</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Energy & Utilities</h1>
            <p className="text-xl text-[#DDDAE8] mb-10 max-w-2xl leading-relaxed">Creek Oxley advises utilities, IPPs, and renewable energy developers on strategy, operations, and regulatory compliance as East Africa accelerates its energy transition.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Challenges in Energy & Utilities</h2>
            <p className="text-[17px] text-[#6B6878] mb-12 max-w-2xl">East Africa's energy sector is at an inflection point, balancing access, affordability, and a clean energy transition under complex regulatory conditions.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Energy Services</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Power your future with Creek Oxley</h2>
          <p className="text-[#DDDAE8] text-lg mb-8 max-w-xl mx-auto">We bring management expertise to the complex world of energy and utilities across East Africa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#7B5EA7] text-white px-8 py-4 font-semibold hover:bg-[#3D1A8C] transition-colors">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/industries" className="inline-flex items-center justify-center gap-2 border border-[#DDDAE8] text-[#DDDAE8] px-8 py-4 font-semibold hover:bg-white/10 transition-colors">All Industries</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default EnergyPage;
