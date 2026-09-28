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
  DollarSign,
  Building,
  Globe,
  Compass,
  CheckCircle2,
  ChevronDown,
  Info,
  Layers,
  Sparkles,
  RefreshCw,
  Sliders,
  BarChart3,
  Phone,
  Mail
} from "lucide-react";

interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
  defaultRate: number; // relative to USD
}

const CURRENCIES: Record<string, CurrencyOption> = {
  USD: { code: "USD", name: "US Dollar", symbol: "$", defaultRate: 1.0 },
  KES: { code: "KES", name: "Kenya Shilling", symbol: "KSh ", defaultRate: 129.5 },
  EUR: { code: "EUR", name: "Euro", symbol: "€", defaultRate: 0.92 },
  GBP: { code: "GBP", name: "British Pound", symbol: "£", defaultRate: 0.79 },
  ZAR: { code: "ZAR", name: "South African Rand", symbol: "R ", defaultRate: 18.2 },
  AED: { code: "AED", name: "UAE Dirham", symbol: "AED ", defaultRate: 3.67 },
  CAD: { code: "CAD", name: "Canadian Dollar", symbol: "C$ ", defaultRate: 1.36 },
  AUD: { code: "AUD", name: "Australian Dollar", symbol: "A$ ", defaultRate: 1.52 },
  CUSTOM: { code: "CUSTOM", name: "Custom Symbol", symbol: "", defaultRate: 1.0 },
};

type PricingModel = "parity" | "markup";
type PromoScope = "none" | "global" | "direct" | "booking" | "expedia" | "sto";

interface ChannelResult {
  id: string;
  name: string;
  type: "direct" | "ota" | "wholesale";
  tag: string;
  grossPrice: number;
  feeLabel: string;
  feeAmount: number;
  netRevenue: number;
  retentionPct: number;
}

const faqData = [
  {
    q: "What is Rate Parity in hospitality?",
    a: "Rate parity is the legal or contractual commitment by a hotel or lodge to maintain consistent room rates across all public sales channels, including online travel agencies (OTAs) like Booking.com and Expedia, as well as the hotel's own direct website."
  },
  {
    q: "What is the difference between Rack Rate and STO Rate?",
    a: "The Rack Rate (or BAR - Best Available Rate) is the baseline published retail rate available to individual consumers. The Standard Tour Operator (STO) rate is a discounted wholesale net rate (typically 10% to 25% below Rack Rate) offered strictly to contracted B2B travel agents and destination management companies (DMCs) who package accommodation with safaris, flights, and transfers."
  },
  {
    q: "What happens if our OTA rate undercuts our contracted STO rate?",
    a: "If public OTA rates drop below contracted STO wholesale rates, tour operators cannot assemble viable travel packages and may delist your lodge or property. It also creates immediate contractual breach liabilities under standard B2B wholesale agreements across East Africa."
  },
  {
    q: "Can we offer exclusive perks or lower rates on our direct website?",
    a: "While strict rate parity clauses historically restricted lower public prices, modern hotel strategies employ 'fenced' private rates (e.g., direct booking club, WhatsApp member promo, resident rates) or direct booking perks (complimentary airport transfer, room upgrade, flexible cancellation) to drive high-margin direct conversions without breaching public parity contracts."
  },
  {
    q: "How does Creek Oxley help hotels optimize distribution channels?",
    a: "Creek Oxley conducts comprehensive commercial audits: analyzing your channel cost of sale, renegotiating OTA margins, structuring compliant STO wholesale tiers, and installing high-converting direct booking funnels that significantly elevate NetRevPAR and gross operating profit."
  }
];

