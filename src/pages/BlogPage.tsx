
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

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-creekoxley mb-4">
                Featured Article
              </h2>
              <p className="text-lg text-gray-600">
                Essential guidance for business formation in Kenya
              </p>
            </div>
            
            <article className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>July 08, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Creek Oxley Team</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
                Choosing Between a Business Name, LLP and Company Formation in Kenya
              </h3>
              
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
            
            {/* More insights coming soon */}
            <div className="text-center py-12 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">More Insights Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                We're preparing more valuable content on business management, operational excellence, and strategic consulting.
              </p>
              <p className="text-sm text-gray-500">
                Have a specific topic you'd like us to cover? <Link to="/contact" className="text-creekoxley hover:underline">Contact us</Link> to let us know.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
