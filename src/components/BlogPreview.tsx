
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
                <span>July 22, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Creek Oxley Team</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-creekoxley mb-4">
              The Remarkable Turnaround of Adidas: A Management Masterclass
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              In 2022, Adidas was dragged into its biggest crisis in decades through no fault of its own. Learn how decisive management actions turned a €58 million loss into a €1.34 billion profit and a 48% stock price increase, without selling off assets, taking bailouts, or implementing mass layoffs...
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Crisis Management</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Leadership</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Turnaround</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Corporate Strategy</span>
            </div>
            
            <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
              <Link to="/blog/adidas-turnaround" className="flex items-center gap-2 text-white">
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
