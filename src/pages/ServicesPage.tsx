
import React from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We offer comprehensive consulting solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
