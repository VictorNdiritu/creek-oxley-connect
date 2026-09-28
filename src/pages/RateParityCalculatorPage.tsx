import React, { useState, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Calculator,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  ArrowRight,
  TrendingUp,
  Percent,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Sliders,
  BarChart3,
  Copy,
  Check,
  Send,
  Eye,
  Globe,
  Users,
  Building2,
  Phone,
  Mail,
  FileSpreadsheet
} from "lucide-react";

interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
}

const CURRENCIES: Record<string, CurrencyOption> = {
  USD: { code: "USD", name: "US Dollar", symbol: "$" },
  KES: { code: "KES", name: "Kenya Shilling", symbol: "KSh " },
  EUR: { code: "EUR", name: "Euro", symbol: "€" },
  GBP: { code: "GBP", name: "British Pound", symbol: "£" },
  ZAR: { code: "ZAR", name: "South African Rand", symbol: "R " },
  AED: { code: "AED", name: "UAE Dirham", symbol: "AED " },
  CAD: { code: "CAD", name: "Canadian Dollar", symbol: "C$ " },
  AUD: { code: "AUD", name: "Australian Dollar", symbol: "A$ " },
  CUSTOM: { code: "CUSTOM", name: "Custom Symbol", symbol: "" },
};

const faqData = [
  {
    q: "Why should we add a markup on Booking.com and other OTAs?",
    a: "OTAs typically charge commissions between 15% and 25%. If you list on OTAs at your base rack rate, you lose 15% to 25% of your revenue on every room sold. Adding an intentional markup ensures you protect your net revenue or give direct website bookers the best public price."
  },
  {
    q: "What is an STO Rate and what do we send to Tour Operators?",
    a: "STO stands for Standard Tour Operator rate. It is a contracted wholesale net rate (typically 10% to 25% less than your Rack Rate) sent confidentially to B2B tour operators and DMCs. The tour operator packages this rate with flights and safaris, and sells to their client at your recommended Rack Rate."
  },
  {
    q: "What happens if our Booking.com rate is lower than our Tour Operator STO rate?",
    a: "This is a critical parity conflict. If a tour operator sees that a traveler can book on Booking.com for less than the confidential wholesale rate they contracted, they can no longer sell your property and will terminate the partnership."
  },
  {
    q: "Can we offer direct guests lower prices than Booking.com?",
    a: "Yes. By listing on Booking.com at a marked-up rate (e.g. +15% to +20%) and keeping your direct website at base rack rate, direct guests always enjoy the best rate guarantee. Alternatively, you can offer fenced member perks, flexible check-in, or free airport transfers."
  },
  {
    q: "How does Creek Oxley help hoteliers structure their distribution rates?",
    a: "Creek Oxley reviews your entire commercial rate architecture across direct booking engines, OTAs, and tour operator agreements to establish clear rate tiers that protect wholesale contracts while maximizing direct NetRevPAR."
  }
];

