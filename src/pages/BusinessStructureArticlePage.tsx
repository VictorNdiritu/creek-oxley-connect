
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";

const BusinessStructureArticlePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Article Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-creekoxley/5 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6">
              <Link to="/blog" className="flex items-center gap-2 text-creekoxley">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 08, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Creek Oxley Team</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-creekoxley mb-6">
              Choosing Between a Business Name, LLP and Company Formation in Kenya
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Starting a business in Kenya isn't just about the idea or the market — it's also about structure. 
              The choice between registering a Business Name, setting up an LLP, or incorporating a Private Limited Company 
              can have lasting consequences on liability, taxes, credibility and growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-lg text-gray-700 mb-8">
              So, which is right for you? Here's a closer look — through a practical, Kenyan lens.
            </p>

            <div className="bg-creekoxley/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-creekoxley mb-4">Why the legal structure matters</h2>
              <p className="text-gray-700 mb-4">
                Many entrepreneurs rush registration as a formality — but the structure you choose affects:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Your personal risk exposure</li>
                <li>• Your ability to attract partners or investors</li>
                <li>• How the business is taxed</li>
                <li>• Ongoing compliance obligations</li>
                <li>• Even how clients perceive your brand</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Choosing correctly can save headaches later. Choosing blindly can limit or even sink a promising venture.
              </p>
            </div>

            <div className="space-y-12">
              {/* Business Name Section */}
              <div className="border border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-creekoxley mb-4">
                  The Business Name: simplicity, but at a cost
                </h2>
                <p className="text-gray-700 mb-6">
                  A Business Name — often a sole proprietorship or general partnership — is the simplest and cheapest option. 
                  Registration is quick on eCitizen and requires only your details and a proposed name.
                </p>
                <p className="text-gray-700 mb-6">
                  For small or low-risk businesses — think boutiques, small shops, freelancers — this is often enough.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Advantages</h3>
                    </div>
                    <ul className="space-y-2 text-green-700">
                      <li>• Fast, low-cost registration</li>
                      <li>• Simple compliance</li>
                      <li>• Owner keeps full control and profits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Drawbacks</h3>
                    </div>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>Unlimited liability:</strong> your personal assets are at risk if the business owes money or faces legal action</li>
                      <li>• Harder to raise funding: banks and investors prefer incorporated entities</li>
                      <li>• The business is legally tied to the owner — if the owner leaves or dies, so does the business</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    <strong>In short:</strong> perfect for testing an idea or staying small — risky if you plan to scale.
                  </p>
                </div>
              </div>

              {/* LLP Section */}
              <div className="border border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-creekoxley mb-4">
                  Limited Liability Partnership (LLP): protection and flexibility
                </h2>
                <p className="text-gray-700 mb-6">
                  Introduced in Kenya in 2012, an LLP is gaining ground among consultants, law firms and other professional service providers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Advantages</h3>
                    </div>
                    <ul className="space-y-2 text-green-700">
                      <li>• Partners enjoy limited liability: you risk losing your stake, not your house or car</li>
                      <li>• Perpetual succession: the LLP continues even if partners change</li>
                      <li>• Flexible structure with fewer formal requirements than a company</li>
                      <li>• Taxed at partner level, often simplifying tax reporting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Drawbacks</h3>
                    </div>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Needs at least two partners (and a manager)</li>
                      <li>• Slightly higher setup cost than a Business Name</li>
                      <li>• Still less familiar to banks and some investors</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    <strong>Ideal if:</strong> you're a group of professionals who want shared ownership and liability protection, without corporate formality.
                  </p>
                </div>
              </div>

              {/* Private Limited Company Section */}
              <div className="border border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-creekoxley mb-4">
                  Private Limited Company: credibility and scalability
                </h2>
                <p className="text-gray-700 mb-6">
                  Incorporating a Private Limited Company is the classic choice for businesses that plan to grow, 
                  attract investment, or build a recognizable brand.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Advantages</h3>
                    </div>
                    <ul className="space-y-2 text-green-700">
                      <li>• Shareholders have limited liability</li>
                      <li>• Separate legal entity: the company owns assets, signs contracts and can continue beyond the founders</li>
                      <li>• Easier to raise capital, sign large contracts and gain credibility</li>
                      <li>• Clear structure for multiple shareholders and directors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Drawbacks</h3>
                    </div>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Higher setup and compliance cost: annual returns, formal meetings, record keeping</li>
                      <li>• Subject to corporate tax, VAT and other regulations</li>
                      <li>• More rigid than a partnership or sole proprietorship</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    If you're serious about growth, hiring, or external funding — this is often the natural choice.
                  </p>
                </div>
              </div>

              {/* Decision Guide */}
              <div className="bg-creekoxley/5 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-creekoxley mb-6">So, what should you choose?</h2>
                <p className="text-gray-700 mb-6">
                  There's no single answer — but here's a quick guide:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-creekoxley text-white">
                        <th className="border border-gray-300 p-4 text-left">Scenario</th>
                        <th className="border border-gray-300 p-4 text-left">Best Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-4">Testing an idea, small solo venture</td>
                        <td className="border border-gray-300 p-4 font-semibold">Business Name</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4">Group of professionals wanting flexibility + protection</td>
                        <td className="border border-gray-300 p-4 font-semibold">LLP</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-4">Business aiming to scale, raise funds, hire staff</td>
                        <td className="border border-gray-300 p-4 font-semibold">Private Limited Company</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="bg-white border-2 border-creekoxley rounded-lg p-8">
                <h2 className="text-3xl font-bold text-creekoxley mb-6">Final thoughts</h2>
                <p className="text-gray-700 mb-6">
                  Legal structures are not just paperwork: they shape your risk, growth potential, and perception in the market.
                </p>
                
                <p className="text-gray-700 mb-4">Before deciding, ask:</p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• How big do you plan to grow?</li>
                  <li>• Do you need to protect personal assets?</li>
                  <li>• Will you raise outside capital?</li>
                  <li>• Do you want partners — and if so, how involved?</li>
                </ul>
                
                <p className="text-lg font-semibold text-creekoxley">
                  At Creek Oxley, we help founders and directors look beyond today — and choose the structure that supports tomorrow.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Business Formation</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Kenya Business</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Legal Structure</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">Company Formation</span>
              <span className="bg-creekoxley/10 text-creekoxley px-3 py-1 rounded-full text-sm">LLP</span>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-creekoxley/5 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-creekoxley mb-4">
                  Need help choosing the right business structure?
                </h3>
                <p className="text-gray-700 mb-6">
                  Our experienced consultants can guide you through the decision-making process and help you set up your business for success.
                </p>
                <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white">
                  <Link to="/contact" className="text-white">
                    Get Expert Advice
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BusinessStructureArticlePage;
