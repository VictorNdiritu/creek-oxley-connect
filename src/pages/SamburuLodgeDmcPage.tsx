import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

import imgRibbonCutting from "@/assets/samburu-ribbon-cutting.jpg";
import imgSignage from "@/assets/samburu-signage.jpg";
import imgTreePlanting from "@/assets/samburu-tree-planting.jpg";

const SamburuLodgeDmcPage = () => {
  return (
    <>
      <SEOHead
        title="Samburu Elephant Lodge | Creek Oxley DMC"
        description="Samburu Elephant Lodge — an exclusive wildlife lodge in Samburu, Kenya. Managed by Creek Oxley DMC. Contact us for bookings and partnerships."
        canonical="https://creekoxley.com/dmc/samburu"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src={imgRibbonCutting}
              alt="Samburu Elephant Lodge opening ceremony"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <nav className="text-sm text-white/70 mb-4">
                  <Link to="/dmc" className="hover:text-white transition-colors">DMC</Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">Samburu</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Samburu Elephant Lodge
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Samburu, Kenya</span>
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
                Full property details for Samburu Elephant Lodge are being prepared. Contact our DMC team for more information about this stunning wildlife lodge.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <img src={imgRibbonCutting} alt="Samburu Elephant Lodge ribbon cutting ceremony" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
              <img src={imgSignage} alt="Samburu Elephant Lodge signage" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
              <img src={imgTreePlanting} alt="Tree planting ceremony at Samburu Elephant Lodge" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
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

export default SamburuLodgeDmcPage;
