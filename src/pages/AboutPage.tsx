import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About Creek Oxley | Leading Management Consulting Firm in East Africa"
        description="Creek Oxley is a premier management consulting firm specializing in organizational transformation, business strategy, and sustainable growth across East Africa. Discover our story, expertise, and commitment to building strategic business ecosystems."
        canonical="https://creekoxley.com/about"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section with Brand Colors */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-creekoxley/5 via-white to-creekoxley/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-creekoxley">
                Transforming Businesses Across East Africa
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Creek Oxley is more than a consulting firm—we are strategic partners committed to building sustainable business ecosystems that drive economic prosperity while respecting our environment.
              </p>
            </div>
          </div>
        </section>
        
        <main>
          {/* Our Story */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-creekoxley">Our Story</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="text-lg leading-relaxed">
                    Founded on the principle that every business challenge has a practical, tailored solution, Creek Oxley emerged from a vision to transform the East African business landscape. We recognized a critical gap in the market: organizations needed more than generic advice—they needed strategic partners who understood the unique dynamics of operating in diverse, rapidly evolving markets.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we stand as a trusted advisor to businesses across Kenya, Rwanda, Uganda, Tanzania, and beyond. Our multidisciplinary team combines deep regional expertise with global best practices, delivering solutions that are both innovative and implementable. From startups finding their footing to established enterprises navigating digital transformation, we've guided organizations through every stage of their growth journey.
                  </p>
                  <p className="text-lg leading-relaxed">
                    What sets Creek Oxley apart is our diagnostic approach. We don't believe in one-size-fits-all solutions. Instead, we employ scientific management tools and rigorous analysis to understand the root causes of organizational challenges. This evidence-based methodology ensures that our recommendations are not just theoretically sound but practically transformative.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision with Brand Styling */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-creekoxley">
                    <h3 className="text-2xl font-bold mb-4 text-creekoxley">Our Vision</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To be the catalyst for sustainable business excellence across East Africa, building strategic ecosystems where economic prosperity and environmental responsibility thrive together.
                    </p>
                  </div>
                  <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-creekoxley">
                    <h3 className="text-2xl font-bold mb-4 text-creekoxley">Our Mission</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Transforming businesses one partnership at a time through practical, data-driven solutions that unlock organizational potential, enhance operational efficiency, and contribute meaningfully to regional economic development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-creekoxley text-center">What We Do</h2>
                <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                  We provide comprehensive management consulting services designed to address the real challenges facing modern businesses in East Africa and beyond.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-creekoxley/5 p-8 rounded-xl border border-creekoxley/20">
                    <h3 className="text-xl font-bold mb-4 text-creekoxley">Strategic Consulting</h3>
                    <p className="text-gray-700 leading-relaxed">
                      From market entry strategies to organizational restructuring, we help leaders make informed decisions that position their businesses for long-term success. Explore our full range of <Link to="/services" className="text-creekoxley hover:underline font-semibold">consulting services</Link>.
                    </p>
                  </div>
                  <div className="bg-creekoxley/5 p-8 rounded-xl border border-creekoxley/20">
                    <h3 className="text-xl font-bold mb-4 text-creekoxley">Operational Excellence</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We optimize your operations through process improvement, supply chain management, and systems integration—ensuring efficiency without compromising quality or sustainability.
                    </p>
                  </div>
                  <div className="bg-creekoxley/5 p-8 rounded-xl border border-creekoxley/20">
                    <h3 className="text-xl font-bold mb-4 text-creekoxley">Change Management</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Organizational transformation requires more than new processes—it demands cultural alignment. We guide teams through change with training, leadership development, and communication strategies.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-creekoxley">Our Specialized Expertise</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Organizational Behavior</h4>
                      <p className="text-sm text-gray-600">Transforming workplace culture and team dynamics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Business Strategy</h4>
                      <p className="text-sm text-gray-600">Crafting roadmaps for competitive advantage</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Marketing & Growth</h4>
                      <p className="text-sm text-gray-600">Building brands and driving customer acquisition</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Supply Chain</h4>
                      <p className="text-sm text-gray-600">Optimizing logistics and procurement systems</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Financial Management</h4>
                      <p className="text-sm text-gray-600">Improving financial controls and profitability</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Human Capital</h4>
                      <p className="text-sm text-gray-600">Enhancing productivity and employee engagement</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Digital Transformation</h4>
                      <p className="text-sm text-gray-600">Leveraging technology for business innovation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-creekoxley mb-2">Compliance & Audit</h4>
                      <p className="text-sm text-gray-600">Ensuring governance and regulatory adherence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-creekoxley/5">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-creekoxley text-center">Our Proven Methodology</h2>
                <p className="text-xl text-gray-700 text-center mb-12">
                  Every engagement follows a structured, diagnostic approach that ensures measurable results.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-creekoxley">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">1. Discovery & Diagnosis</h3>
                    <p className="text-gray-700">
                      We begin by understanding your business context, challenges, and aspirations through stakeholder interviews, data analysis, and organizational assessment.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-creekoxley">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">2. Strategy Development</h3>
                    <p className="text-gray-700">
                      Using evidence-based insights, we design tailored strategies that align with your goals, resources, and market realities—always practical, never theoretical.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-creekoxley">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">3. Implementation Support</h3>
                    <p className="text-gray-700">
                      Strategy without execution is merely aspiration. We work alongside your teams to implement solutions, providing training, tools, and ongoing guidance.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-creekoxley">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">4. Measurement & Optimization</h3>
                    <p className="text-gray-700">
                      We establish KPIs, track progress, and continuously refine approaches to ensure sustainable improvements and long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-creekoxley text-center">Why Organizations Choose Creek Oxley</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-creekoxley/10 rounded-full flex items-center justify-center">
                      <span className="text-creekoxley font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-creekoxley">Regional Expertise</h3>
                      <p className="text-gray-700">
                        Deep understanding of East African markets, regulatory environments, and business cultures—insights you won't find in generic international firms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-creekoxley/10 rounded-full flex items-center justify-center">
                      <span className="text-creekoxley font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-creekoxley">Proven Track Record</h3>
                      <p className="text-gray-700">
                        Decades of combined experience delivering tangible results across diverse industries—from hospitality and tourism to manufacturing and retail.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-creekoxley/10 rounded-full flex items-center justify-center">
                      <span className="text-creekoxley font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-creekoxley">Practical Solutions</h3>
                      <p className="text-gray-700">
                        No ivory tower theories—our recommendations are designed for real-world implementation with measurable ROI.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-creekoxley/10 rounded-full flex items-center justify-center">
                      <span className="text-creekoxley font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-creekoxley">Sustainable Impact</h3>
                      <p className="text-gray-700">
                        We balance profitability with environmental responsibility, helping you build businesses that contribute positively to communities and ecosystems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-creekoxley text-center">
                  Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-creekoxley text-center">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">Excellence</h3>
                    <p className="text-gray-700">
                      We commit to delivering the highest quality in every engagement, never settling for mediocrity.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-creekoxley text-center">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">Innovation</h3>
                    <p className="text-gray-700">
                      We embrace change and pioneer creative solutions that challenge conventional thinking.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-creekoxley text-center">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">Partnership</h3>
                    <p className="text-gray-700">
                      Your success is our success—we work as true partners invested in your long-term growth.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-creekoxley text-center">
                    <h3 className="text-xl font-bold mb-3 text-creekoxley">Integrity</h3>
                    <p className="text-gray-700">
                      We operate with complete transparency, honesty, and ethical standards in all our relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Insights Link */}
          <section className="py-16 md:py-24 bg-creekoxley/5">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-creekoxley">
                  Stay Informed with Our Insights
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Explore our latest thinking on business strategy, organizational transformation, and market trends across East Africa.
                </p>
                <Link 
                  to="/blog" 
                  className="inline-block bg-creekoxley text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-creekoxley/90 transition-colors"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-creekoxley">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Let's discuss how Creek Oxley can help you overcome challenges, seize opportunities, and achieve sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-creekoxley text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-creekoxley/90 transition-colors"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    to="/services" 
                    className="inline-block bg-white text-creekoxley border-2 border-creekoxley px-8 py-4 rounded-lg font-semibold text-lg hover:bg-creekoxley/5 transition-colors"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;