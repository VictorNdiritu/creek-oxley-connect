/**
 * Stay & Meet portfolio — single source of truth.
 *
 * HOW TO ADD A PROPERTY
 * 1. Add an entry to `properties` below (copy an existing one).
 * 2. Put it in one or more categories: "luxury" | "motel" | "conference".
 * 3. Either set `href` (link to an existing page) or leave it out to get an
 *    auto-generated profile at /dmc/stay-meet/<slug>.
 * 4. Add a photo by importing it at the top and setting `image` / `imageAlt`.
 *
 * RULE: only put verified facts in `intro` and `details[].value`. Anything left
 * undefined renders as "Details on request" — never as an invented claim.
 */

import kiluluPool from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32 (3).jpeg";
import trademarkPool from "@/assets/Trademark Hotel Africa - Pool.jpg";
import luxoraHero from "@/assets/luxora hotel photos/hero-hotel.jpg";

export type CategoryId = "luxury" | "motel" | "conference";

export interface PropertyDetail {
  label: string;
  /** Leave undefined until confirmed — the UI shows "Details on request". */
  value?: string;
}

export interface Property {
  slug: string;
  name: string;
  location: string;
  categories: CategoryId[];
  /** Short card copy, per category the property appears in. */
  blurb: Partial<Record<CategoryId, string>>;
  /** Existing page to link to. Omit to use the generated profile page. */
  href?: string;
  image?: string;
  imageAlt?: string;
  /** Profile-page intro paragraphs (verified copy only). */
  intro?: string[];
  /** Profile-page detail slots, per category. */
  details?: Partial<Record<CategoryId, PropertyDetail[]>>;
  /** Suited-to tags (positioning only, not facility claims). */
  suitedTo?: string[];
  /** Cross-reference shown on the profile page. */
  sister?: string;
}

export const categories: {
  id: CategoryId;
  number: string;
  anchor: string;
  title: string;
  kicker: string;
  summary: string;
}[] = [
  {
    id: "luxury",
    number: "01",
    anchor: "luxury-stays",
    title: "Luxury Stays",
    kicker: "Premium hotels and private villas",
    summary:
      "Hand-picked hotels and a private coastal villa, represented by Creek Oxley for guests who expect the very best.",
  },
  {
    id: "motel",
    number: "02",
    anchor: "creek-motels",
    title: "Creek Motels",
    kicker: "A growing network across Kenya",
    summary:
      "Comfortable, convenient and professionally managed accommodation, opening destination by destination.",
  },
  {
    id: "conference",
    number: "03",
    anchor: "conferences-events",
    title: "Conferences & Events",
    kicker: "Venues for meetings, workshops and events",
    summary:
      "A curated portfolio of venues for corporate meetings, conferences, retreats, workshops and events.",
  },
];

