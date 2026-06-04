import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-bone">
      <div className="container-x pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left 7/12 */}
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-8">Management Consultancy — Est. Nairobi</p>
            <h1 className="font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.02em] text-creekoxley">
              Strategy, structure
              <br />
              and the discipline
              <br />
              <em className="italic text-lavender font-medium">to deliver results.</em>
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.75] text-muted-ink">
              Creek Oxley partners with operators and executives across East Africa to
              resolve management problems, build durable strategy, and run the operating
              cadence that turns plans into measurable outcomes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/services" className="btn-primary">Our practice</Link>
              <Link to="/contact" className="btn-secondary">Begin a conversation</Link>
            </div>
          </div>

          {/* Right 5/12 — bordered positioning box */}
          <div className="col-span-12 md:col-span-5 md:pt-6">
            <div className="border-2 border-creekoxley p-8 md:p-10">
              <p className="eyebrow mb-5">Positioning</p>
              <p className="font-display italic text-[24px] md:text-[28px] leading-[1.25] text-creekoxley">
                "We do not sell decks. We diagnose the business, install the fix, and
                stay until the numbers move."
              </p>
              <div className="rule mt-8 mb-6" />
              <p className="text-[14px] text-muted-ink">
                Engagements across consulting, destination management and smart staffing —
                anchored by a single operating philosophy:
                <span className="italic"> Observation. Innovation. Results.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rule" />
    </section>
  );
};

export default Hero;
