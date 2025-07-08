
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-creekoxley/5 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-creekoxley mb-6">
              Management Insights & Expertise
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Strategic insights, operational excellence, and industry expertise from Creek Oxley's consulting team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {/* Featured Article - Business Structure */}
              <article className="bg-gray-50 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>January 08, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Creek Oxley Team</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
                  Choosing Between a Business Name, LLP and Company Formation in Kenya
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Starting a business in Kenya isn't just about the idea or the market — it's also about structure. The choice between registering a Business Name, setting up a Limited Liability Partnership (LLP), or incorporating a Private Limited Company can have lasting consequences on liability, taxes, credibility and growth potential...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Formation</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya Business</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Legal Structure</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Company Formation</span>
                </div>
                
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/blog/business-structure-kenya" className="flex items-center gap-2 text-white">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
              
              {/* Kenya Expansion Article */}
              <article className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 01, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Creek Oxley Team</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
                  Expanding into Kenya? Here's Why Your First Call Should Be to A Local Business Management Consultant
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  When an international company chooses to expand into Kenya, the stakes are high. Kenya isn't just another stop on the map — it's the business and innovation gateway to East and Central Africa, one of the continent's most vibrant and competitive regions. But landing in the right place, hiring the right people, and building the right presence isn't automatic...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya Expansion</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">East Africa</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Market Entry</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Strategy</span>
                </div>
                
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/blog/expanding-into-kenya" className="flex items-center gap-2 text-white">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
              
              {/* Hotel Management Article */}
              <article className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 01, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Creek Oxley Team</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
                  5 Proven Strategies to Transform Hotel & Lodge Management: Beyond Daily Operations
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Managing a hotel or lodge today is about far more than daily check-ins and housekeeping schedules. 
                  Guests expect seamless service, authentic experiences, and thoughtful touches that go beyond the ordinary — 
                  all while you keep an eye on profitability and sustainability. Here are five practical strategies that can 
                  help transform your property into a preferred destination...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Hotel Management</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Hospitality</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Operations</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Guest Experience</span>
                </div>
                
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/blog/hotel-management-strategies" className="flex items-center gap-2 text-white">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
              
              {/* Safari Lodge Article */}
              <article className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 23, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Creek Oxley Team</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
                  Scaling a Lodge in a Remote Location: Systems Every Safari Property Needs to Survive and Thrive
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From Samburu to the Serengeti, remote lodges are some of the most captivating destinations in the world. 
                  But behind the scenic views and Instagram-perfect sunsets lies a very different reality: running a hospitality 
                  business in a remote location is operationally brutal. Supply chains break down. Power fails. Staff turnover is high...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Hospitality</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Operations</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Systems</span>
                  <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Safari Lodges</span>
                </div>
                
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/blog/scaling-safari-lodge" className="flex items-center gap-2 text-white">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
              
              {/* Placeholder for more articles */}
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">More insights coming soon...</p>
                <p className="text-sm text-gray-400">
                  Subscribe to our newsletter to be notified when we publish new articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
