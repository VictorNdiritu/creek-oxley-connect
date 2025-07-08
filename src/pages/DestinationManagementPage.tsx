
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
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wide text-creekoxley font-medium">Creek Oxley Service Division</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Destination <span className="text-creekoxley">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creek Oxley's specialized destination management division dedicated to promoting 
              hospitality businesses on international platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-creekoxley hover:bg-creekoxley-medium text-white px-8 py-6 text-lg">
                <Link to="/contact" className="text-white">Contact Creek Oxley</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-creekoxley-light/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-creekoxley/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About This Division</h2>
            <p className="text-lg text-gray-600">
              Creek Oxley's Destination Management division focuses on enhancing the visibility of hotels, camps, and other hospitality properties 
              through strategic marketing campaigns executed at global trade shows and exhibitions.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Our mission is to connect unique hospitality experiences with the right international audiences, 
              driving brand awareness, customer engagement, and business growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Core Competencies */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Competencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Global Exhibition Marketing</h3>
              <p className="text-gray-600">Designing and managing impactful presence at major international trade shows.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Brand Promotion</h3>
              <p className="text-gray-600">Creating compelling narratives and visual branding to highlight clients' unique offerings.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Networking Facilitation</h3>
              <p className="text-gray-600">Building valuable partnerships with travel agencies, industry stakeholders, and potential collaborators.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Digital Marketing</h3>
              <p className="text-gray-600">Leveraging online platforms to extend reach and engagement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Lead Nurturing</h3>
              <p className="text-gray-600">Executing targeted follow-up campaigns to convert prospects into loyal customers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exhibition Booth Design & Setup</h3>
              <p className="text-gray-600">We design visually appealing, engaging booths that showcase your property's unique features to attract and captivate international visitors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Promotional Material Development</h3>
              <p className="text-gray-600">Creation of professional brochures, flyers, and digital content tailored to showcase your hospitality amenities and services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Networking & Partnerships</h3>
              <p className="text-gray-600">Facilitation of introductions and partnerships with key players in the travel and hospitality industries to broaden your market reach.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media & Online Promotion</h3>
              <p className="text-gray-600">Campaigns crafted to generate online buzz and drive traffic to your exhibition presence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-12 w-12 bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-creekoxley" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow-Up Marketing Campaigns</h3>
              <p className="text-gray-600">Targeted communications to engage leads post-event, ensuring continued interest and conversions.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Exhibitions */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Upcoming Exhibitions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Adriaticon Management Command</h3>
              <p className="text-gray-600">Holiday World Region World</p>
              <p className="text-gray-600 font-medium mt-2">March 14–16, 2025</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">ITE Hong Kong</h3>
              <p className="text-gray-600">International Travel Expo</p>
              <p className="text-gray-600 font-medium mt-2">June 12–15, 2025</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-creekoxley">Arabian Travel Market</h3>
              <p className="text-gray-600">Dubai</p>
              <p className="text-gray-600 font-medium mt-2">Date TBA</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              These platforms offer excellent opportunities to showcase client properties and network with global travel and hospitality professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Creek Oxley</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Paul Mwenda</h3>
              <p className="text-gray-600 mb-1">Managing Partner</p>
              <p className="text-gray-600 mb-4">Creek Oxley Management Consulting</p>
              <p className="text-gray-600 mb-1">Phone: +254 725 276 757</p>
              <p className="text-gray-600">Email: info@creekoxley.com</p>
              <div className="mt-6">
                <Button className="bg-creekoxley hover:bg-creekoxley-medium">
                  <Link to="/contact" className="text-white">Get in Touch</Link>
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

export default DestinationManagementPage;
