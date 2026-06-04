import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <div className="dropdown relative group">
              <span className="flex items-center text-[14px] font-medium text-body-ink cursor-default">
                Divisions <ChevronDown className="ml-1 h-3 w-3" />
              </span>
              <div className="dropdown-menu hidden absolute mt-3 py-2">
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
        <div className="fixed inset-0 z-[100000] bg-ink text-white flex flex-col">
          <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
            <span className="font-display text-2xl">Creek Oxley</span>
            <button onClick={toggleMenu} aria-label="Close"><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-10">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Destination Management", "/dmc"],
              ["Smart Staffing", "/smart-staffing"],
              ["Insights", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={toggleMenu}
                className="font-display text-[40px] leading-[1.05] text-white hover:text-silver"
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