export default function RateParityCalculatorPage() {
  // Inputs
  const [currencyKey, setCurrencyKey] = useState<string>("USD");
  const [customSymbol, setCustomSymbol] = useState<string>("$");
  const [pricingModel, setPricingModel] = useState<PricingModel>("parity"); // 'parity' (equal gross) vs 'markup' (OTA mark-up)
  const [baseRackRate, setBaseRackRate] = useState<number>(300);
  const [otaCommissionPct, setOtaCommissionPct] = useState<number>(18);
  const [stoDiscountPct, setStoDiscountPct] = useState<number>(15);
  const [gatewayFeePct, setGatewayFeePct] = useState<number>(2.5);
  const [promoDiscountPct, setPromoDiscountPct] = useState<number>(0);
  const [promoScope, setPromoScope] = useState<PromoScope>("none");

  // Volume Modeling (Optional interactive scenario)
  const [showVolumeModel, setShowVolumeModel] = useState<boolean>(false);
  const [monthlyRoomNights, setMonthlyRoomNights] = useState<number>(300);
  const [directSharePct, setDirectSharePct] = useState<number>(35);
  const [otaSharePct, setOtaSharePct] = useState<number>(45);
  // remaining is STO Share: 100 - direct - ota

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Active currency symbol
  const activeCurrency = CURRENCIES[currencyKey] || CURRENCIES.USD;
  const currencySymbol = currencyKey === "CUSTOM" ? customSymbol.trim() + " " : activeCurrency.symbol;

  const formatPrice = (value: number) => {
    return `${currencySymbol}${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // Calculations
  const calculatedChannels = useMemo<ChannelResult[]>(() => {
    const rack = Math.max(0, baseRackRate);
    const otaComm = Math.max(0, otaCommissionPct) / 100;
    const stoDisc = Math.max(0, stoDiscountPct) / 100;
    const gateway = Math.max(0, gatewayFeePct) / 100;
    const promo = Math.max(0, promoDiscountPct) / 100;

    // Apply promo factors based on scope
    const promoActiveFor = (scope: PromoScope) => {
      if (promoScope === "global") return promo;
      if (promoScope === scope) return promo;
      return 0;
    };

    // 1. Direct Web
    const directPromoRate = promoActiveFor("direct");
    const directGross = rack * (1 - directPromoRate);
    const directFee = directGross * gateway;
    const directNet = directGross - directFee;
    const directRetention = directGross > 0 ? (directNet / directGross) * 100 : 0;

    // 2. Booking.com
    const bookingPromoRate = promoActiveFor("booking");
    let bookingGross = 0;
    if (pricingModel === "parity") {
      bookingGross = rack * (1 - bookingPromoRate);
    } else {
      bookingGross = (rack * (1 + otaComm)) * (1 - bookingPromoRate);
    }
    const bookingFee = bookingGross * otaComm;
    const bookingNet = bookingGross - bookingFee;
    const bookingRetention = bookingGross > 0 ? (bookingNet / bookingGross) * 100 : 0;

    // 3. Expedia
    const expediaPromoRate = promoActiveFor("expedia");
    let expediaGross = 0;
    if (pricingModel === "parity") {
      expediaGross = rack * (1 - expediaPromoRate);
    } else {
      expediaGross = (rack * (1 + otaComm)) * (1 - expediaPromoRate);
    }
    const expediaFee = expediaGross * otaComm;
    const expediaNet = expediaGross - expediaFee;
    const expediaRetention = expediaGross > 0 ? (expediaNet / expediaGross) * 100 : 0;

    // 4. Tour Operator (STO)
    const stoPromoRate = promoActiveFor("sto");
    // STO is traditionally a discount from base rack rate
    const stoBaseWholesaleNet = rack * (1 - stoDisc);
    const stoNet = stoBaseWholesaleNet * (1 - stoPromoRate);
    const stoGross = rack; // The client sells packages based on rack or contracted rate
    const stoFee = rack - stoNet;
    const stoRetention = stoGross > 0 ? (stoNet / stoGross) * 100 : 0;

    return [
      {
        id: "direct",
        name: "Direct Website",
        type: "direct",
        tag: "High Yield Channel",
        grossPrice: directGross,
        feeLabel: `${gatewayFeePct.toFixed(1)}% Gateway Fee`,
        feeAmount: directFee,
        netRevenue: directNet,
        retentionPct: directRetention,
      },
      {
        id: "booking",
        name: "Booking.com",
        type: "ota",
        tag: "Retail OTA",
        grossPrice: bookingGross,
        feeLabel: `${otaCommissionPct.toFixed(1)}% OTA Commission`,
        feeAmount: bookingFee,
        netRevenue: bookingNet,
        retentionPct: bookingRetention,
      },
      {
        id: "expedia",
        name: "Expedia Group",
        type: "ota",
        tag: "Retail OTA",
        grossPrice: expediaGross,
        feeLabel: `${otaCommissionPct.toFixed(1)}% OTA Commission`,
        feeAmount: expediaFee,
        netRevenue: expediaNet,
        retentionPct: expediaRetention,
      },
      {
        id: "sto",
        name: "Tour Operator (STO)",
        type: "wholesale",
        tag: "B2B Wholesale Net",
        grossPrice: stoGross,
        feeLabel: `${stoDiscountPct.toFixed(1)}% Contracted Discount`,
        feeAmount: stoFee,
        netRevenue: stoNet,
        retentionPct: stoRetention,
      },
    ];
  }, [
    baseRackRate,
    otaCommissionPct,
    stoDiscountPct,
    gatewayFeePct,
    promoDiscountPct,
    promoScope,
    pricingModel,
  ]);

  // Diagnostics Engine
  const diagnostics = useMemo(() => {
    const direct = calculatedChannels.find((c) => c.id === "direct")!;
    const booking = calculatedChannels.find((c) => c.id === "booking")!;
    const expedia = calculatedChannels.find((c) => c.id === "expedia")!;
    const sto = calculatedChannels.find((c) => c.id === "sto")!;

    const minOtaGross = Math.min(booking.grossPrice, expedia.grossPrice);
    const issues: { type: "critical" | "warning"; title: string; desc: string }[] = [];

    // Critical: OTA public rate is less than or equal to STO wholesale net
    if (minOtaGross <= sto.netRevenue) {
      issues.push({
        type: "critical",
        title: "Wholesale Parity Conflict: OTAs Undercutting STO Contract",
        desc: `Public OTA price (${formatPrice(minOtaGross)}) is lower than or equal to your contracted tour operator net rate (${formatPrice(sto.netRevenue)}). Inbound tour operators and safari DMCs cannot package trips and will lodge formal contractual complaints.`,
      });
    }

    // Warning / Critical: OTA public rate undercuts direct website rate
    if (minOtaGross < direct.grossPrice - 0.01) {
      issues.push({
        type: "warning",
        title: "Direct Channel Cannibalization",
        desc: `Public OTA rates (${formatPrice(minOtaGross)}) undercut your direct website (${formatPrice(direct.grossPrice)}). Bookers are being financially incentivized to book via third parties, costing you an extra ${otaCommissionPct}% commission.`,
      });
    }

    // Contractual Flag: Direct promotional rate drops below STO wholesale rate
    if (direct.grossPrice < sto.netRevenue) {
      issues.push({
        type: "warning",
        title: "B2B Contract Integrity Risk",
        desc: `Your direct promotional price (${formatPrice(direct.grossPrice)}) is below contracted wholesale net (${formatPrice(sto.netRevenue)}). Check your wholesale agreements for strict non-undercutting covenants.`,
      });
    }

    // Healthy State
    const status: "compliant" | "warning" | "critical" =
      issues.some((i) => i.type === "critical")
        ? "critical"
        : issues.length > 0
        ? "warning"
        : "compliant";

    return { status, issues };
  }, [calculatedChannels, formatPrice, otaCommissionPct]);

  // Volume Scenario Calculations
  const volumeMetrics = useMemo(() => {
    const directShare = Math.min(100, Math.max(0, directSharePct));
    const otaShare = Math.min(100 - directShare, Math.max(0, otaSharePct));
    const stoShare = Math.max(0, 100 - directShare - otaShare);

    const direct = calculatedChannels.find((c) => c.id === "direct")!;
    const booking = calculatedChannels.find((c) => c.id === "booking")!;
    const sto = calculatedChannels.find((c) => c.id === "sto")!;

    const directNights = (monthlyRoomNights * directShare) / 100;
    const otaNights = (monthlyRoomNights * otaShare) / 100;
    const stoNights = (monthlyRoomNights * stoShare) / 100;

    const directGrossTot = directNights * direct.grossPrice;
    const directNetTot = directNights * direct.netRevenue;
    const otaGrossTot = otaNights * booking.grossPrice;
    const otaNetTot = otaNights * booking.netRevenue;
    const stoGrossTot = stoNights * sto.grossPrice;
    const stoNetTot = stoNights * sto.netRevenue;

    const totalGross = directGrossTot + otaGrossTot + stoGrossTot;
    const totalNet = directNetTot + otaNetTot + stoNetTot;
    const totalCommissionFriction = totalGross - totalNet;
    const blendedRetention = totalGross > 0 ? (totalNet / totalGross) * 100 : 0;

    // Potential savings if 10% of OTA shifted to Direct
    const shiftNights = otaNights * 0.15; // 15% of OTA volume shifted to direct
    const currentShiftNet = shiftNights * booking.netRevenue;
    const newShiftNet = shiftNights * direct.netRevenue;
    const monthlyOpportunity = Math.max(0, newShiftNet - currentShiftNet);
    const annualOpportunity = monthlyOpportunity * 12;

    return {
      directNights,
      otaNights,
      stoNights,
      stoShare,
      totalGross,
      totalNet,
      totalCommissionFriction,
      blendedRetention,
      monthlyOpportunity,
      annualOpportunity,
    };
  }, [
    monthlyRoomNights,
    directSharePct,
    otaSharePct,
    calculatedChannels,
  ]);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Hospitality Rate Parity & Net Revenue Calculator",
        "url": "https://creekoxley.com/rate-parity-calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Executive modeling tool for hospitality leaders to calculate channel yield distribution, prevent OTA undercutting, and model STO wholesale rate integrity.",
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
        title="Hospitality Rate Parity & Net Revenue Calculator | Creek Oxley"
        description="Interactive hotel rate parity calculator to model direct bookings, OTA commissions, and STO wholesale contracts. Protect NetRevPAR and prevent rate cannibalization."
        canonical="https://creekoxley.com/rate-parity-calculator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-[#F7F6F4] text-[#2D2D3A]">
        <Navbar />

        {/* ── HERO BANNER ── */}
        <section className="relative bg-[#1C1C2E] text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#7B5EA7_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="container-x relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[11px] font-sans tracking-widest uppercase mb-6 rounded-none border border-white/20">
                <Calculator className="h-3.5 w-3.5 text-[#7B5EA7]" />
                Commercial Revenue & Distribution Suite
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-semibold leading-[1.08] mb-6">
                Hospitality Rate Parity & Net Revenue Yield Calculator
              </h1>

              <p className="text-[17px] md:text-[19px] text-[#DDDAE8] max-w-3xl leading-relaxed mb-8">
                Model real net revenue realizations across your Direct Website, Online Travel Agencies (OTAs), and Contracted Tour Operator (STO) wholesale channels. Identify parity breaches and protect your property's GOPPAR.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/15 text-sm text-[#DDDAE8]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Real-Time Parity Diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="h-4 w-4 text-[#7B5EA7]" />
                  <span>NetRevPAR Friction Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-sky-400" />
                  <span>Multi-Currency East Africa & Global Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALCULATOR APPLICATION INTERFACE ── */}
        <section className="py-12 md:py-16">
          <div className="container-x">
            
            {/* Top Bar / Model Selector */}
            <div className="bg-white p-5 md:p-6 border border-[#DDDAE8] mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="eyebrow block mb-1">Pricing Architecture</span>
                <h3 className="font-display text-xl text-[#3D1A8C] font-semibold">
                  Select Channel Parity Setup
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPricingModel("parity")}
                  className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all border ${
                    pricingModel === "parity"
                      ? "bg-[#3D1A8C] text-white border-[#3D1A8C]"
                      : "bg-[#F7F6F4] text-[#2D2D3A] border-[#DDDAE8] hover:bg-white"
                  }`}
                >
                  Strict Rate Parity (Equal Public Rates)
                </button>

                <button
                  type="button"
                  onClick={() => setPricingModel("markup")}
                  className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all border ${
                    pricingModel === "markup"
                      ? "bg-[#3D1A8C] text-white border-[#3D1A8C]"
                      : "bg-[#F7F6F4] text-[#2D2D3A] border-[#DDDAE8] hover:bg-white"
                  }`}
                >
                  Mark-Up Strategy (OTA Gross &gt; Rack)
                </button>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* ── LEFT INPUTS COLUMN (5 COLS) ── */}
              <div className="lg:col-span-5 bg-white border border-[#DDDAE8] p-6 shadow-sm">
                
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DDDAE8]">
                  <div className="flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-[#3D1A8C]" />
                    <span className="font-display text-lg font-semibold text-[#1C1C2E]">
                      Model Parameters
                    </span>
                  </div>

                  {/* Currency Picker */}
                  <div className="flex items-center gap-1.5">
                    <select
                      value={currencyKey}
                      onChange={(e) => setCurrencyKey(e.target.value)}
                      className="text-xs bg-[#F7F6F4] border border-[#DDDAE8] py-1.5 px-2.5 font-medium text-[#1C1C2E] focus:outline-none focus:border-[#3D1A8C]"
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
                        className="w-12 text-xs bg-[#F7F6F4] border border-[#DDDAE8] py-1.5 px-2 text-center"
                      />
                    )}
                  </div>
                </div>

                {/* Input 1: Base Rack Rate */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#1C1C2E]">
                      Base Rack Rate / Direct BAR
                    </label>
                    <span className="text-xs text-[#6B6878]">Per Room Night</span>
                  </div>
                  
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm text-[#6B6878] font-medium pointer-events-none">
                      {currencySymbol}
                    </span>
                    <input
                      type="number"
                      min={0}
                      step={10}
                      value={baseRackRate || ""}
                      onChange={(e) => setBaseRackRate(parseFloat(e.target.value) || 0)}
                      className="w-full pl-9 pr-3 py-2.5 text-base font-semibold bg-[#F7F6F4] border border-[#DDDAE8] text-[#1C1C2E] focus:bg-white focus:outline-none focus:border-[#3D1A8C] transition-colors"
                    />
                  </div>

                  {/* Preset quick pills */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[11px] text-[#6B6878]">Presets:</span>
                    {[150, 250, 350, 500, 750].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setBaseRackRate(val)}
                        className={`text-[11px] px-2 py-0.5 border ${
                          baseRackRate === val
                            ? "bg-[#3D1A8C] text-white border-[#3D1A8C]"
                            : "bg-[#F7F6F4] text-[#6B6878] border-[#DDDAE8] hover:border-[#3D1A8C]"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input 2: OTA Commission % */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#1C1C2E]">
                      OTA Commission Rate
                    </label>
                    <span className="text-xs font-semibold text-[#3D1A8C]">
                      {otaCommissionPct}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min={5}
                    max={35}
                    step={0.5}
                    value={otaCommissionPct}
                    onChange={(e) => setOtaCommissionPct(parseFloat(e.target.value))}
                    className="w-full accent-[#3D1A8C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#6B6878] mt-1">
                    <span>5% (Preferred)</span>
                    <span>15% - 18% (Standard)</span>
                    <span>25%+ (High tier)</span>
                  </div>
                </div>

                {/* Input 3: STO Wholesale Discount % */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#1C1C2E]">
                      Tour Operator (STO) Wholesale Discount
                    </label>
                    <span className="text-xs font-semibold text-[#3D1A8C]">
                      {stoDiscountPct}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min={5}
                    max={35}
                    step={0.5}
                    value={stoDiscountPct}
                    onChange={(e) => setStoDiscountPct(parseFloat(e.target.value))}
                    className="w-full accent-[#3D1A8C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#6B6878] mt-1">
                    <span>5% (Fringe)</span>
                    <span>10% - 15% (Standard East Africa)</span>
                    <span>25% (Series Charter)</span>
                  </div>
                </div>

                {/* Input 4: Direct Payment Gateway Fee */}
                <div className="mb-6 pb-6 border-b border-[#DDDAE8]">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#1C1C2E]">
                      Direct Booking Gateway / Merchant Fee
                    </label>
                    <span className="text-xs font-semibold text-[#3D1A8C]">
                      {gatewayFeePct}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0.5}
                    max={5.0}
                    step={0.1}
                    value={gatewayFeePct}
                    onChange={(e) => setGatewayFeePct(parseFloat(e.target.value))}
                    className="w-full accent-[#3D1A8C] cursor-pointer"
                  />
                  <span className="text-[11px] text-[#6B6878] block mt-1">
                    Merchant processing deduction for Stripe, DPO, or Pesapal direct bookings.
                  </span>
                </div>

                {/* Input 5: Campaign & Promotion Stress Testing */}
                <div className="bg-[#F7F6F4] p-4 border border-[#DDDAE8]">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Sparkles className="h-3.5 w-3.5 text-[#7B5EA7]" />
                    <span className="text-xs uppercase tracking-wider font-bold text-[#1C1C2E]">
                      Promotional Stress Test
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] mb-1">
                        Promo Discount
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          min={0}
                          max={50}
                          value={promoDiscountPct || ""}
                          onChange={(e) => setPromoDiscountPct(parseFloat(e.target.value) || 0)}
                          className="w-full py-1.5 px-2 bg-white border border-[#DDDAE8] text-xs font-semibold focus:outline-none"
                        />
                        <span className="bg-[#DDDAE8] px-2 py-1.5 text-xs text-[#2D2D3A] font-semibold">
                          %
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] mb-1">
                        Applied Channel
                      </label>
                      <select
                        value={promoScope}
                        onChange={(e) => setPromoScope(e.target.value as PromoScope)}
                        className="w-full py-1.5 px-2 bg-white border border-[#DDDAE8] text-xs font-semibold focus:outline-none"
                      >
                        <option value="none">No Campaign</option>
                        <option value="global">All Channels</option>
                        <option value="direct">Direct Web Only</option>
                        <option value="booking">Booking.com Only</option>
                        <option value="expedia">Expedia Only</option>
                        <option value="sto">Tour Operators Only</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#6B6878] leading-tight">
                    Simulate how flash sales or unilateral channel promotions trigger rate parity alerts.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDDAE8] flex justify-between items-center text-xs text-[#6B6878]">
                  <span>Need an automated distribution audit?</span>
                  <Link
                    to="/contact"
                    className="text-[#3D1A8C] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Consult our team <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* ── RIGHT DASHBOARD COLUMN (7 COLS) ── */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Diagnostics Notification Alert Box */}
                <div
                  className={`p-5 border transition-all ${
                    diagnostics.status === "compliant"
                      ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                      : diagnostics.status === "warning"
                      ? "bg-amber-50/90 border-amber-300 text-amber-950"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {diagnostics.status === "compliant" ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : diagnostics.status === "warning" ? (
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertOctagon className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    )}

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs uppercase tracking-wider font-bold">
                          {diagnostics.status === "compliant"
                            ? "Rate Hierarchy Compliant"
                            : diagnostics.status === "warning"
                            ? "Channel Parity Imbalance Detected"
                            : "Critical Rate Parity & Contract Breach"}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 font-bold uppercase tracking-wider rounded-none bg-white/70">
                          {diagnostics.status}
                        </span>
                      </div>

                      {diagnostics.status === "compliant" ? (
                        <p className="text-xs leading-relaxed text-emerald-800">
                          Your channel distribution hierarchy is sound. Public OTA rates do not undercut your contracted tour operator (STO) wholesale net, and direct bookings preserve maximum net revenue margin without channel cannibalization.
                        </p>
                      ) : (
                        <div className="space-y-2 mt-2">
                          {diagnostics.issues.map((issue, idx) => (
                            <div key={idx} className="text-xs leading-relaxed bg-white/60 p-2.5 border border-black/5">
                              <strong className="block text-[11px] uppercase tracking-wide mb-0.5">
                                {issue.title}
                              </strong>
                              <span>{issue.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Channel Yield Output Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {calculatedChannels.map((channel) => {
                    const isDirect = channel.id === "direct";
                    return (
                      <div
                        key={channel.id}
                        className={`bg-white p-5 border relative transition-all ${
                          isDirect
                            ? "border-[#3D1A8C] ring-1 ring-[#3D1A8C]/20 shadow-sm"
                            : "border-[#DDDAE8] shadow-sm hover:border-[#6B6878]"
                        }`}
                      >
                        {isDirect && (
                          <span className="absolute top-0 right-0 bg-[#3D1A8C] text-white text-[9px] uppercase tracking-widest px-2.5 py-0.5 font-bold">
                            Highest Net Yield
                          </span>
                        )}

                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#6B6878] font-bold block">
                              {channel.tag}
                            </span>
                            <h4 className="font-display text-lg font-semibold text-[#1C1C2E]">
                              {channel.name}
                            </h4>
                          </div>
                        </div>

                        <div className="space-y-2.5 pt-2 border-t border-[#DDDAE8]/60">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-[#6B6878]">Public / Listed Price:</span>
                            <span className="font-medium text-[#1C1C2E]">
                              {formatPrice(channel.grossPrice)}
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-xs">
                            <span className="text-[#6B6878]">Fee / Commission:</span>
                            <span className="text-rose-600 font-medium">
                              -{formatPrice(channel.feeAmount)}
                            </span>
                          </div>

                          <div className="flex justify-between items-baseline pt-2 border-t border-[#DDDAE8]">
                            <div>
                              <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                                Net Realized Payout
                              </span>
                              <span className="text-xl font-bold font-sans text-[#1C1C2E]">
                                {formatPrice(channel.netRevenue)}
                              </span>
                            </div>

                            <div className="text-right">
                              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6B6878] block">
                                Retention
                              </span>
                              <span
                                className={`text-xs font-bold ${
                                  channel.retentionPct >= 90
                                    ? "text-emerald-600"
                                    : channel.retentionPct >= 80
                                    ? "text-sky-600"
                                    : "text-amber-600"
                                }`}
                              >
                                {channel.retentionPct.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 3. Channel Economics Ledger Table */}
                <div className="bg-white border border-[#DDDAE8] p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-[#3D1A8C]" />
                      <span className="font-display text-base font-semibold text-[#1C1C2E]">
                        Channel Economics & Margin Matrix
                      </span>
                    </div>
                    <span className="text-xs text-[#6B6878]">Per Room Night Sold</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#DDDAE8] bg-[#F7F6F4] text-[#6B6878] uppercase tracking-wider text-[10px]">
                          <th className="py-2.5 px-3 font-semibold">Channel</th>
                          <th className="py-2.5 px-3 font-semibold">Listed Rate</th>
                          <th className="py-2.5 px-3 font-semibold">Friction / Deductions</th>
                          <th className="py-2.5 px-3 font-semibold">Net Payout</th>
                          <th className="py-2.5 px-3 font-semibold text-right">Margin Retention</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DDDAE8]/60">
                        {calculatedChannels.map((c) => (
                          <tr key={c.id} className="hover:bg-[#F7F6F4]/50 transition-colors">
                            <td className="py-3 px-3 font-semibold text-[#1C1C2E]">
                              {c.name}
                            </td>
                            <td className="py-3 px-3 text-[#1C1C2E]">
                              {formatPrice(c.grossPrice)}
                            </td>
                            <td className="py-3 px-3 text-[#6B6878]">
                              {c.feeLabel} ({formatPrice(c.feeAmount)})
                            </td>
                            <td className="py-3 px-3 font-bold text-[#1C1C2E]">
                              {formatPrice(c.netRevenue)}
                            </td>
                            <td className="py-3 px-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <div className="w-16 bg-[#DDDAE8] h-1.5 overflow-hidden rounded-none hidden sm:block">
                                  <div
                                    className="bg-[#3D1A8C] h-full"
                                    style={{ width: `${Math.min(100, c.retentionPct)}%` }}
                                  />
                                </div>
                                <span className="font-semibold text-[#1C1C2E]">
                                  {c.retentionPct.toFixed(1)}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DDDAE8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6B6878]">
                    <span>
                      Direct web retention reflects net earnings after credit card merchant fees.
                    </span>
                    <span className="font-medium text-[#3D1A8C]">
                      Net Spread: {formatPrice(calculatedChannels[0].netRevenue - calculatedChannels[1].netRevenue)} / night advantage on Direct vs OTA
                    </span>
                  </div>
                </div>

                {/* 4. Interactive Channel Mix & Volume Scenario (Expandable) */}
                <div className="bg-white border border-[#DDDAE8] p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-[#3D1A8C]" />
                        <h4 className="font-display text-base font-semibold text-[#1C1C2E]">
                          Monthly Revenue & Commission Friction Simulator
                        </h4>
                      </div>
                      <p className="text-xs text-[#6B6878] mt-0.5">
                        Model total monthly cash flow and calculate savings from shifting OTA share to direct.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowVolumeModel(!showVolumeModel)}
                      className="px-3 py-1.5 text-xs font-semibold border border-[#DDDAE8] hover:bg-[#F7F6F4] text-[#3D1A8C] transition-colors"
                    >
                      {showVolumeModel ? "Hide Simulator" : "Expand Simulator"}
                    </button>
                  </div>

                  {showVolumeModel && (
                    <div className="mt-6 pt-5 border-t border-[#DDDAE8] space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] block mb-1">
                            Monthly Room Nights Sold
                          </label>
                          <input
                            type="number"
                            min={10}
                            step={20}
                            value={monthlyRoomNights}
                            onChange={(e) => setMonthlyRoomNights(parseInt(e.target.value) || 0)}
                            className="w-full py-1.5 px-3 bg-[#F7F6F4] border border-[#DDDAE8] text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] block mb-1">
                            Direct Share ({directSharePct}%)
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
                        </div>

                        <div>
                          <label className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6878] block mb-1">
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
                            Remaining STO wholesale: {volumeMetrics.stoShare}%
                          </span>
                        </div>
                      </div>

                      {/* Scenario Summary Banner */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F7F6F4] p-4 border border-[#DDDAE8]">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                            Gross Booked Volume
                          </span>
                          <span className="text-lg font-bold font-sans text-[#1C1C2E]">
                            {formatPrice(volumeMetrics.totalGross)}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                            Net Realized Revenue
                          </span>
                          <span className="text-lg font-bold font-sans text-emerald-700">
                            {formatPrice(volumeMetrics.totalNet)}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B6878] block">
                            Total Channel Deductions
                          </span>
                          <span className="text-lg font-bold font-sans text-rose-600">
                            -{formatPrice(volumeMetrics.totalCommissionFriction)}
                          </span>
                        </div>
                      </div>

                      {/* Direct Shift ROI Callout */}
                      <div className="bg-[#1C1C2E] text-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <span className="text-[11px] uppercase tracking-widest text-[#DDDAE8] font-semibold block">
                            Direct Channel Shift Opportunity
                          </span>
                          <p className="text-xs text-[#DDDAE8] mt-0.5">
                            Shifting just 15% of your current OTA volume to direct bookings recovers:
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold font-display text-emerald-400">
                            +{formatPrice(volumeMetrics.annualOpportunity)}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-[#DDDAE8] block">
                            Estimated Annual Profit Recovery
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── EDUCATIONAL FRAMEWORK SECTION ── */}
        <section className="py-16 md:py-20 bg-white border-t border-[#DDDAE8]">
          <div className="container-x">
            <div className="max-w-3xl mb-12">
              <span className="eyebrow block mb-2">Hospitality Advisory Framework</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#1C1C2E] font-semibold mb-4">
                The Mechanics of Channel Yield & Rate Integrity
              </h2>
              <p className="text-[#6B6878] text-base leading-relaxed">
                Operating a hotel, safari camp, or beachfront resort in East Africa requires balancing three distinct market forces. When distribution strategy breaks down, properties suffer severe margin leakage and damaged B2B partner relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-[#DDDAE8] p-6 bg-[#F7F6F4]">
                <div className="h-10 w-10 bg-[#3D1A8C] text-white flex items-center justify-center font-display text-lg font-bold mb-5">
                  01
                </div>
                <h3 className="font-display text-xl text-[#1C1C2E] font-semibold mb-3">
                  OTA Commission Friction & NetRevPAR
                </h3>
                <p className="text-sm text-[#6B6878] leading-relaxed mb-4">
                  OTAs provide indisputable global billboard visibility, but commissions between 15% and 25%+ significantly compress operating margins. Many properties inadvertently treat OTA gross revenue as earnings without factoring cost of acquisition.
                </p>
                <div className="text-xs font-semibold text-[#3D1A8C] pt-3 border-t border-[#DDDAE8]">
                  Key Metric: NetRevPAR vs Gross RevPAR
                </div>
              </div>

              <div className="border border-[#DDDAE8] p-6 bg-[#F7F6F4]">
                <div className="h-10 w-10 bg-[#7B5EA7] text-white flex items-center justify-center font-display text-lg font-bold mb-5">
                  02
                </div>
                <h3 className="font-display text-xl text-[#1C1C2E] font-semibold mb-3">
                  Contracted STO Wholesale Protection
                </h3>
                <p className="text-sm text-[#6B6878] leading-relaxed mb-4">
                  In East Africa's safari circuit (Masai Mara, Samburu, Serengeti, Amboseli), inbound tour operators generate high-length-of-stay package bookings. If OTAs display lower retail rates than an operator's wholesale net, wholesale partners will drop your property.
                </p>
                <div className="text-xs font-semibold text-[#7B5EA7] pt-3 border-t border-[#DDDAE8]">
                  Key Rule: Preserve STO Rate Floor
                </div>
              </div>

              <div className="border border-[#DDDAE8] p-6 bg-[#F7F6F4]">
                <div className="h-10 w-10 bg-[#1C1C2E] text-white flex items-center justify-center font-display text-lg font-bold mb-5">
                  03
                </div>
                <h3 className="font-display text-xl text-[#1C1C2E] font-semibold mb-3">
                  Fenced Direct Booking Advantages
                </h3>
                <p className="text-sm text-[#6B6878] leading-relaxed mb-4">
                  Strict rate parity agreements govern public broadcast rates. However, modern revenue leaders use private fenced channels (members' clubs, corporate negotiated rates, WhatsApp booking engines, value-add inclusions) to drive direct conversions compliantly.
                </p>
                <div className="text-xs font-semibold text-[#1C1C2E] pt-3 border-t border-[#DDDAE8]">
                  Key Strategy: Value-Add Parity Defense
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
                Rate Parity, Contracts & Channel Strategy
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
                Unlock Missing Revenue Across Your Distribution Channels
              </h2>

              <p className="text-[17px] text-[#DDDAE8] max-w-2xl mx-auto mb-10 leading-relaxed">
                Creek Oxley conducts exhaustive distribution audits for independent hotels, lodge operators, and safari hospitality groups across Kenya and East Africa. Let's fix your channel economics.
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
