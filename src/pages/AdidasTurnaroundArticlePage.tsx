import React from "react";
import SEOHead from "@/components/SEOHead";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdidasTurnaroundArticlePage = () => {
  return (
    <>
      <SEOHead
        title="The Remarkable Turnaround of Adidas: A Management Masterclass | Creek Oxley"
        description="How Adidas recovered from a €1.3 billion crisis through strategic management decisions. Learn key lessons in crisis management, leadership, and business turnaround from this remarkable case study."
        canonical="https://creekoxley.com/blog/adidas-turnaround"
        article={{
          publishedTime: "2024-07-22T00:00:00Z",
          author: "Creek Oxley Team",
          tags: ["Crisis Management", "Leadership", "Business Turnaround"]
        }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back to blog link */}
            <div className="mb-8">
              <Button variant="ghost" className="text-creekoxley hover:text-creekoxley-medium">
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            {/* Article header */}
            <header className="mb-8">
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
              
              <h1 className="text-4xl md:text-5xl font-bold text-creekoxley mb-6 leading-tight">
                The Remarkable Turnaround of Adidas: A Management Masterclass
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Crisis Management</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Leadership</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Turnaround</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Corporate Strategy</span>
              </div>
            </header>
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In 2022, Adidas was dragged into its biggest crisis in decades through no fault of its own.
              </p>
              
              <p className="mb-6">
                The trouble began when its partner, Kanye West, made a series of highly controversial public statements. Adidas made the principled decision to cut ties with him and the Yeezy line. The move protected the brand's values but came at a staggering cost.
              </p>
              
              <p className="mb-6">
                The fallout was immediate. Adidas lost $1.8 billion in annual sales and was left with €1.5 billion in unsold Yeezy inventory. By early 2023, the company reported its first net loss since 1992, a €58 million hit on €21.4 billion in revenue. North American sales fell sharply and the company's complex bureaucracy slowed critical decisions. Bankruptcy became a real possibility.
              </p>
              
              <h2 className="text-3xl font-bold text-creekoxley mt-8 mb-6">The Shift: Bjørn Gulden Takes the Helm</h2>
              
              <p className="mb-6">
                In January 2023, Bjørn Gulden became CEO, bringing a track record of doubling Puma's profits over a decade. What followed was not just his vision but the decisive actions of a management team that embraced responsibility, acted quickly, and executed with discipline.
              </p>
              
              <h2 className="text-3xl font-bold text-creekoxley mt-8 mb-6">Five Key Moves That Saved Adidas</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Flattening the Structure</h3>
              <p className="mb-6">
                Management cut layers of hierarchy, creating small and agile teams that could act without delays. Decision-making sped up dramatically.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Removing Bureaucratic Barriers</h3>
              <p className="mb-6">
                Frontline teams were given their own budgets and freed from lengthy approval chains. Decisions that once took months now happened in weeks.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Turning the Yeezy Crisis into a Trust Opportunity</h3>
              <p className="mb-6">
                Instead of letting the €1.5 billion in Yeezy stock sit as a liability, management sold it at cost and donated €140 million to anti-racism initiatives. A Harvard Business Review study later found this approach was 30 percent more effective in building trust than standard PR responses.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Reviving Heritage Icons</h3>
              <p className="mb-6">
                Rather than chasing expensive new celebrity deals, Adidas breathed new life into its timeless designs like the Samba and Gazelle. In 2024, Samba sales rose by 25 percent according to Adidas' financial reports.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Holistic Operational Overhaul</h3>
              <p className="mb-6">
                Inventory was reduced by €1.5 billion in 2023, the focus shifted back to sports performance products, and new athlete and team partnerships strengthened the core brand.
              </p>
              
              <h2 className="text-3xl font-bold text-creekoxley mt-8 mb-6">The Results</h2>
              
              <p className="mb-4">By the end of 2023, the transformation was evident.</p>
              <ul className="mb-6 space-y-2">
                <li>Revenue in 2024 reached €23.68 billion, a 12 percent increase.</li>
                <li>Operating profit rose to €1.34 billion, a €1 billion improvement from the previous year.</li>
                <li>The stock price climbed 48 percent, outperforming Nike and Puma.</li>
              </ul>
              
              <p className="mb-6">
                This was achieved without selling off assets, taking bailouts, or implementing mass layoffs.
              </p>
              
              <h2 className="text-3xl font-bold text-creekoxley mt-8 mb-6">Beyond the Numbers: Management Becomes a Brand Asset</h2>
              
              <p className="mb-6">
                Adidas' turnaround was not just operational. The management team created a story that reinforced the brand's values and proved that leadership decisions matter to customers. Studies show 73 percent of consumers research leadership teams before buying and team-driven stories build three times more trust than generic branding.
              </p>
              
              <h2 className="text-3xl font-bold text-creekoxley mt-8 mb-6">What This Means for Your Business</h2>
              
              <p className="mb-6">
                At Creek Oxley, we understand that crises can strike even when it is not your fault. Like Adidas, you can recover and thrive if you have the right management strategies in place.
              </p>
              
              <p className="mb-6">
                We help businesses resolve complex management challenges, revive and develop strategies for sustainable growth, streamline operations, enhance people management, implement effective decision-support systems, and create marketing strategies that build visibility and trust.
              </p>
              
              <p className="mb-8 font-semibold">
                Contact Creek Oxley today and let us help you turn challenges into your next success story.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold text-creekoxley mb-4">Ready to Transform Your Business?</h3>
                <p className="text-gray-600 mb-4">
                  Learn how Creek Oxley can help you navigate challenges and achieve sustainable growth.
                </p>
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/contact" className="text-white">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
        <Footer />
      </div>
    </>
  );
};

export default AdidasTurnaroundArticlePage;