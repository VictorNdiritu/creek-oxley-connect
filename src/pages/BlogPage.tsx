import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RSSLink from "@/components/RSSLink";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  return (
    <>
      <SEOHead
        title="Management Insights & Expertise | Creek Oxley Business Blog"
        description="Discover strategic insights, operational excellence tips, and industry expertise from Creek Oxley's consulting team. Read our latest articles on business management and leadership."
        canonical="https://creekoxley.com/blog"
      />
      <div className="min-h-screen bg-white">
        {/* Add RSS feed auto-discovery meta tag */}
        <head>
          <link 
            rel="alternate" 
            type="application/rss+xml" 
            title="Creek Oxley Management Insights" 
            href="/rss.xml" 
          />
        </head>
        
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-creekoxley/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-creekoxley mb-6">
                Management Insights & Expertise
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Strategic insights, operational excellence, and industry expertise from Creek Oxley's consulting team.
              </p>
              <div className="flex justify-center">
                <RSSLink />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-creekoxley mb-4">
                  Latest Articles
                </h2>
                <p className="text-lg text-gray-600">
                  Expert guidance and insights for business leaders
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* EAC Cross-Border Operations Article */}
                <article className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>December 11, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Creek Oxley Team</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-creekoxley mb-4">
                    From Nairobi to Kigali: 5 Management Consulting Pillars for Mastering Cross-Border Operations in the EAC
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Expanding operations across East Africa is an exciting but complex journey. The EAC has made regional trade more seamless, but succeeding across borders demands structure, insight, and strategy...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Regional Business</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">EAC</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Cross-Border Operations</span>
                  </div>
                  
                  <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                    <Link to="/blog/eac-cross-border-operations" className="flex items-center gap-2 text-white">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>

                {/* Global Exhibitions Article */}
                <article className="bg-gray-50 rounded-lg p-8">
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
                  
                  <h3 className="text-xl md:text-2xl font-bold text-creekoxley mb-4">
                    Stop Missing Out: The Cost of Ignoring Global Exhibitions
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    As a business leader, you're constantly bombarded with promotions—emails, ads, and social media posts that promise the next big opportunity. It's easy to become numb to it all, especially when it comes to international trade shows...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">DMC</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Trade Shows</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Exhibition Experts</span>
                  </div>
                  
                  <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                    <Link to="/blog/global-exhibitions" className="flex items-center gap-2 text-white">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>

                {/* Featured Article - Management Problems */}
                <article className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>July 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Creek Oxley Team</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-creekoxley mb-4">
                    Resolving Management Problems: Why Leadership Conflicts Can Break — or Build — Your Business
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    At some point in nearly every company's journey, complex management problems emerge. Conflicting visions, leadership deadlocks, or operational growing pains can threaten even the strongest founding teams...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Leadership</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Management</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Conflict Resolution</span>
                  </div>
                  
                  <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                    <Link to="/blog/management-problems" className="flex items-center gap-2 text-white">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>

                {/* Adidas Turnaround Article */}
                <article className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>July 22, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Creek Oxley Team</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-creekoxley mb-4">
                    The Remarkable Turnaround of Adidas: A Management Masterclass
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    When Adidas announced the termination of its partnership with Kanye West's Yeezy brand in October 2022, it sent shockwaves through the business world. The decision cost the company an estimated €1.3 billion in revenue...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Crisis Management</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Leadership</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Turnaround</span>
                  </div>
                  
                  <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                    <Link to="/blog/adidas-turnaround" className="flex items-center gap-2 text-white">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>

                {/* Business Structure Article */}
                <article className="bg-gray-50 rounded-lg p-8">
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
                  
                  <h3 className="text-xl md:text-2xl font-bold text-creekoxley mb-4">
                    Choosing Between a Business Name, LLP and Company Formation in Kenya
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Starting a business in Kenya isn't just about the idea or the market — it's also about structure. The choice between registering a Business Name, setting up a Limited Liability Partnership (LLP), or incorporating a Private Limited Company can have lasting consequences...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Formation</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya Business</span>
                    <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Legal Structure</span>
                  </div>
                  
                  <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                    <Link to="/blog/business-structure-kenya" className="flex items-center gap-2 text-white">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              </div>
              
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
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;