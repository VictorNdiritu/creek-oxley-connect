import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Settings, Users, ClipboardList, Star, CheckCircle,
  ChevronDown, Phone, Mail, Shield, Clock, Layers, AlertCircle
} from "lucide-react";

const faqData = [
  {
    q: "We have a GM - isn't that the same as management consulting?",
    a: "No. A GM manages the day-to-day. We assess whether the management structure is working - including whether the GM has the right tools, support and direction from ownership. Often the problem isn't the individual, it's the system around them."
  },
  {
    q: "Our staff turnover is high. Can you help?",
    a: "Yes. High turnover is almost always a symptom of something - poor leadership, compensation misalignment, weak culture or unclear expectations. We help identify the root cause and build a strategy to address it."
  },
  {
    q: "How do you assess operations without disrupting the team?",
    a: "We work professionally and discreetly. Our assessments are structured, and we are experienced in working alongside operating teams without creating alarm or disruption to the guest experience."
  },
  {
    q: "We're a small property. Do you work with smaller operations?",
    a: "Yes. Good management and systems matter at every scale. A 12-room guesthouse needs clear processes, the right roles and capable leadership just as much as a 100-room hotel."
  },
  {
    q: "Do you offer interim management?",
    a: "In some cases, yes. If a property is in a critical transition - management departure, ownership change, pre-opening - Creek Oxley can provide interim management support while a permanent solution is found."
  },
];

