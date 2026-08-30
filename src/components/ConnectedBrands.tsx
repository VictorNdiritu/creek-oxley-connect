import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ConnectedBrands = () => {
  const items = [
    {
      tag: "Division 01",
      name: "Destination Management",
      lede: "We promote and operate hospitality businesses on international platforms - exhibitions, trade, distribution and brand stewardship across East Africa.",
      points: ["Hospitality brand management", "International trade exhibitions", "Distribution & partnerships", "Operating standards & QA"],
      to: "/dmc",
    },
    {
      tag: "Division 02",
      name: "Smart Staffing",
      lede: "Talent acquisition, contract staffing and executive search engineered around the specific roles that move your business forward.",
      points: ["Executive search", "Contract & temporary staffing", "Workforce analytics", "HR systems & policy"],
      to: "/smart-staffing",
    },
  ];

  return (
    <section className="bg-bone">
      <div className="container-x section-pad">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-6">04 - Divisions</p>
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] text-creekoxley">
              Specialist divisions
              <br />
              <em className="italic">under one firm.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 text-[17px] leading-[1.75] text-muted-ink">
            Beyond core consulting, Creek Oxley operates two specialist divisions
            serving hospitality and workforce mandates with the same operating
            discipline as the consultancy itself.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          {items.map((it) => (
            <div key={it.name} className="bg-white border-l-[3px] border-lavender p-10 flex flex-col">
              <p className="eyebrow mb-6">{it.tag}</p>
              <h3 className="font-display text-[28px] text-creekoxley mb-4">{it.name}</h3>
              <p className="text-[15px] text-muted-ink leading-[1.75] mb-8">{it.lede}</p>
              <ul className="space-y-3 mb-10">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[14px] text-body-ink border-b border-rule pb-3">
                    <span className="text-silver">-</span>{p}
                  </li>
                ))}
              </ul>
              <Link to={it.to} className="mt-auto inline-flex items-center gap-2 text-[14px] font-medium text-creekoxley hover:text-ink">
                Visit division <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectedBrands;
