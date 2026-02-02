import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import firefighterCover from "@/assets/firefighter-manager-cover.png";

const FirefighterManagerArticlePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="The 'Firefighter' Manager: When Being Busy is the Biggest Barrier to Growth | Creek Oxley"
        description="Discover why constantly fighting fires keeps managers from strategic work. Learn how to break the cycle of operational overwhelm and build systems that prevent future crises."
        canonical="https://creekoxley.com/blog/firefighter-manager"
        ogImage="https://creekoxley.com/firefighter-manager-cover.png"
        article={{
          publishedTime: "2026-02-02T00:00:00Z",
          author: "Creek Oxley",
          tags: ["Management", "Leadership", "Productivity", "Strategy", "Business Growth"]
        }}
      />
      <Navbar />
      
      <article className="pt-20">
        {/* Hero Section with Cover Image */}
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <img 
            src={firefighterCover} 
            alt="Manager putting out fires at desk - metaphor for reactive management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-4 mb-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 2, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Creek Oxley</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                The "Firefighter" Manager: When Being Busy is the Biggest Barrier to Growth
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-creekoxley hover:text-creekoxley-medium mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                It's 8:00 PM. The office is quiet, and you're finally heading to your car, physically and mentally exhausted. You've had a "productive" day by any standard: you cleared 50 emails, navigated three unexpected crises, and sat through four back-to-back meetings.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                But as you drive home, a nagging question creeps in: <strong>What value did I actually add to the company today?</strong>
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                If you struggle to answer that, you aren't alone. You've likely fallen into the "Firefighter Trap"—a common cycle where operational managers spend their entire day solving urgent problems, leaving zero room for the important strategic work they were actually hired to do.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mt-12 mb-6">
                The Reality of the "Urgent"
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                In a perfect world, systems never fail and human error doesn't exist. But in reality, mistakes happen. Servers go down, deadlines shift, and miscommunications occur. These are natural "fires" in any thriving organization.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                The problem isn't that these fires exist; it's that we've become so good at fighting them that we've forgotten how to build fireproof structures. When a manager becomes the primary firefighter, they become a bottleneck. They are so busy saving the day that they can't see the horizon.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mt-12 mb-6">
                Understanding the Overload: The Eisenhower Matrix
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                To break the cycle, we have to look at how we categorize our time. Most managers feel productive when they are busy, but productivity is actually about priority.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-creekoxley mb-4">The Urgent & Important (The Immediate)</h3>
                <p className="text-gray-600 mb-4">
                  These are the fires that <em>must</em> be put out. A critical client issue or a major system failure. These are unavoidable, but they should be the exception, not the rule.
                </p>

                <h3 className="text-xl font-semibold text-creekoxley mb-4">The Urgent & Not Important (The Noise)</h3>
                <p className="text-gray-600 mb-4">
                  These are the pings, the "quick questions," and the meetings that could have been an email. They feel urgent because they are loud, but they often steal the time you need for real work.
                </p>

                <h3 className="text-xl font-semibold text-creekoxley mb-4">The Not Urgent & Important (The Strategy)</h3>
                <p className="text-gray-600">
                  This is where long-term growth lives. It's the time spent training your team, refining processes, and planning for next year. Because these tasks don't have a "ticking clock," they are the first to be sacrificed—yet they are the only tasks that actually prevent future fires.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mt-12 mb-6">
                The Trap of "Constant Availability"
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Many of us were taught that a "good manager" always has their door open. We want to be there for our team. However, constant availability can unintentionally create a culture of dependency.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                If a team feels they need their manager's input for every minor hurdle, they lose the opportunity to grow their own problem-solving skills. Leadership isn't about having all the answers; it's about empowering your team to find them.
              </p>

              <div className="bg-creekoxley/5 border-l-4 border-creekoxley p-6 my-8">
                <p className="text-gray-700 italic">
                  When the business can function smoothly while you are focused on high-level strategy, that is the ultimate sign of management success.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-creekoxley mt-12 mb-6">
                Making it Easier with Creek Oxley
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Managing a business is a high-wire act. It's a constant balance between keeping the lights on today and building the infrastructure for tomorrow. It's hard work, and it requires a shift in mindset that doesn't happen overnight.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                At Creek Oxley, we specialize in making that transition easier. We work with operational managers to help them move from the exhaustion of the "8 PM burnout" to the clarity of strategic leadership. We provide the frameworks and support needed to turn a team of "firefighters" into a team of "builders."
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                You don't have to choose between being busy and being effective. Let Creek Oxley help you find the balance.
              </p>

              <div className="flex flex-wrap gap-2 my-8">
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Management</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Leadership</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Productivity</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Strategy</span>
                <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Growth</span>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-semibold text-creekoxley mb-4">Ready to Break Free from the Firefighter Trap?</h3>
                <p className="text-gray-600 mb-6">
                  Contact Creek Oxley today to discuss how we can help transform your management approach from reactive to strategic.
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
  );
};

export default FirefighterManagerArticlePage;
