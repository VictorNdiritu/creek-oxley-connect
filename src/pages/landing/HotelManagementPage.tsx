import React from "react";
import HotelLandingLayout, { LandingPageData } from "@/components/landing/HotelLandingLayout";

const data: LandingPageData = {
  title: "Is Your Hotel Well Managed? Hotel Management Services | Creek Oxley",
  description: "Professional hotel management and operations support for owners in Kenya. Staffing, systems, guest experience and cost control that protect your investment.",
  canonical: "https://creekoxley.com/hotel-management",
  eyebrow: "Management & Operations for Property Owners",
  headline: (
    <>
      Is your hotel
      <br />
      <em className="italic text-lavender">well managed?</em>
    </>
  ),
  heroIntro:
    "Good management is invisible when it works and expensive when it does not. If you are fielding daily calls about staff, suppliers and guest complaints, the property is running you. Creek Oxley installs the systems, or runs the operation, so it runs itself.",
  heroImage: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Professional hotel staff preparing rooms at a managed property",
  problemTitle: "Most properties do not lack effort. They lack systems.",
  problemIntro:
    "Owner-managed properties usually run on the owner's memory and goodwill. That works until it does not. The operational warning signs we see most often:",
  problems: [
    "You cannot take a week away without something going wrong.",
    "Staff roles overlap or conflict, and performance depends on who shows up that day.",
    "Stock, cash and supplier costs are hard to reconcile, and small leakages add up.",
    "Guest experience varies wildly between shifts, weekends and seasons.",
    "Maintenance is reactive, so small faults become room-closing problems.",
    "Monthly reports arrive late, incomplete, or not at all, so you manage by rumour.",
  ],
  helpTitle: "Systems, people and oversight, sized to your property.",
  helpIntro:
    "Depending on what you need, we advise your existing team, restructure the operation, or take over management entirely. Either way, the goal is the same: a property that performs without you in the building.",
  services: [
    { title: "Operations Restructuring", desc: "Clear roles, rosters, SOPs and supervision routines for every department, documented so they outlive any individual." },
    { title: "Full Management Contracts", desc: "Creek Oxley runs the property on your behalf: staffing, service, revenue and reporting, under agreed performance terms." },
    { title: "Staffing & Training", desc: "Recruitment, smart staffing structures and practical training that lifts service quality without inflating the wage bill." },
    { title: "Cost & Procurement Control", desc: "Purchasing discipline, supplier renegotiation and stock controls that stop the quiet leakage most owners never see." },
    { title: "Guest Experience Standards", desc: "Service standards, quality checks and review management that turn inconsistent stays into consistent five-star ones." },
    { title: "Owner Reporting", desc: "A concise monthly pack: occupancy, revenue, costs, guest scores and actions. The truth about your asset, one email." },
  ],
  benefitsTitle: "What professional management gives back to you",
  benefits: [
    "Your time: the daily fires are handled by people whose job is to handle them.",
    "Consistency: guests get the same standard on a quiet Tuesday as on a full-house Saturday.",
    "Control: costs, cash and stock are tracked and reported, so leakage has nowhere to hide.",
    "A stronger team: clear roles, fair rosters and training that reduces turnover and improves service.",
    "Asset value: a well-run property with clean records is worth more to buyers, lenders and partners.",
  ],
  objectionsTitle: "Questions owners ask us",
  objections: [
    { q: "\"Does a management contract mean losing control of my property?\"", a: "No. You keep ownership and set the direction. Management contracts include agreed budgets, reporting and approval rights. You see everything; you just stop doing everything." },
    { q: "\"My property is small. Is professional management affordable?\"", a: "We scale the model: from a monthly advisory retainer with quarterly audits, to full management. Often the cost is recovered through procurement and staffing efficiencies alone." },
    { q: "\"What happens to my existing staff?\"", a: "We assess fairly and keep good people. Most teams improve quickly once roles, standards and supervision are clear. Changes are made only where performance genuinely requires it." },
    { q: "\"How do I know you will not just add overhead?\"", a: "Our engagements define measurable deliverables upfront: reports, standards, savings targets. If the value is not visible in the numbers, you will know, and so will we." },
  ],
  ctaTitle: "Own the property. Stop running it alone.",
  ctaText:
    "Tell us how your property is managed today and what is not working. We will recommend the lightest structure that fixes it, in a free, confidential conversation.",
  ctaButton: "Talk to Creek Oxley",
};

const HotelManagementPage = () => <HotelLandingLayout data={data} />;
export default HotelManagementPage;
