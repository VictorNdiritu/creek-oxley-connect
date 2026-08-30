import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const HRStrategyArticlePage = () => {
  return (
    <>
      <SEOHead
        title="Attracting and Retaining Top Talent: HR Strategy as Growth Strategy"
        description="How strategic HR practices, from talent acquisition to workforce planning and employee retention, drive business growth. HR consulting Kenya insights from Creek Oxley."
        canonical="https://creekoxley.com/blog/hr-strategy-business-growth"
        article={{
          publishedTime: "2026-07-14T00:00:00Z",
          author: "Creek Oxley Team",
          tags: ["HR Consulting Kenya", "Talent Acquisition", "Employee Retention", "Workforce Planning"]
        }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Button variant="ghost" className="text-creekoxley hover:bg-creekoxley/10">
                  <Link to="/blog" className="flex items-center gap-2 text-creekoxley">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>

              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 14, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Creek Oxley Team</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-creekoxley mb-6">
                  Attracting and Retaining Top Talent: Why HR Strategy Is a Business Growth Strategy
                </h1>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">HR Consulting Kenya</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Talent Acquisition</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Employee Retention</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Workforce Planning</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Most business owners describe their people as their greatest asset. Yet in the same conversation, they admit that hiring is reactive, onboarding is informal, and turnover is quietly eroding profit. In 2026, this contradiction is no longer sustainable.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Attracting skilled employees is only half the challenge. The real work is building an organisation where talented people choose to stay, grow, and perform. HR strategy is no longer a support function. It is a direct driver of business growth.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">1. Talent Acquisition Starts Long Before the Job Advert</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Recruitment fails most often because it starts too late. By the time a role is urgent, the shortlist is thin and the wrong hire becomes tempting. Strategic talent acquisition begins with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Clear workforce planning tied to your 12 and 24 month business goals.</li>
                  <li>A strong employer brand visible on LinkedIn, your website, and industry networks.</li>
                  <li>A pipeline of candidates you have already spoken to, before you need them.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Companies that plan their talent needs quarterly hire faster, negotiate better, and rarely settle for the wrong candidate.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">2. Onboarding Is Where Retention Is Won or Lost</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The first 90 days determine whether a new employee stays for years or quietly starts looking again. Most organisations under-invest here.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Structured onboarding plans with clear 30, 60, and 90 day expectations.</li>
                  <li>Documented systems and SOPs so new hires can contribute quickly.</li>
                  <li>A named buddy or mentor to shorten the learning curve.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Strong onboarding cuts early attrition dramatically and protects your recruitment investment.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">3. Performance Management That People Actually Want</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Annual appraisals belong to another era. High performing teams operate on shorter, more honest cycles.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Quarterly goal-setting linked to company priorities.</li>
                  <li>Monthly one-to-one conversations focused on progress and blockers.</li>
                  <li>Clear career paths so people see a future inside your business.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                  When people know how they are doing and where they are going, they stop looking elsewhere.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">4. Training and Development Is a Retention Tool</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Talented employees leave when they stop learning. Yet many SMEs treat training as an optional expense rather than a strategic investment.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>A modest annual training budget per employee, tied to role competencies.</li>
                  <li>Internal knowledge sharing sessions to unlock existing expertise.</li>
                  <li>Cross-training that builds resilience and opens promotion paths.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Every shilling invested in development returns as productivity, loyalty, and lower recruitment cost.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">5. Culture Is Built by Systems, Not Slogans</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Workplace culture is not a poster on the wall. It is the sum of your policies, your leaders' behaviour, and how conflict is handled on a difficult Monday.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Fair, documented policies on leave, grievance, and performance.</li>
                  <li>Leaders trained to give feedback, not just instructions.</li>
                  <li>Recognition rituals that celebrate results and behaviour, not just tenure.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Culture is the single most powerful retention lever, and the hardest for competitors to copy.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">6. Why Partnering With HR Professionals Pays for Itself</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most growing organisations do not need a full internal HR department. They need structured HR expertise on call.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Faster, better hires through professional recruitment services.</li>
                  <li>Compliant contracts, policies, and disciplinary processes.</li>
                  <li>Objective advice during sensitive people decisions.</li>
                  <li>Lower turnover, which is often the largest hidden cost in an SME.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Strategic HR support typically pays for itself in the first two hires it improves and the first resignation it prevents.
                </p>

                <h2 className="text-2xl font-bold text-creekoxley mb-4">Final Word: People Strategy Is Business Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  You cannot scale a business faster than you can build the team behind it. At Creek Oxley, we help business owners and HR managers across Kenya and the region turn recruitment, onboarding, performance, and culture into a coherent talent management system that drives real growth.
                </p>
              </div>

              <div className="bg-creekoxley/5 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-creekoxley mb-4">Build a High Performing Team</h3>
                <p className="text-gray-700 mb-6">
                  Talk to Creek Oxley about recruitment services, workforce planning, and HR strategy tailored to your business.
                </p>
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/contact" className="text-white">Speak With Our HR Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default HRStrategyArticlePage;
