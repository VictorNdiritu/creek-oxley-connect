import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BusinessStructureArticlePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <div className="mb-8">
              <Button variant="ghost" className="text-creekoxley hover:bg-creekoxley/10">
                <Link to="/blog" className="flex items-center gap-2 text-creekoxley">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            {/* Article Header */}
            <header className="mb-8">
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
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-creekoxley mb-6">
                Choosing Between a Business Name, LLP and Company Formation in Kenya
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Formation</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya Business</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Legal Structure</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Company Formation</span>
              </div>
            </header>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Starting a business in Kenya isn't just about the idea or the market — it's also about structure. The choice between registering a Business Name, setting up a Limited Liability Partnership (LLP), or incorporating a Private Limited Company can have lasting consequences on liability, taxes, credibility and growth potential.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Business Name: Simplicity and Speed</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Registering a Business Name is often the quickest and simplest way to get started. It's ideal for sole proprietorships or small partnerships where personal liability isn't a major concern.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Pros:</strong> Easy registration, minimal compliance requirements, low setup costs.</li>
                <li><strong>Cons:</strong> Unlimited personal liability, limited access to funding, perceived as less credible than other structures.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Limited Liability Partnership (LLP): Balancing Flexibility and Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                An LLP offers a middle ground, providing some liability protection while maintaining operational flexibility.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Pros:</strong> Limited liability for partners, flexible management structure, pass-through taxation.</li>
                <li><strong>Cons:</strong> More complex than a Business Name, requires a formal partnership agreement, potential for partner disputes.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Private Limited Company: Credibility and Growth Potential</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Incorporating a Private Limited Company is the most formal structure, offering the greatest liability protection and credibility.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Pros:</strong> Limited liability for shareholders, easier access to funding, enhanced credibility with clients and investors.</li>
                <li><strong>Cons:</strong> More complex registration process, higher compliance costs, stricter regulatory requirements.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Key Considerations When Choosing a Structure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here are some critical factors to consider when making your decision:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Liability:</strong> How much personal risk are you willing to take?</li>
                <li><strong>Taxation:</strong> How will profits be taxed under each structure?</li>
                <li><strong>Funding:</strong> Which structure will make it easier to attract investors or secure loans?</li>
                <li><strong>Compliance:</strong> How much administrative burden are you willing to handle?</li>
                <li><strong>Growth:</strong> Which structure will best support your long-term growth plans?</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Making the Right Choice</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                The best choice depends on your specific circumstances, risk tolerance, and business goals. It's essential to carefully weigh the pros and cons of each structure and seek professional advice to ensure you're making the right decision for your business.
              </p>
            </div>
            
            {/* CTA */}
            <div className="bg-creekoxley/5 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-creekoxley mb-4">Ready to Choose the Right Business Structure?</h3>
              <p className="text-gray-700 mb-6">
                Let Creek Oxley help you select and register the ideal legal structure for your Kenyan business. We'll guide you through the process and ensure you're set up for success.
              </p>
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                <Link to="/contact" className="text-white">Get Expert Guidance</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BusinessStructureArticlePage;
