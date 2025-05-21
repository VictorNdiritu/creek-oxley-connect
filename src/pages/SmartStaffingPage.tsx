
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserCheck, BarChart, Briefcase, Target } from "lucide-react";

const SmartStaffingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-slate-50 to-creekoxley-silver/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Smart <span className="text-creekoxley">Staffing</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Innovative talent acquisition and workforce management solutions to help your business thrive with the right team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white px-8 py-6 text-lg">
                <Link to="/contact" className="text-white">Find Talent</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-creekoxley-light/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-creekoxley/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Staffing Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Talent Acquisition</h3>
              <p className="text-gray-600">Strategic recruitment solutions to identify and attract top-tier talent for your organization.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract Staffing</h3>
              <p className="text-gray-600">Flexible workforce solutions to meet your temporary and project-based needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workforce Analytics</h3>
              <p className="text-gray-600">Data-driven insights to optimize your talent strategy and workforce planning.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Executive Search</h3>
              <p className="text-gray-600">Specialized recruitment for leadership and executive positions to drive organizational success.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SmartStaffingPage;
