import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/staymeet/PropertyCard";
import EnquirySection from "@/components/staymeet/EnquirySection";
import {
  audiences,
  byCategory,
  categories,
  enquiryHref,
  motelValues,
  properties,
  propertyHref,
  type EnquiryMode,
} from "@/data/stayMeet";
import kiluluPool from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32 (3).jpeg";
import trademarkPool from "@/assets/Trademark Hotel Africa - Pool.jpg";
import luxoraHero from "@/assets/luxora hotel photos/hero-hotel.jpg";

const SITE = "https://creekoxley.com";

const StayMeetPage = () => {
  const [params] = useSearchParams();
  const { hash } = useLocation();

  const type: EnquiryMode = params.get("type") === "conference" ? "conference" : "stay";
  const property = params.get("property") ?? "";

  // Smooth-scroll to #anchors (router doesn't do this on its own)
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(
      () => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }),
      60
    );
    return () => clearTimeout(t);
  }, [hash, params]);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Creek Oxley Stay & Meet portfolio",
    itemListElement: properties.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE}${propertyHref(p)}`,
    })),
  };

  const luxury = byCategory("luxury");
  const motels = byCategory("motel");
  const venues = byCategory("conference");

  return (
    <>
      <SEOHead
        favicon="/dmc-favicon.png"
        title="Stay & Meet | Luxury Stays, Creek Motels & Conference Venues | Creek Oxley DMC"
        description="Stay & Meet by Creek Oxley DMC: luxury hotels and private villas, Creek Motels, and conference venues across Kenya. Enquire for accommodation, meetings and events."
        canonical={`${SITE}/dmc/stay-meet`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ───────── HERO ───────── */}
        <section className="bg-bone border-b border-rule">
          <div className="container-x py-16 md:py-24 grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="col-span-12 lg:col-span-6">
              <nav aria-label="Breadcrumb" className="text-[13px] text-muted-ink mb-8">
                <Link to="/" className="hover:text-creekoxley">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/dmc" className="hover:text-creekoxley">DMC</Link>
                <span className="mx-2">/</span>
                <span className="text-body-ink">Stay &amp; Meet</span>
              </nav>
              <p className="eyebrow mb-6">Creek Oxley DMC · Stay &amp; Meet</p>
              <h1 className="font-display text-[44px] md:text-[68px] leading-[1.02] text-creekoxley">
                Stay Better.
                <br />
                Meet Better.
                <br />
                <em className="italic">Explore More.</em>
              </h1>
              <p className="mt-8 text-[18px] text-muted-ink max-w-xl leading-[1.75]">
                Discover carefully selected accommodation and conference destinations through
                Creek Oxley. From luxury hotels and private villas to convenient motel stays
                and professional conference venues, we connect you to the right spaces for
                every journey and occasion.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#portfolio" className="btn-primary">Explore Our Portfolio</a>
                <Link
                  to={enquiryHref("stay")}
                  className="inline-flex items-center justify-center px-8 py-[13px] text-[14px] font-medium text-creekoxley border border-creekoxley hover:bg-creekoxley hover:text-white transition-colors"
                >
                  Plan Your Stay
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 grid grid-cols-6 grid-rows-2 gap-3 h-[380px] md:h-[520px]">
              <img
                src={kiluluPool}
                alt="Kilulu Luxury Island Villa pool overlooking the Indian Ocean in Watamu"
                className="col-span-4 row-span-2 w-full h-full object-cover"
                decoding="async"
              />
              <img
                src={trademarkPool}
                alt="TradeMark Hotel Africa rooftop pool in Nairobi"
                className="col-span-2 row-span-1 w-full h-full object-cover"
                decoding="async"
              />
              <img
                src={luxoraHero}
                alt="Luxora Hotel exterior in Lodwar, northern Kenya"
                className="col-span-2 row-span-1 w-full h-full object-cover"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* ───────── SUB-NAV ───────── */}
        <div id="portfolio" className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-rule scroll-mt-0">
          <div className="container-x flex items-center gap-6 md:gap-10 overflow-x-auto whitespace-nowrap h-14">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.anchor}`}
                className="text-[14px] font-medium text-body-ink hover:text-creekoxley"
              >
                <span className="text-lavender mr-2">{c.number}</span>
                {c.title}
              </a>
            ))}
            <a href="#enquire" className="ml-auto text-[14px] font-medium text-creekoxley">
              Enquire →
            </a>
          </div>
        </div>

        {/* ───────── 01 LUXURY STAYS ───────── */}
        <section id="luxury-stays" className="bg-white scroll-mt-16">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14 mb-14">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-4">{categories[0].number} — {categories[0].kicker}</p>
                <h2 className="font-display text-[40px] md:text-[56px] leading-[1.05] text-creekoxley">
                  {categories[0].title}
                </h2>
              </div>
              <p className="col-span-12 md:col-span-6 md:col-start-7 text-[17px] text-muted-ink leading-[1.75] self-end">
                {categories[0].summary} Tribe Hotel and TradeMark Hotel are sister properties,
                presented in one luxury portfolio with their own distinct profiles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {luxury.map((p) => (
                <PropertyCard key={p.slug} property={p} category="luxury" />
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 02 CREEK MOTELS ───────── */}
        <section id="creek-motels" className="bg-bone border-y border-rule scroll-mt-16">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14 mb-14">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-4">{categories[1].number} — {categories[1].kicker}</p>
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-14 w-14 shrink-0 bg-creekoxley text-white flex items-center justify-center font-display text-[26px] italic"
                  >
                    CM
                  </span>
                  <h2 className="font-display text-[40px] md:text-[56px] leading-[1.05] text-creekoxley">
                    {categories[1].title}
                  </h2>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
                <p className="text-[17px] text-muted-ink leading-[1.75]">
                  {categories[1].summary} Creek Motels is a recognisable accommodation brand
                  under Creek Oxley, with each property carrying its own photography and
                  character.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {motelValues.map((v) => (
                    <li key={v} className="border border-creekoxley/30 bg-white px-3 py-1.5 text-[13px] text-creekoxley">
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motels.map((p) => (
                <PropertyCard key={p.slug} property={p} category="motel" />
              ))}
              <div className="border border-dashed border-creekoxley/40 flex flex-col justify-center p-8 min-h-[260px]">
                <p className="eyebrow mb-3">The network is growing</p>
                <p className="font-display text-[26px] leading-[1.15] text-creekoxley">
                  More Creek Motels destinations to follow.
                </p>
                <Link to={enquiryHref("stay")} className="mt-5 text-[14px] font-medium text-creekoxley underline underline-offset-4">
                  Ask about upcoming locations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 03 CONFERENCES & EVENTS ───────── */}
        <section id="conferences-events" className="bg-ink text-white scroll-mt-16">
          <div className="container-x section-pad">
            <div className="grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14 mb-14">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-4 !text-[#C9B8E8]">{categories[2].number} — {categories[2].kicker}</p>
                <h2 className="font-display text-[40px] md:text-[56px] leading-[1.05] !text-white">
                  {categories[2].title}
                </h2>
              </div>
              <p className="col-span-12 md:col-span-6 md:col-start-7 text-[17px] text-[#DDDAE8] leading-[1.75] self-end">
                {categories[2].summary} Each venue has its own profile and facilities, so you
                can match the space to the occasion.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venues.map((p) => (
                <PropertyCard key={p.slug} property={p} category="conference" tone="dark" />
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow !text-[#C9B8E8] mb-3">Who we host</p>
                <p className="font-display text-[28px] leading-[1.15] !text-white">
                  A convenient partner for organisations.
                </p>
              </div>
              <ul className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                {audiences.map((a) => (
                  <li key={a} className="text-[15px] text-[#DDDAE8] border-t border-white/15 pt-3">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <Link to={enquiryHref("conference")} className="inline-flex items-center justify-center bg-white text-ink px-8 py-[14px] text-[14px] font-medium hover:bg-[#DDDAE8] transition-colors">
                Request Conference Quotation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── ENQUIRY ───────── */}
        <EnquirySection defaultMode={type} defaultProperty={property} />

        <Footer />
      </div>
    </>
  );
};

export default StayMeetPage;
