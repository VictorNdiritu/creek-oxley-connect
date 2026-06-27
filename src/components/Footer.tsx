import React from "react";
import { Link } from "react-router-dom";
import RSSLink from "./RSSLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkCls = "text-[14px] text-silver hover:text-white transition-colors";
  const headCls = "eyebrow !text-silver mb-5";

  return (
    <footer className="bg-ink text-white relative">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-lavender" />
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="font-display text-3xl mb-3 text-white">Creek Oxley</div>
            <p className="font-display italic text-silver text-[18px] leading-snug mb-6">
              Observation. Innovation. Results.
            </p>
            <p className="text-[14px] text-silver max-w-sm">
              Management consultancy serving operators and executives across Kenya and the
              East African Community.
            </p>
            <div className="mt-6"><RSSLink /></div>
          </div>

          <div className="md:col-span-2">
            <div className={headCls}>Firm</div>
            <ul className="space-y-3">
              <li><Link to="/about" className={linkCls}>About</Link></li>
              <li><Link to="/services" className={linkCls}>Services</Link></li>
              <li><Link to="/blog" className={linkCls}>Insights</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className={headCls}>Industries</div>
            <ul className="space-y-3">
              <li><Link to="/industries" className={linkCls}>All Industries</Link></li>
              <li><Link to="/industries/manufacturing" className={linkCls}>Manufacturing</Link></li>
              <li><Link to="/industries/hospitality-tourism" className={linkCls}>Hospitality & Tourism</Link></li>
              <li><Link to="/industries/healthcare-life-sciences" className={linkCls}>Healthcare</Link></li>
              <li><Link to="/industries/financial-services" className={linkCls}>Financial Services</Link></li>
              <li><Link to="/industries/retail-consumer-goods" className={linkCls}>Retail</Link></li>
              <li><Link to="/industries/technology-telecoms" className={linkCls}>Technology</Link></li>
              <li><Link to="/industries/real-estate-construction" className={linkCls}>Real Estate</Link></li>
              <li><Link to="/industries/logistics-supply-chain" className={linkCls}>Logistics</Link></li>
              <li><Link to="/industries/agriculture-agribusiness" className={linkCls}>Agriculture</Link></li>
              <li><Link to="/industries/energy-utilities" className={linkCls}>Energy & Utilities</Link></li>
              <li><Link to="/industries/non-profit-ngo" className={linkCls}>Non-Profit & NGO</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className={headCls}>Divisions</div>
            <ul className="space-y-3">
              <li><Link to="/dmc" className={linkCls}>Destination Management</Link></li>
              <li><Link to="/smart-staffing" className={linkCls}>Smart Staffing</Link></li>
              <li><Link to="/dmc/watamu" className={linkCls}>Kilulu Villa - Watamu</Link></li>
              <li><Link to="/dmc/samburu" className={linkCls}>Samburu Elephant Lodge</Link></li>
              <li><Link to="/dmc/lodwar" className={linkCls}>Luxora Hotel - Lodwar</Link></li>
              <li><Link to="/dmc/nanyuki" className={linkCls}>Warwick Hotel - Nanyuki</Link></li>
              <li><Link to="/dmc/nairobi" className={linkCls}>TradeMark Hotel - Nairobi</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className={headCls}>Contact</div>
            <ul className="space-y-3 text-[14px] text-silver">
              <li>Riverside Close, Riverside Drive</li>
              <li>Nairobi, Kenya</li>
              <li><a className="hover:text-white" href="tel:+254725276757">+254 725 276 757</a></li>
              <li><a className="hover:text-white" href="mailto:info@creekoxley.com">info@creekoxley.com</a></li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center text-[14px] text-white border border-silver px-5 py-3 hover:bg-white hover:text-ink transition-colors">
                Begin a conversation →
              </Link>
            </div>
            <div className={`${headCls} mt-8`}>Legal</div>
            <ul className="space-y-3">
              <li><Link to="/privacy" className={linkCls}>Privacy</Link></li>
              <li><Link to="/terms" className={linkCls}>Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silver/30 mt-14 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] text-muted-ink">
            © {currentYear} Creek Oxley Management Consultant. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-silver">
            <a href="https://ke.linkedin.com/company/creekoxley" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://x.com/creekoxley" target="_blank" rel="noopener noreferrer" className="hover:text-white">X / Twitter</a>
            <a href="https://www.instagram.com/creekoxley/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
