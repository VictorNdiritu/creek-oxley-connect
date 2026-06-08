import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { label: "Manufacturing", to: "/industries/manufacturing" },
  { label: "Hospitality & Tourism", to: "/industries/hospitality-tourism" },
  { label: "Healthcare & Life Sciences", to: "/industries/healthcare-life-sciences" },
  { label: "Financial Services & Banking", to: "/industries/financial-services" },
  { label: "Retail & Consumer Goods", to: "/industries/retail-consumer-goods" },
  { label: "Technology & Telecoms", to: "/industries/technology-telecoms" },
  { label: "Real Estate & Construction", to: "/industries/real-estate-construction" },
  { label: "Education & Training", to: "/industries/education-training" },
  { label: "Logistics & Supply Chain", to: "/industries/logistics-supply-chain" },
  { label: "Agriculture & Agribusiness", to: "/industries/agriculture-agribusiness" },
  { label: "Energy & Utilities", to: "/industries/energy-utilities" },
  { label: "Non-Profit & NGO", to: "/industries/non-profit-ngo" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClass =
    "relative text-[14px] font-medium text-body-ink hover:text-creekoxley transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lavender hover:after:w-full after:transition-all";

  return (
    <>
      <nav className="bg-white border-b border-rule">
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/484943ae-2c20-4228-8536-7081b6c91bbd.png"
              alt="Creek Oxley"
              className="h-10 md:h-11"
            />
          </Link>

          <div className="hidden md:flex items-center gap-9">
            <Link to="/" className={linkClass}>Home</Link>
            <Link to="/about" className={linkClass}>About</Link>
            <Link to="/services" className={linkClass}>Services</Link>

            {/* Industries dropdown */}
            <div className="dropdown relative group">
              <Link
                to="/industries"
                className="flex items-center text-[14px] font-medium text-body-ink hover:text-creekoxley transition-colors"
              >
                Industries <ChevronDown className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="dropdown-menu hidden absolute py-2" style={{ minWidth: "240px" }}>
                <Link
                  to="/industries"
                  className="block px-5 py-2.5 text-[13px] text-body-ink hover:bg-bone hover:text-creekoxley font-semibold border-b border-rule"
                >
                  All Industries →
                </Link>
                {industries.map((ind) => (
                  <Link
                    key={ind.to}
                    to={ind.to}
                    className="block px-5 py-2 text-[13px] text-body-ink hover:bg-bone hover:text-creekoxley"
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divisions dropdown */}
            <div className="dropdown relative group">
              <span className="flex items-center text-[14px] font-medium text-body-ink cursor-default">
                Divisions <ChevronDown className="ml-1 h-3 w-3" />
              </span>
              <div className="dropdown-menu hidden absolute py-2">
                <Link to="/dmc" className="block px-5 py-2.5 text-[14px] text-body-ink hover:bg-bone hover:text-creekoxley">Destination Management</Link>
                <Link to="/smart-staffing" className="block px-5 py-2.5 text-[14px] text-body-ink hover:bg-bone hover:text-creekoxley">Smart Staffing</Link>
              </div>
            </div>

            <Link to="/blog" className={linkClass}>Insights</Link>
            <Link to="/contact" className={linkClass}>Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">Get in touch</Link>
          </div>

          <button className="md:hidden text-ink" onClick={toggleMenu} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100000] bg-ink text-white flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between h-20 px-6 border-b border-white/10 flex-shrink-0">
            <span className="font-display text-2xl">Creek Oxley</span>
            <button onClick={toggleMenu} aria-label="Close"><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-col gap-0 px-8 py-8">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={toggleMenu}
                className="font-display text-[36px] leading-[1.1] text-white hover:text-silver py-2"
              >
                {label}
              </Link>
            ))}

            {/* Industries accordion */}
            <div>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center justify-between w-full font-display text-[36px] leading-[1.1] text-white hover:text-silver py-2"
              >
                Industries
                <ChevronRight className={`h-6 w-6 transition-transform ${industriesOpen ? "rotate-90" : ""}`} />
              </button>
              {industriesOpen && (
                <div className="pl-4 mt-1 mb-2 flex flex-col gap-1 border-l border-white/20">
                  <Link
                    to="/industries"
                    onClick={toggleMenu}
                    className="text-[16px] text-[#DDDAE8] hover:text-white py-1 font-semibold"
                  >
                    All Industries →
                  </Link>
                  {industries.map((ind) => (
                    <Link
                      key={ind.to}
                      to={ind.to}
                      onClick={toggleMenu}
                      className="text-[16px] text-[#DDDAE8] hover:text-white py-1"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              ["Destination Management", "/dmc"],
              ["Smart Staffing", "/smart-staffing"],
              ["Insights", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={toggleMenu}
                className="font-display text-[36px] leading-[1.1] text-white hover:text-silver py-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
