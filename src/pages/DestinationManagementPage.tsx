
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Building } from "lucide-react";

const DestinationManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-slate-50 to-creekoxley-silver/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Destination <span className="text-creekoxley">Management</span> Company
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Seamless event planning and destination expertise to create unforgettable experiences for your corporate events and meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white px-8 py-6 text-lg">
                <Link to="/contact" className="text-white">Request a Quote</Link>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Destination Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Venue Selection</h3>
              <p className="text-gray-600">Expert assistance in finding and securing the perfect venue for your corporate events.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Event Planning</h3>
              <p className="text-gray-600">Comprehensive event planning and management services from concept to execution.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Group Activities</h3>
              <p className="text-gray-600">Curated team-building activities and experiences tailored to your company culture.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Retreats</h3>
              <p className="text-gray-600">Full-service corporate retreat planning to foster team collaboration and growth.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DestinationManagementPage;
