import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserCheck, BarChart, Briefcase, Target, ClipboardCheck, TrendingUp } from "lucide-react";

const SmartStaffingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Creek Oxley Smart Staffing?",
        "acceptedAnswer": { "@type": "Answer", "text": "Smart Staffing is Creek Oxley's dedicated talent acquisition and workforce management division, providing strategic recruitment, contract staffing, workforce analytics, and executive search services to businesses across East Africa." }
      },
      {
        "@type": "Question",
        "name": "Which industries does Smart Staffing serve?",
        "acceptedAnswer": { "@type": "Answer", "text": "Smart Staffing serves a wide range of industries including hospitality, manufacturing, retail, technology, financial services, healthcare, and non-profit sectors across Kenya and the broader East African region." }
      },
      {
        "@type": "Question",
        "name": "How does Creek Oxley's recruitment process work?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our recruitment process follows a diagnostic approach: understanding your organizational needs, defining role requirements, sourcing and screening candidates, conducting competency assessments, and providing post-placement support to ensure successful integration." }
      },
      {
        "@type": "Question",
        "name": "How can I contact Smart Staffing?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact Creek Oxley at +254 725 276 757 or email info@creekoxley.com to discuss your staffing needs." }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Smart Staffing Solutions | Creek Oxley Talent Acquisition"
        description="Creek Oxley Smart Staffing: strategic talent acquisition, contract staffing, workforce analytics, and executive search services for businesses across East Africa."
        canonical="https://creekoxley.com/smart-staffing"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-slate-50 to-creekoxley-silver/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wide text-creekoxley font-medium">Creek Oxley Service Division</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Smart <span className="text-creekoxley">Staffing</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creek Oxley's innovative talent acquisition and workforce management solutions to help your business thrive with the right team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white px-8 py-6 text-lg">
                <Link to="/contact" className="text-white">Contact Creek Oxley</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-creekoxley-light/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-creekoxley/10 rounded-full blur-3xl"></div>
      </section>

      {/* Why Smart Staffing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Why Smart Staffing Matters</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Finding and retaining the right talent is the single biggest challenge facing businesses in East Africa today. Skills gaps, high turnover, and misaligned hiring practices cost organizations millions in lost productivity and operational disruption every year. Creek Oxley's Smart Staffing division was built to solve this problem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We go beyond traditional recruitment agencies by applying our diagnostic consulting methodology to workforce planning. Rather than simply filling positions, we help organizations build strategic talent pipelines, develop competency frameworks, and implement data-driven hiring practices that deliver measurable results. Our approach ensures every placement contributes to your organization's long-term growth strategy.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Staffing Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Talent Acquisition</h3>
              <p className="text-gray-600">Strategic recruitment solutions to identify and attract top-tier talent. We use competency-based assessments and cultural fit evaluations to ensure candidates align with your organizational goals and values.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract Staffing</h3>
              <p className="text-gray-600">Flexible workforce solutions for temporary, seasonal, and project-based needs. Ideal for hospitality businesses managing peak seasons or companies launching new operations in the region.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workforce Analytics</h3>
              <p className="text-gray-600">Data-driven insights to optimize your talent strategy. We analyse turnover patterns, performance metrics, and market benchmarks to inform smarter workforce planning decisions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Executive Search</h3>
              <p className="text-gray-600">Specialised recruitment for leadership and C-suite positions. Our executive search service leverages deep industry networks to identify transformational leaders for your organization.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <ClipboardCheck className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">HR Consulting</h3>
              <p className="text-gray-600">Comprehensive HR advisory including policy development, compliance audits, performance management systems, and employee engagement strategies tailored to your industry.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training & Development</h3>
              <p className="text-gray-600">Customised training programmes to upskill your existing workforce, build leadership pipelines, and ensure your teams are equipped for the demands of a rapidly changing business environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Recruitment Process</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-creekoxley">
                <h3 className="font-semibold text-lg mb-2">1. Needs Assessment</h3>
                <p className="text-gray-600">We begin by understanding your organizational structure, culture, and specific role requirements through in-depth consultation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-creekoxley">
                <h3 className="font-semibold text-lg mb-2">2. Talent Sourcing</h3>
                <p className="text-gray-600">Leveraging our extensive network across East Africa, we identify and approach qualified candidates through multiple channels.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-creekoxley">
                <h3 className="font-semibold text-lg mb-2">3. Screening & Assessment</h3>
                <p className="text-gray-600">Rigorous competency-based interviews, skills testing, and reference checks ensure only the best candidates are presented.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-creekoxley">
                <h3 className="font-semibold text-lg mb-2">4. Placement & Integration</h3>
                <p className="text-gray-600">We support the onboarding process and provide follow-up to ensure successful integration and long-term retention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Explore More from Creek Oxley</h2>
            <p className="text-lg text-gray-600 mb-8">
              Smart Staffing is one of Creek Oxley's core service divisions. Discover our full range of <Link to="/services" className="text-creekoxley hover:underline font-semibold">consulting services</Link>, explore our <Link to="/destination-management" className="text-creekoxley hover:underline font-semibold">Destination Management</Link> portfolio, or read our latest <Link to="/blog" className="text-creekoxley hover:underline font-semibold">industry insights</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">What is Creek Oxley Smart Staffing?</h3>
                <p className="text-gray-600">Smart Staffing is Creek Oxley's dedicated talent acquisition and workforce management division, providing strategic recruitment, contract staffing, workforce analytics, and executive search services to businesses across East Africa.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Which industries does Smart Staffing serve?</h3>
                <p className="text-gray-600">Smart Staffing serves a wide range of industries including hospitality, manufacturing, retail, technology, financial services, healthcare, and non-profit sectors across Kenya and the broader East African region.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">How does Creek Oxley's recruitment process work?</h3>
                <p className="text-gray-600">Our recruitment process follows a diagnostic approach: understanding your organizational needs, defining role requirements, sourcing and screening candidates, conducting competency assessments, and providing post-placement support to ensure successful integration.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">How can I contact Smart Staffing?</h3>
                <p className="text-gray-600">Contact Creek Oxley at +254 725 276 757 or email info@creekoxley.com to discuss your staffing needs. You can also reach us through our <Link to="/contact" className="text-creekoxley hover:underline">contact page</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Footer />
      </div>
    </>
  );
};

export default SmartStaffingPage;
