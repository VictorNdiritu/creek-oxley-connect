
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConnectedBrands from "@/components/ConnectedBrands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About <span className="text-creekoxley">Creek Oxley</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Creek Oxley provides practical, custom-made solutions for management problems faced by 
                business owners and executives. Our focus is on organizational transformation using 
                a diagnostic approach that incorporates scientific management tools and best practices.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team has expertise in organizational behavior, business management, marketing, 
                business strategy, supply chain, employee productivity, and systems management and audit.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-semibold">Vision:</span> To build strategic sustainable business ecosystems 
                that are environmentally friendly.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-semibold">Mission:</span> Transforming one business at a time to realize the 
                dream of positively contributing to the economic prosperity of our region by offering 
                quality service to our clients and community.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-creekoxley/5 rounded-lg transform -rotate-3"></div>
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-creekoxley-medium/5 rounded-lg transform rotate-3"></div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <div className="text-4xl font-bold text-creekoxley mb-2">15+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <div className="text-4xl font-bold text-creekoxley mb-2">200+</div>
                    <div className="text-gray-600">Satisfied Clients</div>
                  </div>
                  <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <div className="text-4xl font-bold text-creekoxley mb-2">50+</div>
                    <div className="text-gray-600">Expert Consultants</div>
                  </div>
                  <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <div className="text-4xl font-bold text-creekoxley mb-2">95%</div>
                    <div className="text-gray-600">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <ConnectedBrands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