export const properties: Property[] = [
  // ───────────── LUXURY STAYS ─────────────
  {
    slug: "tribe-hotel-nairobi",
    name: "Tribe Hotel",
    location: "Nairobi, Kenya",
    categories: ["luxury", "conference"],
    blurb: {
      luxury:
        "A premium luxury address in Nairobi, presented alongside sister property Trademark Hotel.",
      conference:
        "A premium destination for conferencing, corporate events and delegate accommodation in Nairobi.",
    },
    sister: "trademark-hotel-nairobi",
    intro: [
      "Tribe Hotel is a premium luxury accommodation option in Nairobi, represented by Creek Oxley within the Luxury Stays portfolio.",
      "Tribe Hotel and TradeMark Hotel are sister properties. Each keeps its own distinct profile, and both are available for accommodation, corporate stays and conferencing enquiries through Creek Oxley.",
    ],
    details: {
      luxury: [
        { label: "Rooms & suites" },
        { label: "Hospitality & guest experience" },
        { label: "Dining experiences" },
        { label: "Facilities & amenities" },
      ],
      conference: [
        { label: "Conference facilities" },
        { label: "Meeting rooms" },
        { label: "Corporate events" },
        { label: "Delegate accommodation" },
      ],
    },
    suitedTo: ["Corporate accommodation", "Conferences", "Corporate events"],
  },
  {
    slug: "trademark-hotel-nairobi",
    name: "TradeMark Hotel",
    location: "Nairobi, Kenya",
    categories: ["luxury", "conference"],
    href: "/dmc/nairobi",
    image: trademarkPool,
    imageAlt: "TradeMark Hotel Africa rooftop pool in Nairobi",
    blurb: {
      luxury:
        "Sister property to Tribe Hotel — a premier city hospitality experience in Nairobi.",
      conference:
        "A premium Nairobi destination for conferences, corporate events and delegate stays.",
    },
    sister: "tribe-hotel-nairobi",
  },
  {
    slug: "kilulu-luxury-island-villa",
    name: "Kilulu Luxury Island Villa",
    location: "Watamu, Kenya",
    categories: ["luxury"],
    href: "/dmc/watamu",
    image: kiluluPool,
    imageAlt:
      "Kilulu Luxury Island Villa pool overlooking the Indian Ocean in Watamu",
    blurb: {
      luxury:
        "A 372 m² private luxury villa on the Kenyan coast, with a private pool and beach access.",
    },
  },

  // ───────────── CREEK MOTELS ─────────────
  {
    slug: "creek-motels-lodwar",
    name: "Creek Motels, Lodwar",
    location: "Lodwar, Kenya",
    categories: ["motel"],
    blurb: {
      motel:
        "Comfortable, convenient and professionally managed accommodation in Lodwar.",
    },
    intro: [
      "Creek Motels, Lodwar is the first property in the Creek Motels collection — quality accommodation built around comfort, convenience, accessibility and value for money.",
      "Full property information, photography and room details are being finalised. In the meantime, enquire with Creek Oxley and our team will respond directly.",
    ],
    details: {
      motel: [
        { label: "Room categories" },
        { label: "Accommodation features" },
        { label: "Amenities & facilities" },
        { label: "Location & directions" },
        { label: "Guest experience" },
        { label: "Rates" },
      ],
    },
    suitedTo: ["Comfort", "Convenience", "Accessibility", "Value for money"],
  },

  // ───────────── CONFERENCES & EVENTS ─────────────
  {
    slug: "luxora-hotel-lodwar",
    name: "Luxora Hotel",
    location: "Lodwar, Kenya",
    categories: ["conference"],
    href: "/dmc/lodwar",
    image: luxoraHero,
    imageAlt: "Luxora Hotel exterior in Lodwar, northern Kenya",
    blurb: {
      conference:
        "A conference and accommodation venue in Lodwar for meetings, workshops and group stays.",
    },
  },
  {
    slug: "kongoni-camp-nanyuki",
    name: "Kongoni Camp",
    location: "Nanyuki, Kenya",
    categories: ["conference"],
    blurb: {
      conference:
        "A destination for corporate retreats, workshops, seminars and events in Nanyuki.",
    },
    intro: [
      "Kongoni Camp, Nanyuki is a conference, meetings and events destination represented by Creek Oxley.",
      "It is positioned for corporate retreats, workshops, seminars and event hosting, with accommodation and outdoor hospitality experiences for groups.",
    ],
    details: {
      conference: [
        { label: "Conference & meeting facilities" },
        { label: "Accommodation options" },
        { label: "Outdoor & hospitality experiences" },
        { label: "Capacity" },
      ],
    },
    suitedTo: [
      "Corporate retreats",
      "Workshops",
      "Seminars",
      "Event hosting",
    ],
  },
];

export const audiences = [
  "Corporates",
  "NGOs",
  "Government institutions",
  "International organisations",
  "Event planners",
  "Corporate travel managers",
  "Training institutions",
  "International delegations",
  "Workshop & seminar organisers",
];

export const motelValues = [
  "Comfort",
  "Convenience",
  "Accessibility",
  "Quality accommodation",
  "Value for money",
];

// ───────────── helpers ─────────────
export const byCategory = (id: CategoryId) =>
  properties.filter((p) => p.categories.includes(id));

export const getProperty = (slug: string) =>
  properties.find((p) => p.slug === slug);

/** Where "Explore Property" goes. */
export const propertyHref = (p: Property) =>
  p.href ?? `/dmc/stay-meet/${p.slug}`;

export type EnquiryMode = "stay" | "conference";

export const enquiryHref = (mode: EnquiryMode, slug?: string) => {
  const q = new URLSearchParams({ type: mode });
  if (slug) q.set("property", slug);
  return `/dmc/stay-meet?${q.toString()}#enquire`;
};

/** Properties offered in each enquiry form's "Preferred property" list. */
export const enquiryProperties = (mode: EnquiryMode) =>
  properties.filter((p) =>
    p.categories.some((c) =>
      mode === "stay" ? c === "luxury" || c === "motel" : c === "conference"
    )
  );

/** Contact details already used across the DMC pages. */
export const contact = {
  phone: "+254 110 463 062",
  phoneHref: "tel:+254110463062",
  email: "dmc@creekoxley.com",
};