const HotelManagementPage = () => {
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
        title="Is Your Hotel Well Managed? | Hotel Management Consulting - Creek Oxley"
        description="Creek Oxley helps hotel owners in Kenya assess and improve operations, management, staffing, guest experience and cost control for stronger property performance."
        canonical="https://creekoxley.com/hotel-management"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          <div className="relative container-x py-24 md:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow !text-lavender mb-5">Hotel Management Consulting</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                Is Your Hotel<br />
                <span style={{ color: "#7B5EA7" }}>Well Managed?</span>
              </h1>
              <p className="text-[18px] text-silver leading-relaxed mb-10 max-w-2xl">
                A hotel can be full of potential and still underperform if the management isn't right. Poor operations, weak staffing, inconsistent guest experience and spiralling costs are management problems - not market problems. Creek Oxley helps owners see and solve them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-[15px] px-8 py-4">
                  Request a Management Review →
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
              "Most hotel owners know what the results are. Fewer know why they're getting them. The answer is almost always in the management and operations."
            </p>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">The management problem</p>
                <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-6">
                  When Operations Are the Source<br />of the Problem
                </h2>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  Many hotel owners find themselves in a frustrating position: they've invested significantly in their property, they're generating bookings, but something in the operation is dragging results down. Costs are higher than they should be. Guests aren't returning. Staff keep leaving. The GM is busy but things aren't improving.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed mb-5">
                  These are management and operational problems. They don't resolve themselves. And in most cases, the owner doesn't have the hospitality management expertise to diagnose them precisely - which is exactly where Creek Oxley adds value.
                </p>
                <p className="text-body-ink text-[16px] leading-relaxed">
                  We review how your property is being managed, identify the specific gaps, and give you a clear picture of what needs to change and how to change it.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-sans font-semibold text-[13px] uppercase tracking-wider text-muted-ink mb-3">Signs of a management problem</p>
                {[
                  { icon: AlertCircle, text: "Costs keep rising without a clear reason" },
                  { icon: AlertCircle, text: "Guest reviews are inconsistent or declining" },
                  { icon: AlertCircle, text: "High staff turnover you can't seem to stop" },
                  { icon: AlertCircle, text: "Managers are reactive, not proactive" },
                  { icon: AlertCircle, text: "No SOPs - staff do things differently every time" },
                  { icon: AlertCircle, text: "The owner is managing more than the manager is" },
                  { icon: AlertCircle, text: "Maintenance issues that keep recurring" },
                  { icon: AlertCircle, text: "F&B is losing money or underperforming" },
                  { icon: AlertCircle, text: "You don't receive useful management reports" },
                  { icon: AlertCircle, text: "The property feels chaotic, not well-run" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-rule last:border-0">
                    <item.icon className="h-4 w-4 text-creekoxley flex-shrink-0" />
                    <span className="text-[14px] text-body-ink">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section-pad bg-bone">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-4">Management services</p>
              <h2 className="font-display text-4xl md:text-5xl text-creekoxley mb-4">
                How Creek Oxley Improves Your Operations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Settings,
                  title: "Operations Audit & Review",
                  desc: "A systematic review of all departments - front office, housekeeping, F&B, maintenance, security - assessing processes, standards, performance and compliance."
                },
                {
                  icon: Users,
                  title: "Staffing & Team Structure",
                  desc: "Reviewing your team structure, role clarity, compensation alignment, and whether you have the right people in the right positions doing the right things."
                },
                {
                  icon: ClipboardList,
                  title: "SOPs & Operating Standards",
                  desc: "Developing or strengthening standard operating procedures, service standards and operational checklists to create consistency across the property."
                },
                {
                  icon: Star,
                  title: "Guest Experience Improvement",
                  desc: "Assessing the guest journey from reservation to checkout and identifying the gaps that lead to poor reviews, low satisfaction and reduced repeat business."
                },
                {
                  icon: Shield,
                  title: "Cost Control & Financial Management",
                  desc: "Reviewing departmental costs, procurement, payroll ratios and overhead structure - and identifying where costs can be reduced without impacting quality."
                },
                {
                  icon: Layers,
                  title: "Management Systems & Reporting",
                  desc: "Reviewing what management data is available, how it's being used, and implementing or improving PMS, reporting and operational management tools."
                },
                {
                  icon: Clock,
                  title: "Interim Management Support",
                  desc: "Where a property needs direct management support - between GMs, during a turnaround, or in a critical transition period - we can provide experienced interim oversight."
                },
                {
                  icon: Users,
                  title: "GM Performance & Coaching",
                  desc: "Working with existing general managers to improve their performance, decision-making and relationship with ownership - before replacing them becomes necessary."
                },
                {
                  icon: CheckCircle,
                  title: "Owner–Management Alignment",
                  desc: "Clarifying expectations, KPIs and communication between property owners and management teams to reduce conflict and improve accountability."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-rule p-7 hover:border-lavender transition-colors">
                  <div className="h-10 w-10 bg-creekoxley/10 flex items-center justify-center mb-5">
                    <item.icon className="h-5 w-5 text-creekoxley" />
                  </div>
                  <h3 className="font-display text-xl text-creekoxley mb-3">{item.title}</h3>
                  <p className="text-[13px] text-muted-ink leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROOF ── */}
        <section className="section-pad bg-ink text-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow !text-lavender mb-4">Our experience</p>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                  Operational Expertise From Inside the Industry
                </h2>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  Creek Oxley's management consulting is grounded in direct hospitality management experience. We've operated hotels and lodges, built teams, managed GM performance, dealt with owner expectations, and navigated the operational realities of Kenyan hospitality firsthand.
                </p>
                <p className="text-silver text-[16px] leading-relaxed mb-5">
                  That means when we assess your property's management, we know what good management looks like - and we can see the signs of poor management quickly, before they become expensive.
                </p>
                <p className="text-silver text-[16px] leading-relaxed">
                  We also understand the owner's perspective. Our advice is always oriented toward what actually improves the property for the person who invested in it.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Departmental Operations", detail: "Front office · Housekeeping · F&B · Maintenance · Security" },
                  { label: "People & Culture", detail: "Hiring · Training · Performance · Retention · Culture" },
                  { label: "Systems & Processes", detail: "PMS · SOPs · Reporting · Compliance · Technology" },
                  { label: "Financial Oversight", detail: "Budgeting · Cost control · Procurement · Payroll management" },
                ].map((item, i) => (
                  <div key={i} className="border border-silver/20 p-5">
                    <div className="font-sans font-semibold text-[15px] text-white mb-1">{item.label}</div>
                    <div className="text-[12px] text-silver">{item.detail}</div>
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
              Questions About Management Consulting
            </h2>
            <div className="space-y-2">
              {faqData.map((item, i) => (
                <div key={i} className="border border-rule bg-white">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    id={`faq-mgmt-${i}`}
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
            <p className="eyebrow !text-white/60 mb-4">Let's look at your operation</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Request a Hotel Management Review
            </h2>
            <p className="text-white/80 text-[16px] leading-relaxed mb-10">
              If you suspect your property's management isn't where it needs to be - or you already know it isn't - talk to Creek Oxley. We'll assess it honestly and give you a clear picture of what needs to change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-creekoxley font-sans font-semibold px-8 py-4 text-[15px] hover:bg-bone transition-colors">
                <Mail className="h-4 w-4" /> Request a Management Review
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

export default HotelManagementPage;
