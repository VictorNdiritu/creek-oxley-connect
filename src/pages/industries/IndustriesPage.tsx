import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Factory, Hotel, Heart, DollarSign, ShoppingBag, Cpu,
  Building2, GraduationCap, Truck, Leaf, Zap, Users, ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: <Factory className="h-7 w-7" />,
    title: "Manufacturing",
    desc: "Operations optimisation, lean manufacturing, supply chain, and workforce development for producers across East Africa.",
    href: "/industries/manufacturing",
    color: "from-[#3D1A8C] to-[#5a30c0]",
  },
  {
    icon: <Hotel className="h-7 w-7" />,
    title: "Hospitality & Tourism",
    desc: "Hotel operations, guest experience design, revenue management, and destination management consulting.",
    href: "/industries/hospitality-tourism",
    color: "from-[#2D6A4F] to-[#3D8B60]",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Healthcare & Life Sciences",
    desc: "Clinical operations, regulatory compliance, patient experience, and healthcare workforce strategy.",
    href: "/industries/healthcare-life-sciences",
    color: "from-[#8B1A3D] to-[#b5285c]",
  },
  {
    icon: <DollarSign className="h-7 w-7" />,
    title: "Financial Services & Banking",
    desc: "Regulatory advisory, growth strategy, operational excellence, and talent for banks, SACCOs, and insurers.",
    href: "/industries/financial-services",
    color: "from-[#1A4A8B] to-[#2860b5]",
  },
  {
    icon: <ShoppingBag className="h-7 w-7" />,
    title: "Retail & Consumer Goods",
    desc: "Store operations, category management, inventory optimisation, and customer experience for retailers.",
    href: "/industries/retail-consumer-goods",
    color: "from-[#6B3A1A] to-[#8B5230]",
  },
  {
    icon: <Cpu className="h-7 w-7" />,
    title: "Technology & Telecoms",
    desc: "Scale-up strategy, product operations, regulatory licensing, and talent for tech and telecoms companies.",
    href: "/industries/technology-telecoms",
    color: "from-[#1A6B6B] to-[#288080]",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Real Estate & Construction",
    desc: "Project management, investment analysis, regulatory compliance, and facilities management advisory.",
    href: "/industries/real-estate-construction",
    color: "from-[#4A1A6B] to-[#622890]",
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "Education & Training",
    desc: "Academic strategy, quality assurance, accreditation readiness, and corporate learning programme design.",
    href: "/industries/education-training",
    color: "from-[#1A4A2D] to-[#286040]",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Logistics & Supply Chain",
    desc: "Supply chain design, warehouse optimisation, fleet management, and trade compliance consulting.",
    href: "/industries/logistics-supply-chain",
    color: "from-[#6B4A1A] to-[#8B6228]",
  },
  {
    icon: <Leaf className="h-7 w-7" />,
    title: "Agriculture & Agribusiness",
    desc: "Value chain strategy, market access, export compliance, and cooperative development for agri-enterprises.",
    href: "/industries/agriculture-agribusiness",
    color: "from-[#2D6B1A] to-[#3D8B28]",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Energy & Utilities",
    desc: "Energy strategy, ERC regulatory compliance, off-grid advisory, and operations performance for utilities.",
    href: "/industries/energy-utilities",
    color: "from-[#6B6B1A] to-[#8B8B28]",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Non-Profit & NGO",
    desc: "Impact measurement, governance frameworks, resource mobilisation, and programme strategy for development organisations.",
    href: "/industries/non-profit-ngo",
    color: "from-[#6B1A4A] to-[#8B2860]",
  },
];

const IndustriesPage = () => (
  <>
    <SEOHead
      title="Industries We Serve | Creek Oxley Management Consulting Kenya"
      description="Creek Oxley delivers sector-specific management consulting across 12 industries including manufacturing, hospitality, healthcare, financial services, and more across East Africa."
      canonical="https://creekoxley.com/industries"
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#1C1C2E] to-[#3D1A8C] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <p className="eyebrow text-[#DDDAE8] mb-4">Sector Expertise</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Industries We Serve
          </h1>
          <p className="text-xl text-[#DDDAE8] max-w-2xl mx-auto leading-relaxed">
            Creek Oxley's consulting practice spans twelve industries across Kenya and the East African Community. Wherever you operate, we bring deep sector knowledge and proven management frameworks to solve your most complex challenges.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, i) => (
              <Link
                key={i}
                to={industry.href}
                className="group relative block overflow-hidden border border-[#DDDAE8] hover:border-[#3D1A8C] hover:shadow-lg transition-all duration-300"
              >
                {/* Top colour bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${industry.color}`} />
                <div className="p-7">
                  <div className={`h-14 w-14 rounded-sm bg-gradient-to-br ${industry.color} flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h2 className="text-[20px] font-bold text-[#2D2D3A] mb-3 group-hover:text-[#3D1A8C] transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-[14px] text-[#6B6878] leading-relaxed mb-5">{industry.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#3D1A8C] group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Creek Oxley */}
      <section className="py-20 md:py-28 bg-[#F7F6F4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-3">Why Creek Oxley</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sector knowledge. Management discipline. Results.</h2>
            <p className="text-[17px] text-[#6B6878] mb-6 leading-relaxed">
              Unlike generalist consulting firms, Creek Oxley builds dedicated sector expertise in each industry we serve. Our consultants combine deep knowledge of East Africa's business environment with internationally proven management frameworks - delivering solutions that are both rigorous and practically implementable.
            </p>
            <p className="text-[17px] text-[#6B6878] leading-relaxed">
              Whether you're a multinational entering the Kenyan market, an established local business seeking to scale, or a development organisation looking to increase impact, our sector-specific approach ensures we speak your language and understand your pressures from day one.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#3D1A8C] text-white px-8 py-4 font-semibold hover:bg-[#2D1270] transition-colors">
                Begin a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border border-[#3D1A8C] text-[#3D1A8C] px-8 py-4 font-semibold hover:bg-[#3D1A8C] hover:text-white transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default IndustriesPage;
