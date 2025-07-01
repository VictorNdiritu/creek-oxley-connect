
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const KenyaExpansionArticlePage = () => {
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
                  <span>July 01, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Creek Oxley Team</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-creekoxley mb-6">
                Expanding into Kenya? Here's Why Your First Call Should Be to A Local Business Management Consultant
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya Expansion</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">East Africa</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Market Entry</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Strategy</span>
              </div>
            </header>
            
            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/b1c91232-bf49-4413-b8a8-ad0056f63c5a.png" 
                alt="Nairobi skyline at sunset showing modern buildings and urban development"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                When an international company chooses to expand into Kenya, the stakes are high. Kenya isn't just another stop on the map — it's the business and innovation gateway to East and Central Africa, one of the continent's most vibrant and competitive regions. But landing in the right place, hiring the right people, and building the right presence isn't automatic. It demands more than market research; it demands boots-on-the-ground insight. That's where a local consultant becomes not just useful, but essential.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Location Isn't Just Geography — It's Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nairobi, Kenya's capital, offers a rich and varied landscape of opportunity. But not all areas are created equal — and a misstep in choosing your office location could quietly sabotage your entry before you've even started.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Take for instance:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Westlands, Upper Hill, and Kilimani</strong> — these are prime zones where deals are made over brunch, coworking spaces buzz with startup energy, and global minds converge. They resemble the "New York-like" network effect: the more elite businesses gather, the more gravity they create.</li>
                <li><strong>Konza Technopolis</strong> — Kenya's ambitious "Silicon Savannah," a smart city purpose-built for tech giants, research institutions, and future-forward industries. Settling here signals vision, innovation, and long-term commitment to Africa's digital future.</li>
                <li><strong>The CBD and Eastlands</strong>, on the other hand, while accessible and populous, may not offer the same strategic edge. Congestion, outdated infrastructure, and limited B2B engagement often make these areas more reactive than proactive.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Your physical location says something to the market. A presence in the right hub can attract high-profile partnerships, talent, and clients. A poorly chosen site? It could leave you invisible — or worse, irrelevant.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Who Do You Hire in a Hyper-Competitive Market?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kenya is also home to an impressive and diverse talent pool. But hiring here isn't as simple as opening up LinkedIn and scanning resumes. Do you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Bring in your own team from your headquarters abroad?</li>
                <li>Hire local talent who've grown within Kenyan companies and know how to navigate the regulatory, political, and market terrain?</li>
                <li>Tap into individuals from international companies with experience bridging global expectations and local delivery?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Each path has its pros and pitfalls — and choosing wrong can cost you dearly. Hiring someone who doesn't know how to "move the ground" in Kenya is a shortcut to slow execution, missed opportunities, and a frustrating rollout.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                In a country where the stakes are this high, there's a real risk of messing it all up on arrival. From poor location choices to misfiring on recruitment, it's not hard to end up dead on arrival before your business even takes off.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Why You Need a Local Team With National Insight</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                You need a consultant who knows where the money is moving, where the talent lives, and how to thread the needle between vision and execution. A partner who understands not just Nairobi, but the broader shifts from Konza City to Kisumu's innovation zones, Mombasa's logistics corridors, and the cross-border trade routes forming around the EAC bloc.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Kenya is not just a country — it's the engine of East and Central Africa. If you succeed here, you've effectively captured access to almost 50% of Africa's business influence. But only if you land smart.
              </p>
              
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Let Someone Show You the Ground — And Own It With You</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Set yourself up for a perfect landing. Let a seasoned team guide your office setup, talent acquisition, and business development strategies. Don't just show up—show up strategically.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Work with people who know the Kenyan economy by heart. Work with Creek Oxley. Your gateway to Kenya. Your guide to East Africa.
              </p>
            </div>
            
            {/* CTA */}
            <div className="bg-creekoxley/5 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-creekoxley mb-4">Ready to Expand into Kenya?</h3>
              <p className="text-gray-700 mb-6">
                Let Creek Oxley be your local partner for a successful market entry. We'll help you navigate the opportunities and challenges of expanding into East Africa's most dynamic market.
              </p>
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                <Link to="/contact" className="text-white">Start Your Kenya Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default KenyaExpansionArticlePage;
