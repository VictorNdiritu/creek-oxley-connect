import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import {
  categories,
  enquiryHref,
  propertyHref,
  type CategoryId,
  type Property,
} from "@/data/stayMeet";

/** Flat brand panel used until real photography is supplied. */
export const PropertyImage = ({
  property,
  category,
  className = "",
  tone = "light",
}: {
  property: Property;
  category?: CategoryId;
  className?: string;
  tone?: "light" | "dark";
}) => {
  const photo =
    (category && property.cardImage?.[category]) ||
    (property.image
      ? { src: property.image, alt: property.imageAlt ?? `${property.name}, ${property.location}` }
      : undefined);
  if (photo) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }
  const initials = property.name
    .replace(/,.*$/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      role="img"
      aria-label={`${property.name} — photography to be added`}
      className={`w-full h-full flex items-center justify-center ${
        tone === "dark" ? "bg-[#2A2A42]" : "bg-[#EBE8F2]"
      } ${className}`}
    >
      <span
        className={`font-display text-[72px] italic ${
          tone === "dark" ? "text-lavender" : "text-creekoxley/40"
        }`}
      >
        {initials}
      </span>
    </div>
  );
};

interface Props {
  property: Property;
  category: CategoryId;
  tone?: "light" | "dark";
}

const PropertyCard = ({ property, category, tone = "light" }: Props) => {
  const dark = tone === "dark";
  const cat = categories.find((c) => c.id === category)!;
  const mode = category === "conference" ? "conference" : "stay";
  const href = propertyHref(property);

  return (
    <article
      className={`group flex flex-col border ${
        dark ? "border-white/15 bg-white/[0.04]" : "border-rule bg-white"
      }`}
    >
      <Link to={href} className="block aspect-[4/3] overflow-hidden" aria-label={`Explore ${property.name}`}>
        <PropertyImage property={property} category={category} tone={tone} />
      </Link>
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <p className={`eyebrow mb-3 ${dark ? "!text-[#C9B8E8]" : ""}`}>{cat.title}</p>
        <h3 className={`font-display text-[28px] leading-[1.1] ${dark ? "!text-white" : ""}`}>
          {property.name}
        </h3>
        <p className={`mt-2 flex items-center gap-1.5 text-[14px] ${dark ? "text-silver" : "text-muted-ink"}`}>
          <MapPin className="h-3.5 w-3.5" /> {property.location}
        </p>
        <p className={`mt-4 text-[15px] leading-[1.7] flex-1 ${dark ? "text-[#DDDAE8]" : "text-body-ink"}`}>
          {property.blurb[category]}
        </p>
        <div className={`mt-6 pt-5 flex items-center justify-between border-t ${dark ? "border-white/15" : "border-rule"}`}>
          <Link
            to={href}
            className={`inline-flex items-center text-[14px] font-medium ${
              dark ? "text-white hover:text-[#C9B8E8]" : "text-creekoxley hover:text-lavender"
            }`}
          >
            Explore Property
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to={enquiryHref(mode, property.slug)}
            className={`text-[13px] underline underline-offset-4 ${
              dark ? "text-silver hover:text-white" : "text-muted-ink hover:text-creekoxley"
            }`}
          >
            {mode === "conference" ? "Request quotation" : "Enquire"}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
