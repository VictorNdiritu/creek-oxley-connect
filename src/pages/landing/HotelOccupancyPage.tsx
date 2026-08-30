import React from "react";
import HotelLandingLayout, { LandingPageData } from "@/components/landing/HotelLandingLayout";

const data: LandingPageData = {
  title: "Are Your Rooms Staying Empty? Increase Hotel Occupancy | Creek Oxley",
  description: "Occupancy improvement for hotels, lodges and villas in Kenya. Marketing, distribution, positioning and demand generation that put more guests in your rooms.",
  canonical: "https://creekoxley.com/hotel-occupancy",
  eyebrow: "Occupancy Improvement for Property Owners",
  headline: (
    <>
      Are your rooms
      <br />
      <em className="italic text-lavender">staying empty?</em>
    </>
  ),
  heroIntro:
    "An empty room is revenue gone forever. It cannot be stored, discounted tomorrow or sold twice next week. If your occupancy is stuck, the problem is rarely demand. It is that demand cannot find you, or does not choose you. Creek Oxley fixes both.",
  heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Resort pool and rooms at a well-occupied hospitality property",
  problemTitle: "Low occupancy is a visibility and positioning problem.",
  problemIntro:
    "Travellers are booking properties like yours every day, mostly online, mostly in under twenty minutes of searching. If they are not booking yours, one or more of these is usually true:",
  problems: [
    "Your property is invisible or unconvincing on Booking.com, Expedia, Airbnb and Google.",
    "Photos and descriptions undersell the property, so browsers book the place that looks better.",
    "There is no marketing between peak seasons, so low season means near-empty weeks.",
    "Rates and availability are inconsistent across channels, costing you ranking and trust.",
    "Corporate, group, event and long-stay demand nearby is going to competitors by default.",
    "Past guests are never contacted again, so repeat and referral business never builds.",
  ],
  helpTitle: "Demand generation built for your property and market.",
  helpIntro:
    "We work on the three levers of occupancy: being found, being chosen, and being rebooked. The work is practical and measurable, not abstract brand talk.",
  services: [
    { title: "OTA & Channel Management", desc: "Complete, optimised listings on the channels that matter, managed for ranking, conversion and rate integrity." },
    { title: "Positioning & Differentiation", desc: "A clear answer to 'why this property, for this guest, at this price' that runs through every listing and advert." },
    { title: "Photography & Content Direction", desc: "Professional imagery and listing copy that show the property the way guests actually evaluate it." },
    { title: "Direct Booking Engine", desc: "A fast, credible booking website so guests who find you directly can confirm instantly, commission-free." },
    { title: "B2B & Group Demand", desc: "Structured outreach to corporates, NGOs, tour operators and event organisers that book blocks of rooms." },
    { title: "Guest Retention", desc: "Simple systems to capture guest details, request reviews and bring past guests back, the cheapest occupancy you will ever buy." },
  ],
  benefitsTitle: "What rising occupancy changes for you",
  benefits: [
    "Fixed costs spread over more room nights, so each additional booking improves profitability disproportionately.",
    "Better OTA rankings and reviews, which compound: visibility creates bookings, bookings create visibility.",
    "A base of corporate and repeat business that cushions you against seasonal dips.",
    "Predictable weekly occupancy you can staff and purchase against, instead of guessing.",
    "A property that is visibly busy, which itself attracts more bookings, events and restaurant traffic.",
  ],
  objectionsTitle: "Questions owners ask us",
  objections: [
    { q: "\"My location is the problem. Can marketing fix that?\"", a: "Location is fixed, but positioning is not. Almost every market has an underserved guest segment: business travellers, families, groups, long-stay. We find the segment your property can win." },
    { q: "\"I tried online marketing before and it did not work.\"", a: "Boosted posts and occasional photos are not a demand system. Occupancy improves when listings, pricing, reviews and sales outreach work together. That is what we install." },
    { q: "\"How soon will I see results?\"", a: "OTA and listing fixes can move bookings within weeks. B2B and repeat-guest pipelines typically build over a quarter. We set expectations honestly at the start." },
    { q: "\"Do you work with small properties?\"", a: "Yes. We work with villas, boutique lodges and mid-size hotels. The levers are the same; the plan is scaled to your property and budget." },
  ],
  ctaTitle: "Your rooms should be working as hard as you are.",
  ctaText:
    "Share your current occupancy and channels with us, confidentially. We will show you the two or three changes most likely to move it, before you spend a shilling on ads.",
  ctaButton: "Request an Occupancy Review",
};

const HotelOccupancyPage = () => <HotelLandingLayout data={data} />;
export default HotelOccupancyPage;
