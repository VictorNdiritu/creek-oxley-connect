import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Building } from "lucide-react";

const LuxoraHotelPage = () => {
  return (
    <>
      <SEOHead
        title="Luxora Hotel, Lodwar | Creek Oxley DMC"
        description="Luxora Hotel in Lodwar, Kenya — a premier hospitality destination managed by Creek Oxley DMC. Contact us for bookings and partnerships."
        canonical="https://creekoxley.com/dmc/lodwar"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-950">
            <div className="absolute inset-0 flex items-center justify-center">
              <Building className="h-32 w-32 text-white/20" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <nav className="text-sm text-white/70 mb-4">
                  <Link to="/dmc" className="hover:text-white transition-colors">DMC</Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">Lodwar</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Luxora Hotel
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Lodwar, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Placeholder */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8">
                Full property details for Luxora Hotel are being prepared. Contact our DMC team for more information about this premier destination in Lodwar.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Phone className="h-5 w-5 text-teal-700" />
                  <a href="tel:+254110463062" className="text-gray-700 hover:text-teal-700">+254 110 463 062</a>
                </div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Mail className="h-5 w-5 text-teal-700" />
                  <a href="mailto:dmc@creekoxley.com" className="text-gray-700 hover:text-teal-700">dmc@creekoxley.com</a>
                </div>
                <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                  <Link to="/contact" className="text-white">Contact Creek Oxley</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LuxoraHotelPage;
