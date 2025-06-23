
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConnectedBrands from "@/components/ConnectedBrands";
import BlogPreview from "@/components/BlogPreview";
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-creekoxley text-center">
              About Creek Oxley
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
              <span className="font-semibold text-creekoxley">Vision:</span> To build strategic sustainable business ecosystems 
              that are environmentally friendly.
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-creekoxley">Mission:</span> Transforming one business at a time to realize the 
              dream of positively contributing to the economic prosperity of our region by offering 
              quality service to our clients and community.
            </p>
          </div>
        </div>
      </section>
      
      <Services />
      <ConnectedBrands />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
