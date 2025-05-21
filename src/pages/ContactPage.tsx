
import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Get in touch with our team for personalized consulting solutions.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="h-12 w-12 mx-auto bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-creekoxley" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@creekoxley.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="h-12 w-12 mx-auto bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-creekoxley" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+254 725 276 757</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="h-12 w-12 mx-auto bg-creekoxley/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-creekoxley" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">Riverside Close, Riverside Drive</p>
                <p className="text-gray-600">Opposite Oyster Paradise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
