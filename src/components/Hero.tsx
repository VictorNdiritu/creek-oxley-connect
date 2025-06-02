
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-slate-50 to-creekoxley-silver/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-creekoxley font-semibold text-lg tracking-wider">
              Observation.Innovation.Results
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Expert <span className="text-creekoxley">Management Consulting</span> For Your Business
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 mx-auto">
            Creek Oxley provides innovative management solutions to help your business grow,
            adapt, and succeed in today's competitive marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white px-8 py-6 text-lg">
              <Link to="/services" className="text-white">Our Services</Link>
            </Button>
            <Button variant="outline" className="border-creekoxley text-creekoxley hover:bg-creekoxley/10 px-8 py-6 text-lg">
              <Link to="/contact" className="text-creekoxley">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-creekoxley-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-creekoxley/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
