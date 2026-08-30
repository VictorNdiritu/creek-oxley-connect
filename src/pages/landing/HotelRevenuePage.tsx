import React from "react";
import HotelLandingLayout, { LandingPageData } from "@/components/landing/HotelLandingLayout";

const data: LandingPageData = {
  title: "Could Your Hotel Earn More? Revenue Improvement | Creek Oxley",
  description: "Revenue improvement for Kenyan hotels, lodges and resorts. Pricing, distribution, sales and demand strategy that finds the revenue your property is leaving behind.",
  canonical: "https://creekoxley.com/hotel-revenue",
  eyebrow: "Revenue Improvement for Property Owners",
  headline: (
    <>
      Could your hotel
      <br />
      <em className="italic text-lavender">earn more?</em>
    </>
  ),
  heroIntro:
    "Two properties on the same street, with the same rooms, can earn wildly different incomes. The difference is rarely the building. It is pricing discipline, distribution and sales effort. Creek Oxley finds the revenue your property is leaving on the table.",
  heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Hotel reception lobby of a professionally managed property",
  problemTitle: "The revenue is there. The system to capture it often is not.",
  problemIntro:
    "Most independent properties in Kenya were priced once, at opening, and have been reacting ever since. Meanwhile the market moved. The patterns we find again and again:",
  problems: [
    "One flat rate all year, while competitors reprice for weekends, seasons and events.",
    "Heavy dependence on walk-ins and phone bookings, with weak or neglected OTA listings.",
    "Corporate and group business available nearby, but nobody is actively selling to it.",
    "Discounts given out of habit rather than strategy, eroding rate without filling rooms.",
    "No packages, upsells or add-ons, so every guest pays for a bed and nothing else.",
    "Bookings recorded in notebooks or spreadsheets, making real revenue analysis impossible.",
  ],
  helpTitle: "Revenue work that touches price, channel and sale.",
  helpIntro:
    "We treat revenue as a system: how you price, where you sell, and who is selling. Then we install the routines to keep it working after we leave.",
  services: [
    { title: "Pricing & Rate Strategy", desc: "Seasonal and event-based rate structures built from your actual demand patterns and competitor positioning." },
    { title: "OTA Setup & Optimisation", desc: "Professional Booking.com, Expedia and Airbnb listings with photography guidance, content and rate parity that converts browsers into bookers." },
    { title: "Direct Booking Development", desc: "A booking-ready website and enquiry handling process so you keep more of each booking and own the guest relationship." },
    { title: "Corporate & Group Sales", desc: "Identification and structured pursuit of corporate accounts, NGOs, government and group business in your catchment." },
    { title: "Packages & Ancillary Revenue", desc: "Meal plans, experiences, transport, events and conferences: revenue streams that raise the value of every occupied room." },
    { title: "Revenue Reporting", desc: "Simple weekly and monthly revenue dashboards so you can see occupancy, ADR and RevPAR moving, and why." },
  ],
  benefitsTitle: "What better revenue management looks like",
  benefits: [
    "Rates that reflect real demand instead of habit, so high seasons and events finally pay what they should.",
    "A wider, healthier channel mix that reduces dependence on any single source of bookings.",
    "More revenue per guest through packaging and upselling, without adding a single room.",
    "A sales pipeline of corporate and group business that fills midweek and low-season gaps.",
    "Clear numbers every month, so pricing decisions are made on evidence rather than instinct.",
  ],
  objectionsTitle: "Questions owners ask us",
  objections: [
    { q: "\"Will raising rates scare away my regulars?\"", a: "Revenue strategy is not just charging more. It is charging correctly: the right rate, to the right guest, at the right time. Often the fix is structure, not a blanket increase." },
    { q: "\"OTAs take big commissions. Why push them?\"", a: "Because an empty room earns nothing. We build OTAs as a demand engine while developing your direct channel alongside, so over time the mix shifts in your favour." },
    { q: "\"I do not have time to run a sales operation.\"", a: "That is the point of the engagement. We set up the targets, materials and routines, and can run the sales effort with your team until it is self-sustaining." },
    { q: "\"Can you guarantee a revenue increase?\"", a: "No honest advisor guarantees revenue. What we commit to is a rigorous diagnosis, a credible plan, and hands-on work to execute it. The improvement follows the work." },
  ],
  ctaTitle: "Stop guessing what your property could earn.",
  ctaText:
    "Tell us about your property and its current numbers. We will identify the most likely revenue gaps in a free initial conversation, before you commit to anything.",
  ctaButton: "Talk to Creek Oxley",
};

const HotelRevenuePage = () => <HotelLandingLayout data={data} />;
export default HotelRevenuePage;
