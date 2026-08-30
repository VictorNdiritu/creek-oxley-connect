import React from "react";
import HotelLandingLayout, { LandingPageData } from "@/components/landing/HotelLandingLayout";

const data: LandingPageData = {
  title: "Is Your Hotel Performing? Property Performance Assessment | Creek Oxley",
  description: "A professional performance assessment for hotels, lodges and resorts in Kenya. Identify what is holding your property back and get a clear plan to fix it.",
  canonical: "https://creekoxley.com/hotel-performance",
  eyebrow: "For Hotel, Lodge and Resort Owners",
  headline: (
    <>
      Is your hotel
      <br />
      <em className="italic text-lavender">performing?</em>
    </>
  ),
  heroIntro:
    "Most underperforming properties do not have one big problem. They have ten small ones that nobody has named. A Creek Oxley property performance assessment finds them, ranks them, and tells you exactly what to fix first.",
  heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Hotel swimming pool and rooms at a Kenyan resort property",
  problemTitle: "The signs are usually there. The diagnosis usually is not.",
  problemIntro:
    "Owners often sense the property could do better long before they can prove it. The numbers exist, but they are scattered across bookings, bank statements and staff memories. Common warning signs we see:",
  problems: [
    "Occupancy is fine some months and empty in others, with no clear reason why.",
    "Revenue is flat while costs keep climbing, and nobody can say where the margin went.",
    "Online reviews mention the same service issues again and again.",
    "The property depends on one or two booking sources and has no plan if they dry up.",
    "Pricing has not been reviewed against the market in over a year.",
    "Staff are busy all day, yet guests still wait, complain and do not return.",
  ],
  helpTitle: "A clear-eyed assessment, then a plan you can act on.",
  helpIntro:
    "We go inside the operation: the books, the booking channels, the roster, the guest journey. You get a written assessment that ranks every issue by commercial impact, plus a practical plan with owners, timelines and expected outcomes.",
  services: [
    { title: "Performance Diagnostic", desc: "A structured review of occupancy, ADR, RevPAR, costs and guest satisfaction against comparable properties in your market." },
    { title: "Operational Audit", desc: "Department-by-department review of front office, housekeeping, F&B and maintenance to find where service and money leak." },
    { title: "Distribution Review", desc: "Assessment of your OTA listings, direct booking setup, rates and channel mix, with the gaps costing you bookings." },
    { title: "Financial Controls", desc: "Review of reporting, purchasing, payroll and cash controls so the numbers you see each month can be trusted." },
    { title: "Guest Experience Mapping", desc: "The full guest journey from search to checkout, benchmarked against what today's travellers actually expect." },
    { title: "Prioritised Action Plan", desc: "A ranked, costed plan: what to fix this month, this quarter and this year, and what each fix is worth." },
  ],
  benefitsTitle: "What a proper assessment gives you",
  benefits: [
    "A single, honest picture of how the property is really performing, not how it feels on a good week.",
    "The confidence to invest where it matters and stop spending where it does not.",
    "Early warning on small problems before they become expensive ones.",
    "A shared reference point for you, your manager and your accountant, so everyone works from the same facts.",
    "A concrete plan you can execute yourself, with us, or hand to your existing team.",
  ],
  objectionsTitle: "Questions owners ask us",
  objections: [
    { q: "\"My manager will feel undermined.\"", a: "We position the assessment as support, not surveillance. In most engagements the manager becomes our strongest ally, because they finally get the resources and clarity they have been asking for." },
    { q: "\"I already know what is wrong.\"", a: "You probably know some of it. What owners consistently tell us afterwards is that the ranking surprised them: the issue they assumed was biggest rarely was." },
    { q: "\"How long does it take?\"", a: "A typical property assessment takes two to three weeks from kickoff to the written report, depending on property size and how available the records are." },
    { q: "\"What does it cost?\"", a: "It depends on the size and complexity of the property. We scope it in a free initial conversation and give you a fixed fee before any work begins. No surprises." },
  ],
  ctaTitle: "Find out what your property is really capable of.",
  ctaText:
    "Start with a confidential conversation about your property. We will tell you honestly whether an assessment is worth your money, and what it would cover.",
  ctaButton: "Request a Property Assessment",
};

const HotelPerformancePage = () => <HotelLandingLayout data={data} />;
export default HotelPerformancePage;
