import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogPreview = () => {
  return (
    <section className="bg-bone">
      <div className="container-x section-pad">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-6">05 — Insights</p>
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.05] text-creekoxley">
              The firm,
              <br />
              <em className="italic">in writing.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 text-[17px] leading-[1.75] text-muted-ink">
            Working papers, point-of-view essays and field notes from our consulting
            engagements — written for operators, not the trade press.
          </div>
        </div>

        <Link
          to="/blog/firefighter-manager"
          className="block group border-t border-b border-rule py-12"
        >
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-2 eyebrow">February 2026 · Featured</div>
            <div className="col-span-12 md:col-span-7">
              <h3 className="font-display text-[32px] md:text-[40px] leading-[1.1] text-creekoxley group-hover:text-ink transition-colors">
                The "Firefighter" Manager — when being busy is the biggest barrier to growth.
              </h3>
              <p className="mt-5 text-[16px] text-muted-ink max-w-2xl">
                Why constantly fighting fires keeps managers from strategic work, and the
                operating cadence that breaks the cycle.
              </p>
              <div className="mt-6 flex gap-6 text-[12px] text-silver uppercase tracking-[0.1em]">
                <span>Management</span><span>Leadership</span><span>Strategy</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:justify-end">
              <span className="inline-flex items-center gap-2 text-[14px] font-medium text-creekoxley">
                Read working paper <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-10">
          <Link to="/blog" className="btn-secondary">All insights</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
