import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BlogArticlePage = () => {
  return (
    <>
      <SEOHead
        title="Strategic Business Consulting Insights | Creek Oxley Blog"
        description="Expert insights and proven strategies for business management, operational excellence, and organizational transformation from Creek Oxley's consulting team."
        canonical="https://creekoxley.com/blog/article"
        article={{
          publishedTime: "2024-09-01T00:00:00Z",
          author: "Creek Oxley Team",
          tags: ["Business Strategy", "Management", "Consulting"]
        }}
      />
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
                  <span>December 23, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Creek Oxley Team</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-creekoxley mb-6">
                Scaling a Lodge in a Remote Location: Systems Every Safari Property Needs to Survive and Thrive
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Hospitality</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Operations</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Systems</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Safari Lodges</span>
              </div>
            </header>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From Samburu to the Serengeti, remote lodges are some of the most captivating destinations in the world. But behind the scenic views and Instagram-perfect sunsets lies a very different reality: running a hospitality business in a remote location is operationally brutal. Supply chains break down. Power fails. Staff turnover is high. And guests — expecting luxury — are rarely forgiving.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Creek Oxley, we've worked with safari properties and remote lodges that were bleeding potential because they had no systems built for scale. Here's what it actually takes to grow — and survive — in the wild.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">1. SOPs: The Backbone of Consistency</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a remote lodge, your best staff might be offline for hours — or days. What keeps the guest experience consistent is not people, but process. Standard Operating Procedures (SOPs) ensure:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Housekeeping knows exactly how to turn around a room between game drives</li>
                <li>Chefs understand dietary protocol for guests with restrictions</li>
                <li>Front desk staff handle last-minute changes the same way every time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Without SOPs, service delivery becomes personality-dependent — and that's not scalable.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">2. Inventory Management Isn't a Checklist — It's Survival</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Getting supplies to a remote lodge is never just about ordering. It's about forecasting, batching, and contingency.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>What happens when fresh produce delivery delays by 3 days?</li>
                <li>How much fuel is needed to last 10 days of unexpected generator use?</li>
                <li>Is your stock rotation system preventing waste?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                We've helped properties set up tiered inventory control systems that allow for both routine and emergency operations — no panic reorders, no overstocking.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">3. Multi-Skilled Staffing Models Win in the Wild</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In cities, you can afford specialized staff. At a lodge, every team member needs range.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>A driver might double as a maintenance assistant</li>
                <li>A housekeeper may assist during kitchen prep hours</li>
                <li>A front desk agent should understand the basics of first aid</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Creek Oxley designs staff training programs that cross-train key roles, increasing resilience and lowering downtime during absences or peak periods.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">4. Guest Experience Systems: Remote Doesn't Mean Basic</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your guests expect a smooth, high-touch experience — even without fiber internet. That means:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Seamless check-in and orientation</li>
                <li>Digital or analog guest feedback mechanisms</li>
                <li>Personalization systems (e.g., remembering names, meal preferences)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                We implement experience mapping for remote properties, allowing them to deliver memorable stays with minimal digital infrastructure.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">5. Contingency Planning: Your Real Competitive Advantage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most remote properties run reactively. Few plan for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Flash floods cutting off road access</li>
                <li>Sudden staff illnesses during high season</li>
                <li>Power failures during full occupancy</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                We help safari lodges design and test response playbooks — so that when disruptions hit, operations don't collapse, and guests still feel taken care of.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Final Word: A Scenic Property Is Not a Scalable Business</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Having a gorgeous view and a compelling story will bring guests in once. What brings them back — and keeps your business viable — is operational strength. At Creek Oxley, we help remote hospitality businesses build internal systems strong enough to handle chaos, scale with confidence, and deliver excellence in every season.
              </p>
            </div>
            
            {/* CTA */}
            <div className="bg-creekoxley/5 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-creekoxley mb-4">Ready to Scale Your Remote Business?</h3>
              <p className="text-gray-700 mb-6">
                Let Creek Oxley help you build the operational systems your business needs to thrive in any environment.
              </p>
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                <Link to="/contact" className="text-white">Get Started Today</Link>
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

export default BlogArticlePage;
