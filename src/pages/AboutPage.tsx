
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* About Hero Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Building strategic sustainable business ecosystems that are environmentally friendly.
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main About Content - Centered */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About <span className="text-creekoxley">Creek Oxley</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Creek Oxley provides practical, custom-made solutions for management problems faced by 
              business owners and executives. Our focus is on organizational transformation using 
              a diagnostic approach that incorporates scientific management tools and best practices.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With decades of combined experience, our team of expert consultants brings industry-specific knowledge 
              and innovative solutions to address your most complex business challenges.
            </p>
            <p className="text-lg text-gray-600">
              We partner with organizations of all sizes across various industries, providing strategic guidance 
              and actionable insights that drive measurable results.
            </p>
          </div>
          
          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-creekoxley">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To build strategic sustainable business ecosystems that are environmentally friendly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-creekoxley">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Transforming one business at a time to realize the dream of positively contributing to the economic 
                prosperity of our region by offering quality service to our clients and community.
              </p>
            </div>
          </div>
          
          {/* Expertise Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Our Areas of Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Organizational Behavior</h4>
                <p className="text-gray-600">Understanding and improving workplace dynamics</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Business Management</h4>
                <p className="text-gray-600">Optimizing operations and leadership processes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Marketing</h4>
                <p className="text-gray-600">Creating effective strategies for customer engagement</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Business Strategy</h4>
                <p className="text-gray-600">Developing roadmaps for sustainable growth</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Supply Chain</h4>
                <p className="text-gray-600">Streamlining logistics and procurement</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Employee Productivity</h4>
                <p className="text-gray-600">Enhancing workforce performance and satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Systems Management</h4>
                <p className="text-gray-600">Improving operational frameworks and processes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold text-creekoxley mb-2">Audit</h4>
                <p className="text-gray-600">Comprehensive assessment of business practices</p>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="text-creekoxley">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold mb-2">Commitment to Quality</h4>
                <p>We deliver excellence in every aspect of our work</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold mb-2">Innovation & Adaptability</h4>
                <p>We embrace change and pioneer creative solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold mb-2">Client-Centric Excellence</h4>
                <p>We prioritize our clients' success above all</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4 className="font-semibold mb-2">Integrity & Trustworthiness</h4>
                <p>We operate with transparency and ethical standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
