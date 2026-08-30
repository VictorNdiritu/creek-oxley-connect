import React from "react";
import HotelLandingLayout, { LandingPageData } from "@/components/landing/HotelLandingLayout";

const data: LandingPageData = {
  title: "Is Your Investment Paying Off? Hotel Turnaround | Creek Oxley",
  description: "Hotel turnaround services in Kenya for underperforming hotels, lodges and resorts. Restore occupancy, revenue and profitability, and make your investment pay.",
  canonical: "https://creekoxley.com/hotel-turnaround",
  eyebrow: "Turnaround for Underperforming Properties",
  headline: (
    <>
      Is your investment
      <br />
      <em className="italic text-lavender">paying off?</em>
    </>
  ),
  heroIntro:
    "You did not build or buy a hotel to subsidise it. If the property consumes more energy, cash and patience than it returns, something structural is wrong, and it will not fix itself. Creek Oxley specialises in turning underperforming hospitality assets around.",
  heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Well-appointed hotel room representing a recovering hospitality investment",
  problemTitle: "Underperformance compounds. So does delay.",
  problemIntro:
    "A struggling property rarely collapses overnight. It drifts: a few percentage points of occupancy here, a quiet rate cut there, maintenance deferred another year. By the time it shows in the bank balance, the drift has become the trend. Sound familiar?",
  problems: [
    "The property has not produced a real return on your invested capital for years.",
    "Occupancy and rates have been sliding, and each season's plan is 'hope this one is better'.",
    "Reviews are declining, and the property's reputation is now part of the problem.",
    "Costs were cut to survive, but the cuts damaged the guest experience and revenue fell further.",
    "Staff morale is low, good people leave, and training replacements eats the savings.",
    "You are considering selling, but the current numbers would price the asset at a loss.",
  ],
  helpTitle: "A turnaround is a sequence, not a slogan.",
  helpIntro:
    "We start by stopping the bleed, then rebuild revenue, then lock in the gains with systems and reporting. You see the plan, the milestones and the numbers at every stage.",
  services: [
    { title: "Turnaround Diagnostic", desc: "A rapid, honest assessment of cash, operations, market position and reputation: what is broken, what it costs, what it is worth to fix." },
    { title: "Stabilisation", desc: "Immediate actions on cash control, cost structure and service basics to stop the decline and protect what still works." },
    { title: "Revenue Rebuild", desc: "Repricing, redistribution, relaunched listings and active sales to restore occupancy and rate in the right order." },
    { title: "Repositioning", desc: "Where needed, a refreshed offer: target guest, packages, photography and story, so the market sees a property worth booking again." },
    { title: "Operational Reset", desc: "New SOPs, staffing structures and management routines so improvements hold after the initial push." },
    { title: "Investor Reporting", desc: "Milestone-based reporting against the turnaround plan, so you can track recovery in numbers, not promises." },
  ],
  benefitsTitle: "What a successful turnaround returns",
  benefits: [
    "A property that covers its costs and begins returning on the capital you invested.",
    "Stabilised occupancy and rate, built on systems rather than one good season.",
    "A repaired online reputation that keeps working for you in every search result.",
    "A motivated, restructured team with clear accountability instead of daily firefighting.",
    "Optionality: a performing asset you can hold, refinance, or sell from a position of strength.",
  ],
  objectionsTitle: "Questions owners ask us",
  objections: [
    { q: "\"Is my property too far gone?\"", a: "Rarely. Location and the physical asset usually retain more value than the current numbers suggest. The diagnostic will tell you honestly whether a turnaround is viable, and if it is not, we will say so." },
    { q: "\"How long does a turnaround take?\"", a: "Stabilisation typically shows within the first quarter. A full revenue and reputation rebuild usually runs six to eighteen months, depending on the property and market. We agree milestones upfront." },
    { q: "\"I have already spent a lot. Why spend more?\"", a: "That is the hardest question, and we respect it. Our first deliverable is the diagnostic with a costed plan, so you can judge the return on the turnaround spend before committing to the full programme." },
    { q: "\"Should I just sell instead?\"", a: "Sometimes that is the right answer, and we will tell you. But selling an underperforming asset locks in the loss. A structured turnaround is often the route to selling well, or to wanting to keep it." },
  ],
  ctaTitle: "Make the asset work, or know exactly why it cannot.",
  ctaText:
    "Start with a confidential diagnostic conversation about your property's numbers. You will leave with an honest view of what recovery would take and what it could return.",
  ctaButton: "Request a Property Assessment",
};

const HotelTurnaroundPage = () => <HotelLandingLayout data={data} />;
export default HotelTurnaroundPage;
