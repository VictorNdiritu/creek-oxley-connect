import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  { num: "01", title: "Resolving Management Problems", desc: "Diagnostic engagements that identify root causes and install durable operating fixes.", to: "/services" },
  { num: "02", title: "Developing and Reviving Strategies", desc: "Strategy work that survives contact with the P&L - built with the team that will run it.", to: "/services" },
  { num: "03", title: "Business Process Optimisation", desc: "Workflow design, cost-to-serve analysis and the operating cadence to lock in gains.", to: "/services" },
  { num: "04", title: "People & Organisation", desc: "Org design, performance systems and leadership coaching for high-trust teams.", to: "/services" },
  { num: "05", title: "Management Information Systems", desc: "Decision-grade reporting, dashboards and the data discipline behind them.", to: "/services" },
  { num: "06", title: "Marketing & Growth", desc: "Brand positioning, channel strategy and demand systems for ambitious operators.", to: "/services" },
];

const Services = () => {
  return (
    <section id="services" className="bg-bone">
      <div className="container-x section-pad">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-6">02 - Practice</p>
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] text-creekoxley">
              Six disciplines.
              <br />
              <em className="italic">One operating standard.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-[17px] leading-[1.75] text-muted-ink">
              We do not publish a service menu and wait. Every engagement is shaped to a
              specific decision the leadership team needs to make - then carried through to
              the measurable change on the other side.
            </p>
          </div>
        </div>

        <div className="border-t border-rule">
          {services.map((s) => (
            <Link
              key={s.num}
              to={s.to}
              className="group grid grid-cols-12 gap-6 items-center border-b border-rule py-8 px-2 hover:bg-ink transition-colors"
            >
              <div className="col-span-2 md:col-span-1 text-[14px] font-medium text-silver group-hover:text-silver">{s.num}</div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-[22px] md:text-[24px] text-creekoxley group-hover:text-white transition-colors">{s.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-5 text-[15px] text-muted-ink group-hover:text-rule transition-colors">
                {s.desc}
              </div>
              <div className="col-span-12 md:col-span-2 flex md:justify-end">
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-creekoxley group-hover:text-white">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
