import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, TrendingUp, Shield, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import hospitalityHero from "@/assets/hospitality-2026.png";

const Hospitality2026ArticlePage = () => {
  return (
    <>
      <SEOHead
        title="2026 Is the Year That Will Carry Your Hospitality Business Through the Next Three | Creek Oxley"
        description="2026 is the strongest year Kenya's hospitality industry will have for the next three years. Learn why smart operators should prepare now before the 2027 election cycle brings uncertainty."
        canonical="https://creekoxley.com/blog/hospitality-2026-strategy"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section with Image */}
        <section className="relative">
          <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
            <img 
              src={hospitalityHero} 
              alt="2026 hospitality growth chart showing Kenya's hospitality industry momentum from 2024-2026" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        
        {/* Article Header */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back to Blog */}
              <Link to="/blog" className="inline-flex items-center gap-2 text-creekoxley hover:text-creekoxley-medium mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Link>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 16, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Creek Oxley</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-creekoxley mb-8 leading-tight">
                2026 Is the Year That Will Carry Your Hospitality Business Through the Next Three
              </h1>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Hospitality</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Strategic Planning</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Strategy</span>
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  2024 was a good year for Kenya's hospitality industry. 2025 was even better.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Occupancy improved, confidence returned, and many hotels and lodges finally felt like they were operating in growth mode again, not recovery mode.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  But when you step back and study the political and economic climate ahead, one thing becomes clear.
                </p>
                
                <p className="text-xl font-semibold text-creekoxley mb-8">
                  2026 is the strongest year we are likely to have for the next three years.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-12">
                  And that changes how smart operators should be thinking right now.
                </p>
                
                {/* Section: Why 2026 Matters */}
                <div className="bg-creekoxley/5 rounded-xl p-8 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-creekoxley" />
                    <h2 className="text-2xl md:text-3xl font-bold text-creekoxley m-0">
                      Why 2026 Matters So Much
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kenya is entering a familiar phase. As the country moves closer to the 2027 election cycle, uncertainty begins to creep in early. Campaigns stretch longer. Spending slows. Corporate travel becomes cautious. International guests hesitate before committing.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This is not speculation. It is a pattern.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    What makes 2026 different is that it sits at the edge of stability and uncertainty. Demand is still strong, travel confidence is intact, and decision making is clear. Beyond this point, visibility reduces.
                  </p>
                  
                  <p className="text-lg font-semibold text-creekoxley">
                    That means what you do in 2026 is what will carry your business through 2027 and 2028.
                  </p>
                </div>
                
                {/* Section: Businesses That Win */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="h-6 w-6 text-creekoxley" />
                    <h2 className="text-2xl md:text-3xl font-bold text-creekoxley m-0">
                      The Businesses That Win Think Differently
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Strong hospitality businesses do not expand blindly during good years. They prepare.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Preparation does not mean panic spending. It means smart restraint.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-creekoxley rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Strengthen what already works</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-creekoxley rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Cut what looks impressive but does not perform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-creekoxley rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Invest in systems, not noise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-creekoxley rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Build cash buffers, not vanity projects</span>
                    </li>
                  </ul>
                  
                  <p className="text-lg font-semibold text-creekoxley">
                    This is the year to conserve revenue, not burn it chasing momentum.
                  </p>
                </div>
                
                {/* Section: Hard Choices */}
                <div className="border-l-4 border-creekoxley pl-6 mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-creekoxley" />
                    <h2 className="text-2xl md:text-3xl font-bold text-creekoxley m-0">
                      Hard Choices Now or Harder Ones Later
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every hotel and lodge avoids difficult decisions when business feels good. But the economy has a way of forcing decisions eventually.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Making hard choices in 2026 gives you control. Delaying them means the economy will make much harder ones for you in 2027 and 2028.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    That might look like:
                  </p>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Cutting costs under pressure instead of calmly restructuring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Discounting rooms instead of holding value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Reacting to market shifts instead of anticipating them</span>
                    </li>
                  </ul>
                  
                  <p className="text-lg font-semibold text-creekoxley">
                    The difference is timing, not intelligence.
                  </p>
                </div>
                
                {/* Section: Stability */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-6 w-6 text-creekoxley" />
                    <h2 className="text-2xl md:text-3xl font-bold text-creekoxley m-0">
                      Stability Is Built Before Uncertainty Arrives
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The next few years will reward businesses that enter them lean, clear, and well positioned.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Guests become more selective during uncertain times. They choose brands that feel established, reliable, and intentional. That perception is built now, not later.
                  </p>
                  
                  <p className="text-lg font-semibold text-creekoxley">
                    2026 is not about aggressive expansion. It is about quiet strength.
                  </p>
                </div>
                
                {/* The Bottom Line */}
                <div className="bg-creekoxley text-white rounded-xl p-8 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    The Bottom Line
                  </h2>
                  
                  <p className="leading-relaxed mb-6 opacity-90">
                    2024 proved recovery was real. 2025 proved growth was possible. 2026 will decide who remains strong when conditions tighten.
                  </p>
                  
                  <p className="leading-relaxed mb-6 opacity-90">
                    The question is simple.
                  </p>
                  
                  <p className="text-xl font-semibold mb-6">
                    Will your business use this year to prepare for the next three, or will it wait until uncertainty removes the option to choose?
                  </p>
                  
                  <p className="opacity-90">
                    At Creek Oxley, we believe the smartest hospitality decisions are made before pressure arrives. Because in this industry, timing is strategy.
                  </p>
                </div>
                
                {/* CTA Section */}
                <div className="text-center py-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-creekoxley mb-4">
                    Ready to Position Your Business for the Next Three Years?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our <Link to="/services" className="text-creekoxley hover:underline">management consulting services</Link> help hospitality businesses build resilience and strategic clarity before uncertainty arrives.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                      <Link to="/contact" className="text-white">Schedule a Consultation</Link>
                    </Button>
                    <Button variant="outline" className="border-creekoxley text-creekoxley hover:bg-creekoxley/10">
                      <Link to="/blog" className="text-creekoxley">Read More Insights</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "2026 Is the Year That Will Carry Your Hospitality Business Through the Next Three",
            "description": "2026 is the strongest year Kenya's hospitality industry will have for the next three years. Learn why smart operators should prepare now before the 2027 election cycle brings uncertainty.",
            "image": "https://creekoxley.com/assets/hospitality-2026.png",
            "author": {
              "@type": "Organization",
              "name": "Creek Oxley"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Creek Oxley",
              "logo": {
                "@type": "ImageObject",
                "url": "https://creekoxley.com/lovable-uploads/484943ae-2c20-4228-8536-7081b6c91bbd.png"
              }
            },
            "datePublished": "2026-01-16",
            "dateModified": "2026-01-16",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://creekoxley.com/blog/hospitality-2026-strategy"
            }
          })
        }} />
        
        <Footer />
      </div>
    </>
  );
};

export default Hospitality2026ArticlePage;