export default function RateParityCalculatorPage() {
  // ── Core Inputs ──
  const [currencyKey, setCurrencyKey] = useState<string>("USD");
  const [customSymbol, setCustomSymbol] = useState<string>("$");
  
  // 1. Base Rack Rate (X)
  const [baseRackRate, setBaseRackRate] = useState<number>(200);

  // 2. OTA Markup (+X% for Booking.com / Expedia)
  const [otaMarkupPct, setOtaMarkupPct] = useState<number>(18);

  // 3. STO Wholesale Discount (-X% for Tour Operators)
  const [stoDiscountPct, setStoDiscountPct] = useState<number>(15);

  // Optional realistic friction settings
  const [otaCommissionPct, setOtaCommissionPct] = useState<number>(18); // commission charged by OTA
  const [gatewayFeePct, setGatewayFeePct] = useState<number>(2.5); // credit card fee on direct site

  // Copy state
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Volume Modeling
  const [showVolumeModel, setShowVolumeModel] = useState<boolean>(false);
  const [monthlyRoomNights, setMonthlyRoomNights] = useState<number>(300);
  const [directSharePct, setDirectSharePct] = useState<number>(30);
  const [otaSharePct, setOtaSharePct] = useState<number>(50);
  // remaining 20% is STO

  // Active currency
  const activeCurrency = CURRENCIES[currencyKey] || CURRENCIES.USD;
  const currencySymbol = currencyKey === "CUSTOM" ? customSymbol.trim() + " " : activeCurrency.symbol;

  const formatPrice = (value: number) => {
    return `${currencySymbol}${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // ── Rate Calculations ──
  const rates = useMemo(() => {
    const rack = Math.max(0, baseRackRate);
    const otaMarkup = Math.max(0, otaMarkupPct) / 100;
    const stoDisc = Math.max(0, stoDiscountPct) / 100;
    const otaComm = Math.max(0, otaCommissionPct) / 100;
    const gateway = Math.max(0, gatewayFeePct) / 100;

    // 1. Direct Website
    const directGross = rack;
    const directFee = directGross * gateway;
    const directNet = directGross - directFee;
    const directRetention = directGross > 0 ? (directNet / directGross) * 100 : 0;

    // 2. OTA Listing (Booking.com / Expedia) -> Rack + X%
    const otaGross = rack * (1 + otaMarkup);
    const otaFee = otaGross * otaComm;
    const otaNet = otaGross - otaFee;
    const otaRetention = otaGross > 0 ? (otaNet / otaGross) * 100 : 0;

    // 3. Tour Operator STO Net -> Rack - X%
    const stoNet = rack * (1 - stoDisc);
    const stoGross = rack; // Recommended retail package price
    const stoDiscountAmount = rack - stoNet;
    const stoRetention = stoGross > 0 ? (stoNet / stoGross) * 100 : 0;

    return {
      rack,
      directGross,
      directFee,
      directNet,
      directRetention,
      otaGross,
      otaFee,
      otaNet,
      otaRetention,
      stoGross,
      stoNet,
      stoDiscountAmount,
      stoRetention,
    };
  }, [baseRackRate, otaMarkupPct, stoDiscountPct, otaCommissionPct, gatewayFeePct]);

  // ── Parity Diagnostics ──
  const diagnostics = useMemo(() => {
    const issues: { type: "critical" | "warning"; title: string; desc: string }[] = [];

    // Critical: OTA price is less than or equal to STO wholesale net
    if (rates.otaGross <= rates.stoNet) {
      issues.push({
        type: "critical",
        title: "Wholesale Parity Breach: OTA Undercuts Tour Operator Rate",
        desc: `Public OTA price (${formatPrice(rates.otaGross)}) is less than or equal to what you send to Tour Operators (${formatPrice(rates.stoNet)}). Tour operators will refuse to contract your property because public customers can buy cheaper online.`,
      });
    }

    // Critical: Direct website is higher than OTA
    if (rates.directGross > rates.otaGross) {
      issues.push({
        type: "warning",
        title: "Direct Cannibalization: Direct Website Is More Expensive Than OTAs",
        desc: `Your direct website (${formatPrice(rates.directGross)}) is more expensive than your OTA listing (${formatPrice(rates.otaGross)}). Guests have zero incentive to book direct.`,
      });
    }

    // Direct vs STO
    if (rates.directGross < rates.stoNet) {
      issues.push({
        type: "warning",
        title: "Direct Price Lower Than Contracted STO",
        desc: `Your public direct rate (${formatPrice(rates.directGross)}) is below contracted wholesale net (${formatPrice(rates.stoNet)}). Check your tour operator contract terms regarding public undercutting.`,
      });
    }

    const status: "healthy" | "warning" | "critical" =
      issues.some((i) => i.type === "critical")
        ? "critical"
        : issues.length > 0
        ? "warning"
        : "healthy";

    return { status, issues };
  }, [rates, formatPrice]);

  // ── Copy Quotation Sheet ──
  const copyQuotation = () => {
    const text = `CREEK OXLEY - RATE DISTRIBUTION & QUOTATION SHEET
-----------------------------------------------------------
Base Rack Rate (Direct BAR): ${formatPrice(rates.rack)} / night

1. DIRECT WEBSITE (What Direct Guests See):
   - Published Guest Price: ${formatPrice(rates.directGross)}
   - Hotel Net Payout (after card fee): ${formatPrice(rates.directNet)}

2. BOOKING.COM / EXPEDIA (What OTA Customers See):
   - Public Listed Price: ${formatPrice(rates.otaGross)} (+${otaMarkupPct}% markup)
   - OTA Commission: ${otaCommissionPct}% (-${formatPrice(rates.otaFee)})
   - Hotel Net Payout: ${formatPrice(rates.otaNet)}

3. TOUR OPERATOR / DMC (What You Send In Contract):
   - Confidential STO Net Rate: ${formatPrice(rates.stoNet)} (-${stoDiscountPct}% wholesale discount)
   - Tour Operator Selling Price (RRP): ${formatPrice(rates.stoGross)}

Channel Parity Status: ${diagnostics.status.toUpperCase()}
Generated via Creek Oxley Hospitality Advisory
https://creekoxley.com/rate-parity-calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // ── Volume Model ──
  const volumeData = useMemo(() => {
    const directNights = (monthlyRoomNights * directSharePct) / 100;
    const otaNights = (monthlyRoomNights * otaSharePct) / 100;
    const stoSharePct = Math.max(0, 100 - directSharePct - otaSharePct);
    const stoNights = (monthlyRoomNights * stoSharePct) / 100;

    const directNetTot = directNights * rates.directNet;
    const otaNetTot = otaNights * rates.otaNet;
    const stoNetTot = stoNights * rates.stoNet;

    const totalNetRevenue = directNetTot + otaNetTot + stoNetTot;
    const totalDeductions = (directNights * rates.directFee) + (otaNights * rates.otaFee) + (stoNights * rates.stoDiscountAmount);

    return {
      directNights,
      otaNights,
      stoNights,
      stoSharePct,
      totalNetRevenue,
      totalDeductions,
    };
  }, [monthlyRoomNights, directSharePct, otaSharePct, rates]);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Hospitality Rate Parity & Net Revenue Calculator",
        "url": "https://creekoxley.com/rate-parity-calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Executive hotel rate distribution calculator: set base rack rate, add markup for Booking.com, and calculate STO tour operator wholesale rates.",
        "creator": {
          "@type": "Organization",
          "name": "Creek Oxley",
          "url": "https://creekoxley.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Hospitality Rate & Parity Calculator | Rack, OTA & STO Rates - Creek Oxley"
        description="Calculate what direct guests see, what to list on Booking.com with markup, and what STO net rates to send to tour operators. Protect hotel margins and maintain rate parity."
        canonical="https://creekoxley.com/rate-parity-calculator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-[#F7F6F4] text-[#2D2D3A]">
        <Navbar />

        {/* ── HERO BANNER ── */}
        <section className="relative bg-[#1C1C2E] text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#7B5EA7_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="container-x relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[11px] font-sans tracking-widest uppercase mb-5 border border-white/20">
                <Calculator className="h-3.5 w-3.5 text-[#7B5EA7]" />
                Hospitality Distribution Engine
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-[1.1] mb-5">
                Hotel Rate & Parity Calculator
              </h1>

              <p className="text-[17px] md:text-[19px] text-[#DDDAE8] max-w-3xl leading-relaxed mb-6">
                Start with your <strong className="text-white font-semibold">Base Rack Rate</strong>. Set the <strong className="text-white font-semibold">markup %</strong> you add for Booking.com and the <strong className="text-white font-semibold">discount %</strong> you give for Tour Operator (STO) rates. Instantly see what customers see and what to send in your wholesale contracts.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 text-sm text-[#DDDAE8]">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-emerald-400" />
                  <span>Customer View vs Tour Operator View</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-[#7B5EA7]" />
                  <span>One-Click Rate Sheet Generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span>Contract Parity Protection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE CALCULATOR APPLICATION ── */}
        <section className="py-12 md:py-16">
          <div className="container-x">

            {/* Step 1: Input Control Strip */}
            <div className="bg-white border border-[#DDDAE8] p-6 md:p-8 shadow-sm mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#DDDAE8] gap-4">
                <div>
                  <span className="eyebrow block mb-1">Step 1 — Set Your Rule Percentages</span>
                  <h2 className="font-display text-2xl md:text-3xl text-[#3D1A8C] font-semibold">
                    Set Your Rack Rate, OTA Markup & STO Discount
                  </h2>
                </div>

                {/* Currency selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-semibold text-[#6B6878]">Currency:</span>
                  <select
                    value={currencyKey}
                    onChange={(e) => setCurrencyKey(e.target.value)}
                    className="text-xs font-semibold bg-[#F7F6F4] border border-[#DDDAE8] py-2 px-3 text-[#1C1C2E] focus:outline-none focus:border-[#3D1A8C]"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="KES">KES (KSh)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="ZAR">ZAR (R)</option>
                    <option value="AED">AED (AED)</option>
                    <option value="CAD">CAD (C$)</option>
                    <option value="AUD">AUD (A$)</option>
                    <option value="CUSTOM">Custom Symbol</option>
                  </select>

                  {currencyKey === "CUSTOM" && (
                    <input
                      type="text"
                      value={customSymbol}
                      onChange={(e) => setCustomSymbol(e.target.value)}
                      placeholder="$"
                      maxLength={5}
                      className="w-12 text-xs bg-[#F7F6F4] border border-[#DDDAE8] py-2 px-2 text-center font-bold"
                    />
                  )}
                </div>
              </div>

              {/* 3 Main Sliders/Inputs in a 3-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 1. Base Rack Rate */}
                <div className="bg-[#F7F6F4] p-5 border border-[#DDDAE8] relative">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#1C1C2E]">
                      1. Base Rack Rate (X)
                    </label>
                    <span className="text-[11px] text-[#6B6878]">Direct Base Price</span>
                  </div>

                  <p className="text-xs text-[#6B6878] mb-3 leading-tight">
                    Your baseline published room rate per night on your direct website.
                  </p>

                  <div className="relative flex items-center mb-3">
                    <span className="absolute left-3 text-base text-[#6B6878] font-bold pointer-events-none">
                      {currencySymbol}
                    </span>
                    <input
                      type="number"
                      min={0}
                      step={10}
                      value={baseRackRate || ""}
                      onChange={(e) => setBaseRackRate(parseFloat(e.target.value) || 0)}
                      className="w-full pl-9 pr-3 py-2.5 text-xl font-bold bg-white border border-[#DDDAE8] text-[#1C1C2E] focus:outline-none focus:border-[#3D1A8C]"
                    />
                  </div>

                  {/* Preset quick buttons */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] text-[#6B6878] font-semibold">Quick:</span>
                    {[100, 150, 200, 300, 500].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setBaseRackRate(val)}
                        className={`text-[10px] px-2 py-0.5 border ${
                          baseRackRate === val
                            ? "bg-[#3D1A8C] text-white border-[#3D1A8C]"
                            : "bg-white text-[#6B6878] border-[#DDDAE8] hover:border-[#3D1A8C]"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. OTA Markup */}
                <div className="bg-[#F7F6F4] p-5 border border-[#DDDAE8]">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#1C1C2E]">
                      2. Add for Booking.com (+X%)
                    </label>
                    <span className="text-sm font-bold text-[#3D1A8C]">
                      +{otaMarkupPct}%
                    </span>
                  </div>

                  <p className="text-xs text-[#6B6878] mb-3 leading-tight">
                    Markup added to your Rack Rate when listing on Booking.com / Expedia to absorb OTA commissions.
                  </p>

                  <div className="flex items-center gap-3 mb-2">
                    <input
                      type="range"
                      min={0}
                      max={40}
                      step={1}
                      value={otaMarkupPct}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setOtaMarkupPct(val);
                        // By default keep commission matching markup if desired
                        setOtaCommissionPct(val > 0 ? val : 18);
                      }}
                      className="w-full accent-[#3D1A8C] cursor-pointer"
                    />
                    <div className="flex items-center">
                      <input
                        type="number"
                        min={0}
                        max={50}
                        value={otaMarkupPct}
                        onChange={(e) => setOtaMarkupPct(parseFloat(e.target.value) || 0)}
                        className="w-16 py-1 px-2 text-center text-xs font-bold bg-white border border-[#DDDAE8]"
                      />
                      <span className="text-xs font-bold ml-1 text-[#6B6878]">%</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] text-[#6B6878]">
                    <span>0% (Equal Parity)</span>
                    <span>+15% (Typical)</span>
                    <span>+20% (Full buffer)</span>
                  </div>
                </div>

                {/* 3. STO Discount */}
                <div className="bg-[#F7F6F4] p-5 border border-[#DDDAE8]">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#1C1C2E]">
                      3. Less for STO Rates (-X%)
                    </label>
                    <span className="text-sm font-bold text-[#7B5EA7]">
                      -{stoDiscountPct}%
                    </span>
                  </div>

                  <p className="text-xs text-[#6B6878] mb-3 leading-tight">
                    Discount subtracted from Rack Rate for contracted Tour Operators & DMCs.
                  </p>

                  <div className="flex items-center gap-3 mb-2">
                    <input
                      type="range"
                      min={5}
                      max={40}
                      step={1}
                      value={stoDiscountPct}
                      onChange={(e) => setStoDiscountPct(parseFloat(e.target.value) || 0)}
                      className="w-full accent-[#7B5EA7] cursor-pointer"
                    />
                    <div className="flex items-center">
                      <input
                        type="number"
                        min={0}
                        max={50}
                        value={stoDiscountPct}
                        onChange={(e) => setStoDiscountPct(parseFloat(e.target.value) || 0)}
                        className="w-16 py-1 px-2 text-center text-xs font-bold bg-white border border-[#DDDAE8]"
                      />
                      <span className="text-xs font-bold ml-1 text-[#6B6878]">%</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] text-[#6B6878]">
                    <span>-10% (Corporate/Agent)</span>
                    <span>-15% (Standard STO)</span>
                    <span>-20%+ (High Volume)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Step 2: "What They See / What You Send" Persona Cards */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="eyebrow block mb-1">Step 2 — Who Sees What & What to Send</span>
                  <h2 className="font-display text-2xl md:text-3xl text-[#1C1C2E] font-semibold">
                    Rate Distribution Matrix
                  </h2>
                </div>

                {/* One-click copy quotation button */}
                <button
                  type="button"
                  onClick={copyQuotation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3D1A8C] text-white hover:bg-[#1C1C2E] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm self-start sm:self-auto"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-300" />
                      <span>Rate Sheet Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Rate Sheet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Parity Status Banner */}
              <div
                className={`p-4 border mb-6 flex items-start gap-3 transition-colors ${
                  diagnostics.status === "healthy"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : diagnostics.status === "warning"
                    ? "bg-amber-50 border-amber-300 text-amber-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}
              >
                {diagnostics.status === "healthy" ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : diagnostics.status === "warning" ? (
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertOctagon className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}

                <div className="flex-1 text-xs">
                  <div className="font-bold uppercase tracking-wider mb-0.5">
                    {diagnostics.status === "healthy"
                      ? "Healthy Rate Hierarchy: OTA Price > Direct Website > Tour Operator STO Net"
                      : diagnostics.status === "warning"
                      ? "Rate Imbalance Alert"
                      : "Critical Parity Breach"}
                  </div>
                  {diagnostics.status === "healthy" ? (
                    <p className="text-emerald-800">
                      Your pricing protects your B2B tour operators with a wholesale buffer, incentivizes direct website booking, and covers OTA commissions.
                    </p>
                  ) : (
                    <div className="space-y-1 mt-1">
                      {diagnostics.issues.map((issue, idx) => (
                        <div key={idx}>• {issue.desc}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 3 HERO PERSONA CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* ── CARD 1: DIRECT WEBSITE GUEST ── */}
                <div className="bg-white border-2 border-[#3D1A8C] p-6 shadow-sm relative flex flex-col justify-between">
                  <div className="absolute -top-3 left-6 bg-[#3D1A8C] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5">
                    Direct Channel • Highest Net
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 pt-2">
                      <Globe className="h-5 w-5 text-[#3D1A8C]" />
                      <span className="text-xs uppercase tracking-wider font-bold text-[#6B6878]">
                        Direct Website Guest
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] block mb-1">
                        What the Customer Sees Online:
                      </span>
                      <div className="text-3xl sm:text-4xl font-display font-bold text-[#1C1C2E]">
                        {formatPrice(rates.directGross)}
                      </div>
                      <span className="text-[11px] text-[#6B6878]">
                        Per room / night on your official website booking engine
                      </span>
                    </div>

                    <div className="bg-[#F7F6F4] p-3.5 border border-[#DDDAE8] space-y-2 text-xs mb-4">
                      <div className="flex justify-between text-[#6B6878]">
                        <span>Base Rate:</span>
                        <span className="font-semibold text-[#1C1C2E]">{formatPrice(rates.rack)}</span>
                      </div>
                      <div className="flex justify-between text-[#6B6878]">
                        <span>Payment Gateway ({gatewayFeePct}%):</span>
                        <span className="text-rose-600 font-medium">-{formatPrice(rates.directFee)}</span>
                      </div>
                      <div className="pt-2 border-t border-[#DDDAE8] flex justify-between font-bold text-[#1C1C2E]">
                        <span>Hotel Pockets (Net):</span>
                        <span className="text-emerald-700 text-sm">{formatPrice(rates.directNet)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DDDAE8] text-[11px] text-[#6B6878]">
                    <strong className="text-[#3D1A8C]">Strategy:</strong> Advertise "Best Rate Guarantee" + perks (free airport shuttle or early check-in).
                  </div>
                </div>

                {/* ── CARD 2: BOOKING.COM / OTA GUEST ── */}
                <div className="bg-white border border-[#DDDAE8] p-6 shadow-sm relative flex flex-col justify-between hover:border-[#7B5EA7] transition-colors">
                  <div className="absolute -top-3 left-6 bg-[#1C1C2E] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5">
                    Retail OTA • Marked Up (+{otaMarkupPct}%)
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 pt-2">
                      <Building2 className="h-5 w-5 text-[#1C1C2E]" />
                      <span className="text-xs uppercase tracking-wider font-bold text-[#6B6878]">
                        Booking.com / Expedia Customer
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] block mb-1">
                        What the Traveler Sees on OTAs:
                      </span>
                      <div className="text-3xl sm:text-4xl font-display font-bold text-[#1C1C2E]">
                        {formatPrice(rates.otaGross)}
                      </div>
                      <span className="text-[11px] text-[#6B6878]">
                        Rate to list in your OTA Channel Manager / Extranet
                      </span>
                    </div>

                    <div className="bg-[#F7F6F4] p-3.5 border border-[#DDDAE8] space-y-2 text-xs mb-4">
                      <div className="flex justify-between text-[#6B6878]">
                        <span>Base Rate + {otaMarkupPct}% Markup:</span>
                        <span className="font-semibold text-[#1C1C2E]">+{formatPrice(rates.otaGross - rates.rack)}</span>
                      </div>
                      <div className="flex justify-between text-[#6B6878]">
                        <span>OTA Commission ({otaCommissionPct}%):</span>
                        <span className="text-rose-600 font-medium">-{formatPrice(rates.otaFee)}</span>
                      </div>
                      <div className="pt-2 border-t border-[#DDDAE8] flex justify-between font-bold text-[#1C1C2E]">
                        <span>Hotel Pockets (Net):</span>
                        <span className="text-emerald-700 text-sm">{formatPrice(rates.otaNet)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DDDAE8] text-[11px] text-[#6B6878]">
                    <strong className="text-[#1C1C2E]">Notice:</strong> By adding {otaMarkupPct}%, you protect your property from paying OTA fees out of your base revenue.
                  </div>
                </div>

                {/* ── CARD 3: TOUR OPERATOR / DMC ── */}
                <div className="bg-white border border-[#DDDAE8] p-6 shadow-sm relative flex flex-col justify-between hover:border-[#7B5EA7] transition-colors">
                  <div className="absolute -top-3 left-6 bg-[#7B5EA7] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5">
                    B2B Wholesale • -{stoDiscountPct}% Contract
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 pt-2">
                      <Users className="h-5 w-5 text-[#7B5EA7]" />
                      <span className="text-xs uppercase tracking-wider font-bold text-[#6B6878]">
                        Tour Operator / DMC Contract
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] block mb-1">
                        What You Send / Invoice the Operator:
                      </span>
                      <div className="text-3xl sm:text-4xl font-display font-bold text-[#3D1A8C]">
                        {formatPrice(rates.stoNet)}{" "}
                        <span className="text-xs font-sans uppercase font-bold text-[#7B5EA7] tracking-wider">
                          Net
                        </span>
                      </div>
                      <span className="text-[11px] text-[#6B6878]">
                        Confidential STO wholesale room rate per night
                      </span>
                    </div>

                    <div className="bg-[#F7F6F4] p-3.5 border border-[#DDDAE8] space-y-2 text-xs mb-4">
                      <div className="flex justify-between text-[#6B6878]">
                        <span>Contracted STO Discount:</span>
                        <span className="font-semibold text-[#7B5EA7]">-{stoDiscountPct}% (-{formatPrice(rates.stoDiscountAmount)})</span>
                      </div>
                      <div className="flex justify-between text-[#6B6878]">
                        <span>Tour Operator Selling Price (RRP):</span>
                        <span className="font-semibold text-[#1C1C2E]">{formatPrice(rates.stoGross)}</span>
                      </div>
                      <div className="pt-2 border-t border-[#DDDAE8] flex justify-between font-bold text-[#1C1C2E]">
                        <span>Hotel Invoices / Receives:</span>
                        <span className="text-emerald-700 text-sm">{formatPrice(rates.stoNet)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DDDAE8] text-[11px] text-[#6B6878]">
                    <strong className="text-[#7B5EA7]">Wholesale Integrity:</strong> Tour operators can comfortably package at {formatPrice(rates.stoGross)} without being undercut.
                  </div>
                </div>

              </div>
            </div>

            {/* Step 3: Comparative Matrix Table */}
            <div className="bg-white border border-[#DDDAE8] p-6 shadow-sm mb-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="eyebrow block mb-1">Channel Yield Ledger</span>
                  <h3 className="font-display text-xl text-[#1C1C2E] font-semibold">
                    Complete Rate Comparison Matrix
                  </h3>
                </div>
                <span className="text-xs text-[#6B6878]">Per Room Night Sold</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#DDDAE8] bg-[#F7F6F4] text-[#6B6878] uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4 font-semibold">Audience / Channel</th>
                      <th className="py-3 px-4 font-semibold">Listing / Quoted Price</th>
                      <th className="py-3 px-4 font-semibold">Rule Applied</th>
                      <th className="py-3 px-4 font-semibold">Friction / Deduction</th>
                      <th className="py-3 px-4 font-semibold">Hotel Pockets (Net)</th>
                      <th className="py-3 px-4 font-semibold text-right">Margin Kept</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDDAE8]/60">
                    {/* Direct */}
                    <tr className="hover:bg-[#F7F6F4]/60">
                      <td className="py-3.5 px-4 font-bold text-[#1C1C2E]">
                        Direct Website Customer
                      </td>
                      <td className="py-3.5 px-4 text-base font-bold text-[#3D1A8C]">
                        {formatPrice(rates.directGross)}
                      </td>
                      <td className="py-3.5 px-4 text-[#6B6878]">
                        Base Published Rack Rate
                      </td>
                      <td className="py-3.5 px-4 text-rose-600">
                        {gatewayFeePct}% Card Fee ({formatPrice(rates.directFee)})
                      </td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700 text-sm">
                        {formatPrice(rates.directNet)}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#1C1C2E]">
                        {rates.directRetention.toFixed(1)}%
                      </td>
                    </tr>

                    {/* Booking.com */}
                    <tr className="hover:bg-[#F7F6F4]/60">
                      <td className="py-3.5 px-4 font-bold text-[#1C1C2E]">
                        Booking.com / Expedia Customer
                      </td>
                      <td className="py-3.5 px-4 text-base font-bold text-[#1C1C2E]">
                        {formatPrice(rates.otaGross)}
                      </td>
                      <td className="py-3.5 px-4 text-[#6B6878]">
                        +{otaMarkupPct}% Markup over Rack Rate
                      </td>
                      <td className="py-3.5 px-4 text-rose-600">
                        {otaCommissionPct}% OTA Comm. ({formatPrice(rates.otaFee)})
                      </td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700 text-sm">
                        {formatPrice(rates.otaNet)}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#1C1C2E]">
                        {rates.otaRetention.toFixed(1)}%
                      </td>
                    </tr>

                    {/* Tour Operator */}
                    <tr className="hover:bg-[#F7F6F4]/60">
                      <td className="py-3.5 px-4 font-bold text-[#1C1C2E]">
                        Tour Operator / Safari DMC
                      </td>
                      <td className="py-3.5 px-4 text-base font-bold text-[#7B5EA7]">
                        {formatPrice(rates.stoNet)} Net
                      </td>
                      <td className="py-3.5 px-4 text-[#6B6878]">
                        -{stoDiscountPct}% Wholesale STO Discount
                      </td>
                      <td className="py-3.5 px-4 text-rose-600">
                        Wholesale Discount ({formatPrice(rates.stoDiscountAmount)})
                      </td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700 text-sm">
                        {formatPrice(rates.stoNet)}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#1C1C2E]">
                        {rates.stoRetention.toFixed(1)}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 4: Optional Monthly Room Nights Volume Simulator */}
            <div className="bg-white border border-[#DDDAE8] p-6 shadow-sm mb-12">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#3D1A8C]" />
                    <h3 className="font-display text-lg font-semibold text-[#1C1C2E]">
                      Monthly Volume & Commission Leakage Simulator
                    </h3>
                  </div>
                  <p className="text-xs text-[#6B6878] mt-0.5">
                    See total monthly revenue and commission paid based on room nights sold.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowVolumeModel(!showVolumeModel)}
                  className="px-3.5 py-1.5 text-xs font-semibold border border-[#DDDAE8] hover:bg-[#F7F6F4] text-[#3D1A8C] transition-colors"
                >
                  {showVolumeModel ? "Hide Simulator" : "Expand Simulator"}
                </button>
              </div>

              {showVolumeModel && (
                <div className="mt-6 pt-6 border-t border-[#DDDAE8] space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-[#6B6878] block mb-1">
                        Monthly Room Nights Sold
                      </label>
                      <input
                        type="number"
                        min={10}
                        step={25}
                        value={monthlyRoomNights}
                        onChange={(e) => setMonthlyRoomNights(parseInt(e.target.value) || 0)}
                        className="w-full py-2 px-3 bg-[#F7F6F4] border border-[#DDDAE8] text-sm font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-[#6B6878] block mb-1">
                        Direct Web Share ({directSharePct}%)
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={directSharePct}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setDirectSharePct(val);
                          if (val + otaSharePct > 100) {
                            setOtaSharePct(100 - val);
                          }
                        }}
                        className="w-full accent-[#3D1A8C]"
                      />
                      <span className="text-[10px] text-[#6B6878]">
                        {volumeData.directNights.toFixed(0)} room nights direct
                      </span>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-[#6B6878] block mb-1">
                        OTA Share ({otaSharePct}%)
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={100 - directSharePct}
                        value={otaSharePct}
                        onChange={(e) => setOtaSharePct(parseInt(e.target.value))}
                        className="w-full accent-[#3D1A8C]"
                      />
                      <span className="text-[10px] text-[#6B6878]">
                        Remaining Tour Operator STO share: {volumeData.stoSharePct}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F7F6F4] p-5 border border-[#DDDAE8]">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                        Total Net Revenue (To Hotel)
                      </span>
                      <span className="text-2xl font-bold font-display text-emerald-700">
                        {formatPrice(volumeData.totalNetRevenue)}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                        Total Channel Deductions / Fees
                      </span>
                      <span className="text-2xl font-bold font-display text-rose-600">
                        -{formatPrice(volumeData.totalDeductions)}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                        Direct Revenue Retention
                      </span>
                      <span className="text-2xl font-bold font-display text-[#3D1A8C]">
                        {rates.directRetention.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ── EDUCATIONAL FRAMEWORK SECTION ── */}
        <section className="py-16 md:py-20 bg-white border-t border-[#DDDAE8]">
          <div className="container-x">
            <div className="max-w-3xl mb-12">
              <span className="eyebrow block mb-2">Hospitality Advisory Framework</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#1C1C2E] font-semibold mb-4">
                The 3 Golden Rules of Hotel Rate Distribution
              </h2>
              <p className="text-[#6B6878] text-base leading-relaxed">
                Whether you manage a boutique hotel in Nairobi, a coastal beach resort in Watamu, or a safari camp in Samburu, setting the correct percentages between direct, OTA, and STO rates is critical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-[#DDDAE8] p-6 bg-[#F7F6F4]">
                <div className="h-10 w-10 bg-[#3D1A8C] text-white flex items-center justify-center font-display text-lg font-bold mb-5">
                  01
                </div>
                <h3 className="font-display text-xl text-[#1C1C2E] font-semibold mb-3">
                  Never Let OTAs Undercut Tour Operators
                </h3>
                <p className="text-sm text-[#6B6878] leading-relaxed mb-4">
                  Tour operators package your hotel with multi-day safaris and transport. If a traveler discovers a lower price on Booking.com than what the operator quoted using their STO rate, the operator loses credibility and stops promoting your lodge.
                </p>
                <div className="text-xs font-semibold text-[#3D1A8C] pt-3 border-t border-[#DDDAE8]">
                  Rule: OTA Listed Price &gt; STO Wholesale Net
                </div>
              </div>

              <div className="border border-[#DDDAE8] p-6 bg-[#F7F6F4]">
                <div className="h-10 w-10 bg-[#7B5EA7] text-white flex items-center justify-center font-display text-lg font-bold mb-5">
                  02
                </div>
                <h3 className="font-display text-xl text-[#1C1C2E] font-semibold mb-3">
                  Mark Up OTAs to Offset 15%-25% Commission
                </h3>
                <p className="text-sm text-[#6B6878] leading-relaxed mb-4">
                  OTAs are lead-generation engines, not cheap booking portals. If your base rack rate is $200 and Booking.com takes 18%, listing at $236 (+18%) guarantees that after commissions, you still net your required base revenue.
                </p>
                <div className="text-xs font-semibold text-[#7B5EA7] pt-3 border-t border-[#DDDAE8]">
                  Rule: Add +X% Markup for Extranet Rates
                </div>
              </div>

              <div className="border border-[#DDDAE8] p-6 bg-[#F7F6F4]">
                <div className="h-10 w-10 bg-[#1C1C2E] text-white flex items-center justify-center font-display text-lg font-bold mb-5">
                  03
                </div>
                <h3 className="font-display text-xl text-[#1C1C2E] font-semibold mb-3">
                  Guarantee the Best Price Direct
                </h3>
                <p className="text-sm text-[#6B6878] leading-relaxed mb-4">
                  When direct website bookers see that booking directly with you is cheaper or includes superior perks (free breakfast, flexible cancellation, late checkout), your direct conversion rate surges, saving thousands in commission leakage.
                </p>
                <div className="text-xs font-semibold text-[#1C1C2E] pt-3 border-t border-[#DDDAE8]">
                  Rule: Direct Website = Most Attractive Deal
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION SECTION ── */}
        <section className="py-16 md:py-20 bg-[#F7F6F4] border-t border-[#DDDAE8]">
          <div className="container-x max-w-4xl">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-2">Frequently Asked Questions</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#1C1C2E] font-semibold">
                Rate Parity, Contracts & Pricing Architecture
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white border border-[#DDDAE8] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-medium text-[#1C1C2E] hover:text-[#3D1A8C]"
                    >
                      <span className="text-base font-semibold">{item.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#6B6878] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#3D1A8C]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-[#6B6878] leading-relaxed border-t border-[#DDDAE8]/60 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── EXECUTIVE AUDIT CTA BANNER ── */}
        <section className="py-20 bg-[#3D1A8C] text-white">
          <div className="container-x">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-[11px] font-sans tracking-widest uppercase mb-6 border border-white/20">
                Commercial Hospitality Advisory
              </span>

              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 leading-tight">
                Need Help Restructuring Your Hotel Distribution Rates?
              </h2>

              <p className="text-[17px] text-[#DDDAE8] max-w-2xl mx-auto mb-10 leading-relaxed">
                Creek Oxley audits commercial contracts, channel managers, and wholesale STO rate sheets for hotels, safari lodges, and luxury villas across Kenya and East Africa.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#1C1C2E] hover:bg-[#F7F6F4] font-semibold text-sm tracking-wide transition-colors"
                >
                  Schedule a Distribution Audit
                </Link>

                <Link
                  to="/hotel-revenue"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/60 hover:border-white text-white font-semibold text-sm tracking-wide transition-colors"
                >
                  Explore Revenue Advisory
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap justify-center items-center gap-8 text-xs text-[#DDDAE8]">
                <a href="tel:+254110463062" className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-3.5 w-3.5 text-[#7B5EA7]" />
                  +254 110 463 062
                </a>
                <a href="mailto:info@creekoxley.com" className="inline-flex items-center gap-2 hover:text-white">
                  <Mail className="h-3.5 w-3.5 text-[#7B5EA7]" />
                  info@creekoxley.com
                </a>
                <span>Riverside Drive, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
