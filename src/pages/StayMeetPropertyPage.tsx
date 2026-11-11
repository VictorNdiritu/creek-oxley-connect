import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PropertyImage } from "@/components/staymeet/PropertyCard";
import EnquirySection from "@/components/staymeet/EnquirySection";
import {
  categories,
  enquiryHref,
  getProperty,
  propertyHref,
  type CategoryId,
  type EnquiryMode,
} from "@/data/stayMeet";

const SITE = "https://creekoxley.com";

const StayMeetPropertyPage = () => {
  const { slug = "" } = useParams();
  const property = getProperty(slug);

  // Unknown slug, or a property that links to its own existing page → back to the hub.
  if (!property || property.href) return <Navigate to="/dmc/stay-meet" replace />;

  const modes: EnquiryMode[] = Array.from(
    new Set(property.categories.map((c) => (c === "conference" ? "conference" : "stay")))
  ) as EnquiryMode[];
  const sister = property.sister ? getProperty(property.sister) : undefined;
  const catTitles = property.categories.map((c) => categories.find((x) => x.id === c)!.title);

  return (
    <>
      <SEOHead
        favicon="/dmc-favicon.png"
        title={`${property.name} | ${catTitles.join(" & ")} | Creek Oxley DMC`}
        description={`${property.name} in ${property.location.replace(", Kenya", "")}, Kenya — ${property.blurb[property.categories[0]]} Enquire through Creek Oxley DMC.`}
        canonical={`${SITE}${propertyHref(property)}`}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="bg-bone border-b border-rule">
          <div className="container-x py-14 md:py-20 grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="col-span-12 lg:col-span-6">
              <nav aria-label="Breadcrumb" className="text-[13px] text-muted-ink mb-8">
                <Link to="/" className="hover:text-creekoxley">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/dmc" className="hover:text-creekoxley">DMC</Link>
                <span className="mx-2">/</span>
                <Link to="/dmc/stay-meet" className="hover:text-creekoxley">Stay &amp; Meet</Link>
                <span className="mx-2">/</span>
                <span className="text-body-ink">{property.name}</span>
              </nav>
              <p className="eyebrow mb-5">{catTitles.join(" · ")}</p>
              <h1 className="font-display text-[44px] md:text-[64px] leading-[1.02] text-creekoxley">
                {property.name}
              </h1>
              <p className="mt-5 flex items-center gap-2 text-muted-ink">
                <MapPin className="h-4 w-4" /> {property.location}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {modes.map((m, i) => (
                  <Link
                    key={m}
                    to={enquiryHref(m, property.slug)}
                    className={
                      i === 0
                        ? "btn-primary"
                        : "inline-flex items-center justify-center px-8 py-[13px] text-[14px] font-medium text-creekoxley border border-creekoxley hover:bg-creekoxley hover:text-white transition-colors"
                    }
                  >
                    {m === "stay"
                      ? property.categories.includes("motel")
                        ? "Plan Your Stay"
                        : "Enquire About Accommodation"
                      : "Request Conference Quotation"}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 aspect-[4/3] overflow-hidden group">
              <PropertyImage property={property} category={property.categories[0]} />
            </div>
          </div>
        </section>

        {/* Intro */}
        {property.intro && (
          <section className="bg-white">
            <div className="container-x section-pad grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-14">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow mb-4">About the property</p>
                <div className="rule-accent" />
              </div>
              <div className="col-span-12 md:col-span-7 space-y-5">
                {property.intro.map((para, i) => (
                  <p key={i} className="text-[18px] text-body-ink leading-[1.75]">{para}</p>
                ))}
                {property.suitedTo && (
                  <ul className="pt-3 flex flex-wrap gap-2">
                    {property.suitedTo.map((s) => (
                      <li key={s} className="border border-rule px-3 py-1.5 text-[13px] text-creekoxley">{s}</li>
                    ))}
                  </ul>
                )}
                {sister && (
                  <p className="pt-2 text-[15px] text-muted-ink">
                    Sister property:{" "}
                    <Link to={propertyHref(sister)} className="text-creekoxley underline underline-offset-4">
                      {sister.name}
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Details — values render only once confirmed */}
        {property.details &&
          (Object.keys(property.details) as CategoryId[]).map((cat) => (
            <section key={cat} className="bg-bone border-y border-rule">
              <div className="container-x py-16 md:py-20">
                <div className="flex items-end justify-between gap-6 mb-10">
                  <h2 className="font-display text-[32px] md:text-[40px] text-creekoxley">
                    {cat === "conference" ? "Conference & event facilities" : "Accommodation & experience"}
                  </h2>
                </div>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {property.details![cat]!.map((d) => (
                    <div key={d.label} className="grid grid-cols-3 gap-4 border-t border-rule py-5">
                      <dt className="eyebrow col-span-1 pt-1">{d.label}</dt>
                      <dd className="col-span-2 text-[16px]">
                        {d.value ? (
                          <span className="text-body-ink">{d.value}</span>
                        ) : (
                          <span className="text-muted-ink">
                            Full details on request —{" "}
                            <Link
                              to={enquiryHref(cat === "conference" ? "conference" : "stay", property.slug)}
                              className="text-creekoxley underline underline-offset-4"
                            >
                              enquire
                            </Link>
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ))}

        {/* Gallery */}
        {property.gallery && property.gallery.length > 0 && (
          <section className="bg-white">
            <div className="container-x section-pad">
              <p className="eyebrow mb-4">Gallery</p>
              <h2 className="font-display text-[32px] md:text-[40px] text-creekoxley mb-12">
                A look at {property.name.replace(/,.*$/, "")}
              </h2>
              {Array.from(new Set(property.gallery.map((g) => g.group))).map((group) => {
                const imgs = property.gallery!.filter((g) => g.group === group);
                const n = imgs.length;
                const cols =
                  n === 1
                    ? "grid-cols-1"
                    : n === 2 || n === 4
                    ? "grid-cols-2"
                    : "grid-cols-2 lg:grid-cols-3";
                return (
                  <div key={group} className="mb-12 last:mb-0">
                    <h3 className="eyebrow mb-4 pb-3 border-b border-rule">{group}</h3>
                    <div className={`grid ${cols} gap-3 md:gap-4`}>
                      {imgs.map((g) => (
                        <div
                          key={g.src}
                          className={`overflow-hidden bg-bone ${
                            n === 1 ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3]"
                          }`}
                        >
                          <img
                            src={g.src}
                            alt={g.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <EnquirySection
          key={property.slug}
          defaultMode={modes[0]}
          defaultProperty={property.slug}
          modes={modes}
          heading={<>Enquire about<br /><em className="italic">{property.name.replace(/,.*$/, "")}.</em></>}
        />

        <Footer />
      </div>
    </>
  );
};

export default StayMeetPropertyPage;
