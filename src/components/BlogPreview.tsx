
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-creekoxley mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600">
              Expert advice and industry insights from our management consulting team
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 12, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Creek Oxley Team</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
              From Nairobi to Kigali: 5 Management Consulting Pillars for Mastering Cross-Border Operations in the EAC
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Expanding operations across East Africa is an exciting but complex journey. The EAC has made regional trade more seamless, but succeeding across borders demands structure, insight, and strategy. Learn the five core management consulting pillars for scaling from Nairobi to Kigali...
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Regional Business</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">EAC</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Cross-Border Operations</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">East Africa</span>
            </div>
            
            <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
              <Link to="/blog/eac-cross-border-operations" className="flex items-center gap-2 text-white">
                Read Full Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-creekoxley text-creekoxley hover:bg-creekoxley/10">
              <Link to="/blog" className="text-creekoxley">View All Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
